<script>
	import "@carbon/charts/styles.min.css";
	import { LineChart, GaugeChart, BarChartSimple } from "@carbon/charts-svelte";
</script>

<svelte:head>
	<title>task_view</title>
</svelte:head>

<section>
	<div class="bg-white shadow overflow-hidden sm:rounded-lg mb-3">
		<div class="px-4 py-5 sm:px-6">
			<div class="flex">
				<div class="w-3/5">
					<div class="flex gap-3">
						<svg class="w-6 h-6 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
						<h3 class="text-lg leading-6 font-medium text-gray-900">ESCA</h3>
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
		<div class="px-4 py-5 sm:px-6">
			<div class="flex gap-5">
				<div class="w-4/5">
					<p class="font-semibold">Average resource used over time</p>
					<div class="flex gap-5 py-5">
						<div class="w-1/6">
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
									"height": "175px",
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
						</div>
						<div class="w-5/6">
							<LineChart
								data={[
									{
										"group": "Dataset 1",
										"key": "1",
										"value": 34200
									},
									{
										"group": "Dataset 1",
										"key": "2",
										"value": 23500
									},
									{
										"group": "Dataset 1",
										"key": "3",
										"value": 53100
									},
									{
										"group": "Dataset 1",
										"key": "4",
										"value": 42300
									},
									{
										"group": "Dataset 1",
										"key": "5",
										"value": 12300
									}
								]}
									options={{
									"axes": {
										"bottom": {
											"mapsTo": "key",
											"scaleType": "labels"
										},
										"left": {
											"mapsTo": "value",
											"scaleType": "linear"
										}
									},
									"legend": {
										"enabled": false
									},
									"height": "175px",
									"color": {
										"pairing": {
											"option": 1
										},
										"scale": {
											"Dataset 1": "#0C5DD8"
										}
									},
								}}
							/>
						</div>
					</div>
					<div class="flex gap-5 py-5">
						<div class="w-1/6">
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
									"height": "175px",
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
						</div>
						<div class="w-5/6">
							<LineChart
								data={[
									{
										"group": "Dataset 1",
										"key": "1",
										"value": 34200
									},
									{
										"group": "Dataset 1",
										"key": "2",
										"value": 23500
									},
									{
										"group": "Dataset 1",
										"key": "3",
										"value": 53100
									},
									{
										"group": "Dataset 1",
										"key": "4",
										"value": 42300
									},
									{
										"group": "Dataset 1",
										"key": "5",
										"value": 12300
									}
								]}
									options={{
									"axes": {
										"bottom": {
											"mapsTo": "key",
											"scaleType": "labels"
										},
										"left": {
											"mapsTo": "value",
											"scaleType": "linear"
										}
									},
									"legend": {
										"enabled": false
									},
									"height": "175px",
									"color": {
										"pairing": {
											"option": 1
										},
										"scale": {
											"Dataset 1": "#0C5DD8"
										}
									},
								}}
							/>
						</div>
					</div>
					<div class="flex gap-5 py-5">
						<div class="w-1/6">
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
									"height": "175px",
									"gauge": {
										"type": "full",
										"alignment": "center",
									},
									"color": {
										"scale": {
											"value": "#0C5DD8"
										}
									},
								}}
								/>
						</div>
						<div class="w-5/6">
							<LineChart
								data={[
									{
										"group": "Dataset 1",
										"key": "1",
										"value": 34200
									},
									{
										"group": "Dataset 1",
										"key": "2",
										"value": 23500
									},
									{
										"group": "Dataset 1",
										"key": "3",
										"value": 53100
									},
									{
										"group": "Dataset 1",
										"key": "4",
										"value": 42300
									},
									{
										"group": "Dataset 1",
										"key": "5",
										"value": 12300
									}
								]}
									options={{
									"axes": {
										"bottom": {
											"mapsTo": "key",
											"scaleType": "labels"
										},
										"left": {
											"mapsTo": "value",
											"scaleType": "linear"
										}
									},
									"legend": {
										"enabled": false
									},
									"height": "175px",
									"color": {
										"pairing": {
											"option": 1
										},
										"scale": {
											"Dataset 1": "#0C5DD8"
										}
									},
								}}
							/>
						</div>
					</div>
				</div>
				<div class="w-1/5">
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