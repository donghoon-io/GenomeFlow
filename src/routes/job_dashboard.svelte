<script>
	import { onMount } from 'svelte';
	import "@carbon/charts/styles.min.css";
	import { LineChart, GaugeChart, BarChartSimple, MeterChart } from "@carbon/charts-svelte";
	import mysql from "mysql" // 기본 기능을 사용하려면 mysql2을 가져온다.

	onMount(() => {

	const connection = mysql.createConnection({
		host: '34.73.61.94',
		user: 'donghoon',
		password: 'dhckdgns!0411',
		database: 'logger_db'
	})
	connection.connect();
		connection.query("SELECT * FROM job", [ 4 ], function (err, results) {
			console.log(results)
		})
	connection.end();
	});

</script>

<svelte:head>
	<title>job_dashboard</title>
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
						<h3 class="text-lg leading-6 font-medium text-gray-900">ESCA</h3>
					</div>
				</div>
				<div class="w-2/5">
					<div class="flex justify-end gap-3">
						<h3 class="text-sm leading-6 font-medium text-gray-900">Updated</h3>
						<h3 class="text-sm leading-6 font-light text-gray-900">12/15/2021 10:05:26 PM</h3>
						<a href="#" class="text-sm text-white hover:underline bg-gray-700 px-2 py-1 rounded-md">DAG</a>
						<a href="#" class="text-sm text-white hover:underline bg-gray-400 px-2 py-1 rounded-md">Task list</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="relative overflow-x-auto">
		<div class="py-5">
			<div class="flex gap-3">
				<div class="w-3/4">
					<div class="p-5 bg-gray-50 drop-shadow-lg sm:rounded-lg">
						<MeterChart
							data={[
							{
								"group": "Complete",
								"value": 234
							},
							{
								"group": "Processing",
								"value": 210
							},
							{
								"group": "Pending",
								"value": 173
							}
						]}
							options={{
							"title": "Proportional Meter Chart",
							"height": "130px",
							"meter": {
								"proportional": {
									"total": 617,
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