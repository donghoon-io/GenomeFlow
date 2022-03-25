<script>
	import "@carbon/charts/styles.min.css";
	import "carbon-components/css/carbon-components.min.css";
	import { LineChart } from "@carbon/charts-svelte";
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<section>
	

<div class="bg-white shadow overflow-hidden sm:rounded-lg mb-3">
	<div class="px-4 py-5 sm:px-6">
		<svg class="w-6 h-6 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>

		<h3 class="text-lg leading-6 font-medium text-gray-900">ESCA</h3>
		<p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
	</div>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
	<div class="p-5">
		<LineChart
	data={[
	{
		"group": "Temperature",
		"date": "2018-12-31T15:00:00.000Z",
		"temp": 23
	},
	{
		"group": "Temperature",
		"date": "2019-01-31T15:00:00.000Z",
		"temp": 15
	},
	{
		"group": "Temperature",
		"date": "2019-02-28T15:00:00.000Z",
		"temp": 24
	},
	{
		"group": "Temperature",
		"date": "2019-03-31T15:00:00.000Z",
		"temp": 33
	},
	{
		"group": "Temperature",
		"date": "2019-04-30T15:00:00.000Z",
		"temp": 23
	},
	{
		"group": "Temperature",
		"date": "2019-05-31T15:00:00.000Z",
		"temp": 32
	},
	{
		"group": "Temperature",
		"date": "2019-06-30T15:00:00.000Z",
		"temp": 23
	},
	{
		"group": "Rainfall",
		"date": "2018-12-31T15:00:00.000Z",
		"rainfall": 50
	},
	{
		"group": "Rainfall",
		"date": "2019-01-31T15:00:00.000Z",
		"rainfall": 65
	},
	{
		"group": "Rainfall",
		"date": "2019-02-28T15:00:00.000Z",
		"rainfall": 35
	},
	{
		"group": "Rainfall",
		"date": "2019-03-31T15:00:00.000Z",
		"rainfall": 43
	},
	{
		"group": "Rainfall",
		"date": "2019-04-30T15:00:00.000Z",
		"rainfall": 53
	},
	{
		"group": "Rainfall",
		"date": "2019-05-31T15:00:00.000Z",
		"rainfall": 19
	},
	{
		"group": "Rainfall",
		"date": "2019-06-30T15:00:00.000Z",
		"rainfall": 13
	}
]}
	options={{
	"title": "Line + Line (dual axes)",
	"axes": {
		"left": {
			"title": "Temperature (°C)",
			"mapsTo": "temp"
		},
		"bottom": {
			"scaleType": "time",
			"mapsTo": "date",
			"title": "Date"
		},
		"right": {
			"title": "Rainfall (mm)",
			"mapsTo": "rainfall",
			"correspondingDatasets": [
				"Rainfall"
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
