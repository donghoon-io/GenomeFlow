<script>
	import { onMount } from 'svelte';
	import mermaid from 'mermaid';
	import { page } from "$app/stores";
	import { tens, timeDiff } from "$lib/dateformat.js";

	const { id, id_task } = $page.params;

	var job_data = [];
	var logger_data = [];
	
	mermaid.initialize({
		startOnLoad: true
	});

	onMount(async () => {
		fetch(
			"http://127.0.0.1:5555/?" +
				new URLSearchParams({
					table: "job",
					query: "sno",
					equals: `${id}`,
				}),
			{ method: "GET" }
		)
			.then((response) => response.json())
			.then((data) => {
				job_data = data;

				fetch(
					"http://127.0.0.1:5555/?" +
						new URLSearchParams({
							table: "logger",
							query: "sno",
							equals: id_task,
						}),
					{ method: "GET" }
				)
					.then((response) => response.json())
					.then((data) => {
						logger_data = data;
					})
					.catch((error) => {
						console.log(error);
						logger_data = [];
					});
			})
			.catch((error) => {
				console.log(error);
				job_data = [];
			});
			
		mermaid.init();
	});
	
</script>

<svelte:head>
	<title>selected_job_dag</title>
</svelte:head>

<section>
	<div class="bg-gray-50 drop-shadow-lg overflow-hidden sm:rounded-lg mb-3">
		<div class="px-4 py-5 sm:px-6">
			<div class="flex gap-3">
				<a href="/">
					<svg
						class="w-6 h-6 dark:text-black"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/></svg
					>
				</a>
				{#each job_data as job}
					<h3 class="text-lg leading-6 font-medium text-gray-900">
						{job.job_name}
					</h3>
				{/each}
			</div>
		</div>
		<hr />
		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase">
				<tr>
					<th scope="col" class="px-6 py-3"> No </th>
					<th scope="col" class="px-6 py-3"> Project name </th>
					<th scope="col" class="px-6 py-3"> Job name </th>
					<th scope="col" class="px-6 py-3"> Job status </th>
					<th scope="col" class="px-6 py-3">
						Total tasks
						<br />
						<span style="font-size: 10px; font-weight: 400;"
							>(processing / completed / failed)</span
						>
					</th>
					<th scope="col" class="px-6 py-3">
						Total<br/>elapsed time<br/>
						<span style="font-size: 10px; font-weight: 400;">(days:hours:minutes)</span>
					</th>
					<th scope="col" class="px-6 py-3"> Cost </th>
					<th scope="col" class="px-6 py-3"> Updated </th>
					<th scope="col" class="px-6 py-3">
						<span class="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			{#each job_data as job}
				<tbody>
					<tr>
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>{job.sno}</th
						>
						<td class="px-6 py-4">{job.project_name}</td>
						<td class="px-6 py-4">{job.job_name}</td>
						{#if job.task_count_completed == job.task_count_total}
							<td class="px-6 py-4">
								<p
									class="text-sm text-white bg-blue-700 px-2 py-1 rounded-md text-center"
								>
									Completed
								</p>
							</td>
						{:else if job.task_count_completed != 0}
							<td class="px-6 py-4">
								<p
									class="text-sm text-white bg-blue-400 px-2 py-1 rounded-md text-center"
								>
									Processing
								</p>
							</td>
						{:else}
							<td class="px-6 py-4">
								<p
									class="text-sm text-black bg-yellow-300 px-2 py-1 rounded-md text-center"
								>
									Pending
								</p>
							</td>
						{/if}
						<td class="px-6 py-4"
							>{job.task_count_total} ({job.task_count_completed} /
							{job.task_count_completed} / {job.task_count_failed})</td
						>
						<td class="px-6 py-4"
							>{#if job.last_processed_date}{timeDiff(
									job.started_date,
									job.last_processed_date
								)}{/if}</td
						>
						<td class="px-6 py-4"> $1.21 </td>
						<td class="px-6 py-4">{#if job.last_processed_date}{new Date(job.last_processed_date).toLocaleString()}{/if}</td>
						<td class="px-6 py-4 text-right">
							<a
								href="/list_of_jobs/{job.sno}/dag"
								class="text-sm text-white hover:underline bg-gray-700 px-2 py-1 rounded-md"
								>DAG</a
							>
						</td>
					</tr>
				</tbody>
			{/each}
		</table>
	</div>

	<div class="relative overflow-x-auto bg-gray-50 drop-shadow-lg sm:rounded-lg mt-3">
		<div class="px-4 py-5 sm:px-6">
			<div class="flex pt-5">
				<div class="w-1/6">
					<div class="gap-3">
						<h3 class="text-md leading-6 font-medium text-gray-900 text-center">DAG runs</h3>
						<p class="text-xs font-light text-gray-900 text-center">(sum of tasks)</p>
						<div class="flex gap-1 py-1">
							<div class="w-1/3 text-right">
								<div class="circle border-blue">
									<div class="text">
									  20
									 </div>
								  </div>
							</div>
							<div class="w-1/3 text-center">
								<div class="circle border-skyblue">
									<div class="text">
										12
									 </div>
								  </div>
							</div>
							<div class="w-1/3 text-left">
								<div class="circle border-gray">
									<div class="text">
										8
									 </div>
								  </div>
							</div>
						</div>
					</div>
				</div>
				<div class="w-1/6">
					<div class="gap-3">
						<h3 class="text-md leading-6 font-medium text-gray-900 text-center">Last DAG run</h3>
						<p class="text-sm leading-10 font-light text-gray-900 text-center">12/15/2021 12:26:49 AM</p>
					</div>
				</div>
				<div class="w-2/3">
				</div>
			</div>
			<div class="mermaid flex justify-center py-5">
				<slot>
					flowchart LR
						A[sample download] --> B[alignment] --> C[quality check] --> D[ctea] --> E[result store]
						E --> F[failed]
						E --> G[success]
				</slot>
			</div>
		</div>
	</div>
</section>

<style>
	.circle {
		background: none;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: inline-block;
		text-align: center;
		overflow:hidden;
		padding:5px;
		position:relative;
	}
	.text{
		transform:translate(-50%,-50%);
		position:absolute;
		top:50%;
		left:50%;
	}
	.border-blue {
		border: 4px solid #0C5DD8;
	}
	.border-skyblue {
		border: 4px solid #12CFEA;
	}
	.border-gray {
		border: 4px solid #DDE3ED;
	}
</style>
