<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { tens, timeDiff } from "$lib/dateformat.js";

	const { id } = $page.params;

	var job_data = [];
	var logger_data = [];
	var logger_resource_data = [];

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
							query: "job_sno",
							equals: id,
						}),
					{ method: "GET" }
				)
					.then((response) => response.json())
					.then((data) => {
						logger_data = data;

						fetch(
							"http://127.0.0.1:5555/?" +
								new URLSearchParams({
									table: "logger_resource_allocation"
								}),
							{ method: "GET" }
						)
							.then((response) => response.json())
							.then((data) => {
								logger_resource_data = data;
								console.log(logger_resource_data);
							})
							.catch((error) => {
								console.log(error);
								logger_resource_data = [];
							});
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
	});
</script>

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
					<tr class="cursor-pointer" onclick="window.location='/list_of_jobs/{job.sno}/dashboard';">
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

	<div class="relative overflow-x-auto bg-gray-50 drop-shadow-lg sm:rounded-lg m-3">
		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-100 border-b">
				<tr>
					<th scope="col" class="px-6 py-3"> No </th>
					<th scope="col" class="px-6 py-3"> Task name </th>
					<th scope="col" class="px-6 py-3"> Task status </th>
					<th scope="col" class="px-6 py-3"> CPU </th>
					<th scope="col" class="px-6 py-3"> RAM </th>
					<th scope="col" class="px-6 py-3"> HDD </th>
					<th scope="col" class="px-6 py-3"> Elapsed time<br/>
						<span style="font-size: 10px; font-weight: 400;">(hours:minutes)</span>
					</th>
					<th scope="col" class="px-6 py-3"> Cost </th>
					<th scope="col" class="px-6 py-3"> Updated </th>
					<th scope="col" class="px-6 py-3">
						<span class="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody>
				{#each logger_data as log}
				<tr class="border-b cursor-pointer" onclick="window.location='/list_of_jobs/{job_data[0].sno}/{log.sno}/dashboard';">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
						{log.sno}
					</th>
					<td class="px-6 py-4"> {log.sample_name} </td>
					<td class="px-6 py-4">
						{#if log.file_status == "C"}
						<p class="text-sm text-white bg-blue-700 px-2 py-1 rounded-md text-center">Completed</p>
						{:else if log.file_status == "R"}
						<p class="text-sm text-white bg-blue-400 px-2 py-1 rounded-md text-center">Processing</p>
						{:else}
						<p class="text-sm text-black bg-yellow-300 px-2 py-1 rounded-md text-center">Failed</p>
						{/if}
					</td>
					<td class="px-6 py-4"> 2.0% </td>
					<td class="px-6 py-4"> 3.0% </td>
					<td class="px-6 py-4"> 4.0% </td>
					<td class="px-6 py-4"> {timeDiff(log.created_datetime, log.completed_datetime, true)} </td>
					<td class="px-6 py-4"> $0.07 </td>
					<td class="px-6 py-4"> {#if log.processed_datetime}{new Date(log.processed_datetime).toLocaleString()}{/if} </td>
					<td class="px-6 py-4 text-right">
						<a href="/list_of_jobs/{job_data[0].sno}/{log.sno}/dag" class="text-sm text-white hover:underline bg-gray-400 px-2 py-1 rounded-md">DAG</a>
					</td>
				</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
