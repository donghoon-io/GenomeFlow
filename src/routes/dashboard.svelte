<script>
	import "@carbon/charts/styles.min.css";
	import { LineChart, GaugeChart } from "@carbon/charts-svelte";
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<section>
	<div class="bg-white shadow overflow-hidden sm:rounded-lg mb-3">
		<div class="px-4 py-5 sm:px-6">
			<div class="flex">
				<div class="w-3/5">
					<div class="flex gap-3">
						<svg class="w-6 h-6 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
						<h3 class="text-lg leading-6 font-medium text-gray-900">Task 1</h3>
					</div>
				</div>
				<div class="w-2/5">
					<div class="flex justify-end gap-3">
						<h3 class="text-sm leading-6 font-medium text-gray-900">Updated</h3>
						<h3 class="text-sm leading-6 font-light text-gray-900">12/15/2021 10:05:26 PM</h3>
						<a href="#" class="text-sm leading-6 font-medium text-blue-600 hover:underline">DAG</a>
					</div>
				</div>
			</div>
		</div>
	</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
