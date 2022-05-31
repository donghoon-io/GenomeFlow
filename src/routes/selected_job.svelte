<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>selected_job</title>
</svelte:head>

<section>
	<div class="bg-gray-50 drop-shadow-lg overflow-hidden sm:rounded-lg mb-3">
		<div class="px-4 py-5 sm:px-6">
			<div class="flex gap-3">
				<a href="/">
					<svg class="w-6 h-6 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
				</a>
				<h3 class="text-lg leading-6 font-medium text-gray-900">ESCA</h3>
			</div>
		</div>
		<hr>
		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase">
				<tr>
					<th scope="col" class="px-6 py-3"> No </th>
					<th scope="col" class="px-6 py-3"> Project name </th>
					<th scope="col" class="px-6 py-3"> Job name </th>
					<th scope="col" class="px-6 py-3"> Job status </th>
					<th scope="col" class="px-6 py-3">
						Total tasks
						<br/>
						<span style="font-size: 10px; font-weight: 400;">(processing / completed / failed)</span>
					</th>
					<th scope="col" class="px-6 py-3">
						Total<br/>elapsed time
					</th>
					<th scope="col" class="px-6 py-3"> Cost </th>
					<th scope="col" class="px-6 py-3"> Updated </th>
					<th scope="col" class="px-6 py-3">
						<span class="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 2 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4">
						<p class="text-sm text-white bg-blue-400 px-2 py-1 rounded-md text-center">Processing</p>
					</td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
					<td class="px-6 py-4 text-right">
						<a href="#" class="text-sm text-white hover:underline bg-gray-700 px-2 py-1 rounded-md">DAG</a>
					</td>
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
					<th scope="col" class="px-6 py-3"> Elapsed time </th>
					<th scope="col" class="px-6 py-3"> Cost </th>
					<th scope="col" class="px-6 py-3"> Updated </th>
					<th scope="col" class="px-6 py-3">
						<span class="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> Task 1 </td>
					<td class="px-6 py-4">
						<p class="text-sm text-white bg-blue-700 px-2 py-1 rounded-md text-center">Completed</p>
					</td>
					<td class="px-6 py-4"> 2.0% </td>
					<td class="px-6 py-4"> 3.0% </td>
					<td class="px-6 py-4"> 4.0% </td>
					<td class="px-6 py-4"> 09:15 </td>
					<td class="px-6 py-4"> $0.07 </td>
					<td class="px-6 py-4"> 12/15/2021 10:05:26 PM </td>
					<td class="px-6 py-4 text-right">
						<a href="#" class="text-sm text-white hover:underline bg-gray-400 px-2 py-1 rounded-md">DAG</a>
					</td>
				</tr>

				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 2 </th>
					<td class="px-6 py-4"> Task 2 </td>
					<td class="px-6 py-4">
						<p class="text-sm text-white bg-blue-400 px-2 py-1 rounded-md text-center">Processing</p>
					</td>
					<td class="px-6 py-4"> 2.0% </td>
					<td class="px-6 py-4"> 3.0% </td>
					<td class="px-6 py-4"> 4.0% </td>
					<td class="px-6 py-4"> 09:15 </td>
					<td class="px-6 py-4"> $0.07 </td>
					<td class="px-6 py-4"> 12/15/2021 10:05:26 PM </td>
					<td class="px-6 py-4 text-right">
						<a href="#" class="text-sm text-white hover:underline bg-gray-400 px-2 py-1 rounded-md">DAG</a>
					</td>
				</tr>

				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 3 </th>
					<td class="px-6 py-4"> Task 1 </td>
					<td class="px-6 py-4">
						<p class="text-sm text-black bg-yellow-300 px-2 py-1 rounded-md text-center">Pending</p>
					</td>
					<td class="px-6 py-4"> 2.0% </td>
					<td class="px-6 py-4"> 3.0% </td>
					<td class="px-6 py-4"> 4.0% </td>
					<td class="px-6 py-4"> 09:15 </td>
					<td class="px-6 py-4"> $0.07 </td>
					<td class="px-6 py-4"> 12/15/2021 10:05:26 PM </td>
					<td class="px-6 py-4 text-right">
						<a href="#" class="text-sm text-white hover:underline bg-gray-400 px-2 py-1 rounded-md">DAG</a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
