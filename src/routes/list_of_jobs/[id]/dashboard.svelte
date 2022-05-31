<script>
	import { onMount } from 'svelte';
	import "@carbon/charts/styles.min.css";
	import { LineChart, GaugeChart, BarChartSimple, MeterChart } from "@carbon/charts-svelte";
	import { page } from "$app/stores";
	import { goBack, tens, timeDiff } from "$lib/dateformat.js";

	const { id } = $page.params;
	
	var job_data = [];
	var logger_resource_data = [];
	
	onMount(() => {
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
						table: "logger_resource_allocation",
						query: "sno",
						equals: `${id}`,
					}),
				{ method: "GET" }
			)
			.then((response) => response.json())
			.then((data) => {
				logger_resource_data = data;
			})
			.catch((error) => {
				console.log(error);
				logger_resource_data = [];
			});
		})
		.catch((error) => {
			console.log(error);
			job_data = [];
		});
	});

</script>

<svelte:head>
	<title>selected_job_dashboard</title>
</svelte:head>

<section>
	<div class="bg-gray-50 drop-shadow-lg overflow-hidden sm:rounded-lg mb-3">
		<div class="px-4 py-5 sm:px-6">
			<div class="flex">
				<div class="w-3/5">
					<div class="flex gap-3">
						<a on:click={() => (goBack())}>
							<svg class="w-6 h-6 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
						</a>
						{#each job_data as job}
						<h3 class="text-lg leading-6 font-medium text-gray-900">{job.job_name}</h3>
						{/each}
					</div>
				</div>
				<div class="w-2/5">
					<div class="flex justify-end gap-3">
						<a href="#" class="text-sm text-white hover:underline bg-gray-700 px-2 py-1 rounded-md">DAG</a>
						<a href="#" class="text-sm text-white hover:underline bg-gray-400 px-2 py-1 rounded-md">Task list</a>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase">
				<tr>
					<th scope="col" class="px-6 py-3"> (DNO) </th>
					<th scope="col" class="px-6 py-3"> (DINO) </th>
					<th scope="col" class="px-6 py-3"> Machine type </th>
					<th scope="col" class="px-6 py-3"> CPU </th>
					<th scope="col" class="px-6 py-3"> RAM </th>
					<th scope="col" class="px-6 py-3"> HDD </th>
					<th scope="col" class="px-6 py-3"> Updated </th>
				</tr>
			</thead>
			{#each logger_resource_data as resource}
			<tbody>
				<tr>
					<td class="px-6 py-4"> {resource.dno} </td>
					<td class="px-6 py-4"> {resource.dino} </td>
					<td class="px-6 py-4"> {resource.machine_type} </td>
					<td class="px-6 py-4"> {resource.cores} </td>
					<td class="px-6 py-4"> {resource.memory} </td>
					<td class="px-6 py-4"> {resource.disk} </td>
					<td class="px-6 py-4"> PUT UPDATED TIME HERE </td>
				</tr>
			</tbody>
			{/each}
		</table>
	</div>

	<div class="relative overflow-x-auto">
		<div class="py-5">
			<div class="flex gap-3">
				<div class="w-3/4">
					<div class="p-5 bg-gray-50 drop-shadow-lg sm:rounded-lg">
						{#if job_data.length != 0}
						<MeterChart
							data={[
							{
								"group": "Complete",
								"value": job_data[0].task_count_completed
							},
							{
								"group": "Processing",
								"value": job_data[0].task_count_processing
							},
							{
								"group": "Failed",
								"value": job_data[0].task_count_failed
							}
						]}
							options={{
							"title": "Proportional Meter Chart",
							"height": "130px",
							"meter": {
								"proportional": {
									"total": job_data[0].task_count_total,
									"unit": "Tasks"
								}
							},
							"color": {
								"pairing": {
									"option": 3
								},
								"scale": {
									"Complete": "#0C5DD8",
									"Processing": "#12CFEA",
									"Pending": "#FAE737"
								}
							},
						}}
						/>
						{/if}
					</div>
					<div class="my-3 p-5 bg-gray-50 drop-shadow-lg sm:rounded-lg">
						<p class="font-semibold">Average resource used over time</p>
						<div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
							<div>
								<GaugeChart
									data={[
									{
										"group": "value",
										"value": 67
									}
								]}
									options={{
									"title": "CPU",
									"resizable": true,
									"height": "250px",
									"gauge": {
										"type": "full",
										"alignment": "center",
									},
									"color": {
										"scale": {
											"value": "#0C5DD8"
										}
									}
								}}
									/>
								<p class="mt-5 text-sm text-center">67 of 100 used</p>
							</div>
							<div>
								<GaugeChart
									data={[
									{
										"group": "value",
										"value": 67
									}
								]}
									options={{
									"title": "RAM",
									"resizable": true,
									"height": "250px",
									"gauge": {
										"type": "full",
										"alignment": "center",
									},
									"color": {
										"scale": {
											"value": "#12CFEA"
										}
									}
								}}
									/>
									<p class="mt-5 text-sm text-center">67 of 100 used</p>
							</div>
							<div>
								<GaugeChart
									data={[
									{
										"group": "value",
										"value": 67
									}
								]}
									options={{
									"title": "HDD",
									"resizable": true,
									"height": "250px",
									"gauge": {
										"type": "full",
										"alignment": "center",
									},
									"color": {
										"scale": {
											"value": "#FAE737"
										}
									}
								}}
									/>
									<p class="mt-5 text-sm text-center">67 of 100 used</p>
							</div>
						  </div>
					</div>
				</div>
				<div class="w-1/4 bg-gray-50 drop-shadow-lg sm:rounded-lg p-5">
					<p class="font-semibold">Total elapsed time and cost</p>
					<div class="my-5">
						<BarChartSimple
							data={[
							{
								"group": "Expected value",
								"value": 65000
							},
							{
								"group": "Current value",
								"value": 29123
							},
						]}
							options={{
							"title": "Total elapsed time",
							"axes": {
								"left": {
									"mapsTo": "value"
								},
								"bottom": {
									"mapsTo": "group",
									"scaleType": "labels"
								}
							},
							"height": "263px",
							"color": {
								"pairing": {
									"option": 2
								},
								"scale": {
									"Expected value": "#999999",
									"Current value": "#0C5DD8"
								}
							},
							"legend": {
								"enabled": false
							},
						}}
						/>
					</div>
					<div class="my-5">
						<BarChartSimple
							data={[
							{
								"group": "Expected value",
								"value": 65000
							},
							{
								"group": "Current value",
								"value": 29123
							},
						]}
							options={{
							"title": "Cost",
							"axes": {
								"left": {
									"mapsTo": "value"
								},
								"bottom": {
									"mapsTo": "group",
									"scaleType": "labels"
								}
							},
							"height": "263px",
							"color": {
								"pairing": {
									"option": 2
								},
								"scale": {
									"Expected value": "#999999",
									"Current value": "#0C5DD8"
								}
							},
							"legend": {
								"enabled": false
							},
						}}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>