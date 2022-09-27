<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { goBack, tens, timeDiff } from "$lib/dateformat.js";

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
				<a on:click={() => (goBack())}>
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
				<tbody>
					<tr class="bg-gray-50 border-b cursor-pointer" onclick="window.location='/list_of_jobs/1';">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1</th>
						<td class="px-6 py-4">aleelab-genomeflow-test-opt</td>
						<td class="px-6 py-4">test</td>
						<td class="px-6 py-4">
							<p class="text-sm text-white bg-blue-700 px-2 py-1 rounded-md text-center">Completed</p>
						</td>
						<td class="px-6 py-4">0 / 1 / 0</td>
						<td class="px-6 py-4">0:2:37</td>
						<td class="px-6 py-4">0.705</td>
						<td class="px-6 py-4">9/27/2022, 5:50:00 PM</td>
					</tr>
				</tbody>
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
				<tr class="border-b cursor-pointer" onclick="window.location='/list_of_jobs/1/1/dashboard';">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
						1
					</th>
					<td class="px-6 py-4">Task 1</td>
					<td class="px-6 py-4">
						<p class="text-sm text-white bg-blue-700 px-2 py-1 rounded-md text-center">Completed</p>
					</td>
					<td class="px-6 py-4"> 21.0% </td>
					<td class="px-6 py-4"> 40.0% </td>
					<td class="px-6 py-4"> 23.0% </td>
					<td class="px-6 py-4">2:37</td>
					<td class="px-6 py-4"> $0.705 </td>
					<td class="px-6 py-4">9/27/2022, 5:50:00 PM</td>
					<td class="px-6 py-4 text-right">
						<a href="/list_of_jobs/1/1/dag" class="text-sm text-white hover:underline bg-gray-700 px-2 py-1 rounded-md">DAG</a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
