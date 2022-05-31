<script>
	import { onMount } from 'svelte';
	import "@carbon/charts/styles.min.css";
	import { LineChart, GaugeChart } from "@carbon/charts-svelte";
	import { page } from "$app/stores";
	import { tens, timeDiff } from "$lib/dateformat.js";

	const { id, id_task } = $page.params;
	
	var job_data = [];
	var logger_data = [];
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
						table: "logger",
						query: "sno",
						equals: `${id_task}`,
					}),
				{ method: "GET" }
			)
			.then((response) => response.json())
			.then((data) => {
				logger_data = data;

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
				logger_data = [];
			});
		})
		.catch((error) => {
			console.log(error);
			job_data = [];
		});
	});
</script>

<svelte:head>
	<title>selected_task_dashboard</title>
</svelte:head>

<section>
	<div class="bg-gray-50 drop-shadow-lg overflow-hidden sm:rounded-lg mb-3">
		<div class="px-4 py-5 sm:px-6">
			<div class="flex">
				<div class="w-3/5">
					<div class="flex gap-3">
						<a href="/">
							<svg class="w-6 h-6 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
						</a>
						{#each logger_data as log}
						<h3 class="text-lg leading-6 font-medium text-gray-900">{log.file_name}</h3>
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
	</div>

<div class="relative overflow-x-auto bg-gray-50 drop-shadow-lg sm:rounded-lg mb-3">
	<div class="m-5">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
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

<div class="relative overflow-x-auto bg-gray-50 drop-shadow-lg sm:rounded-lg">
	<div class="p-5">
		<LineChart
	data={[
	{
		"group": "Legend 1",
		"date": "2018-12-31T15:00:00.000Z",
		"temp": 23
	},
	{
		"group": "Legend 1",
		"date": "2019-01-31T15:00:00.000Z",
		"temp": 15
	},
	{
		"group": "Legend 1",
		"date": "2019-02-28T15:00:00.000Z",
		"temp": 24
	},
	{
		"group": "Legend 1",
		"date": "2019-03-31T15:00:00.000Z",
		"temp": 33
	},
	{
		"group": "Legend 1",
		"date": "2019-04-30T15:00:00.000Z",
		"temp": 23
	},
	{
		"group": "Legend 1",
		"date": "2019-05-31T15:00:00.000Z",
		"temp": 32
	},
	{
		"group": "Legend 1",
		"date": "2019-06-30T15:00:00.000Z",
		"temp": 23
	},
	{
		"group": "Legend 2",
		"date": "2018-12-31T15:00:00.000Z",
		"rainfall": 50
	},
	{
		"group": "Legend 2",
		"date": "2019-01-31T15:00:00.000Z",
		"rainfall": 65
	},
	{
		"group": "Legend 2",
		"date": "2019-02-28T15:00:00.000Z",
		"rainfall": 35
	},
	{
		"group": "Legend 2",
		"date": "2019-03-31T15:00:00.000Z",
		"rainfall": 43
	},
	{
		"group": "Legend 2",
		"date": "2019-04-30T15:00:00.000Z",
		"rainfall": 53
	},
	{
		"group": "Legend 2",
		"date": "2019-05-31T15:00:00.000Z",
		"rainfall": 19
	},
	{
		"group": "Legend 2",
		"date": "2019-06-30T15:00:00.000Z",
		"rainfall": 13
	}
]}
	options={{
	"title": "Resource allocation over time",
	"axes": {
		"left": {
			"title": "Legend 1",
			"mapsTo": "temp"
		},
		"bottom": {
			"scaleType": "time",
			"mapsTo": "date",
			"title": "Date"
		},
		"right": {
			"title": "Legend 2",
			"mapsTo": "rainfall",
			"correspondingDatasets": [
				"Legend 2"
			]
		}
	},
	"curve": "curveMonotoneX",
	"height": "400px"
}}
	/>
	</div>

</div>
	
</section>

<style>
</style>
