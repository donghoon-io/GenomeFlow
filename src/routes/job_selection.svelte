<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>job_selection</title>
</svelte:head>

<section>
	<div class="bg-white shadow overflow-hidden sm:rounded-lg mb-3">
		<div class="px-4 py-5 sm:px-6">
			<div class="flex gap-3">
				<svg class="w-6 h-6 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
				<h3 class="text-lg leading-6 font-medium text-gray-900">ESCA</h3>
			</div>
			<table class="w-full text-sm text-left text-gray-500 m-3 mb-0">
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
					<tr class="bg-white">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 2 </th>
						<td class="px-6 py-4"> aleelab-ten </td>
						<td class="px-6 py-4"> ESCA </td>
						<td class="px-6 py-4"> Processing </td>
						<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
						<td class="px-6 py-4"> 16:20 </td>
						<td class="px-6 py-4"> $1.21 </td>
						<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
						<td class="px-6 py-4 text-right">
							<a href="#" class="font-medium text-blue-600 hover:underline">DAG</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
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
				</tr>
			</thead>
			<tbody>
				<tr class="bg-white border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4"> Processing </td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
				</tr>
				<tr class="bg-white border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4"> Processing </td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
				</tr>
				<tr class="bg-white border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4"> Processing </td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
				</tr>
				<tr class="bg-white border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4"> Processing </td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
				</tr>
				<tr class="bg-white border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4"> Processing </td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
				</tr>
				<tr class="bg-white border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4"> Processing </td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
				</tr>
				<tr class="bg-white border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4"> Processing </td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
				</tr>
				<tr class="bg-white border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4"> Processing </td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
				</tr>
				<tr class="bg-white border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4"> Processing </td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
				</tr>
				<tr class="bg-white border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> aleelab-ten </td>
					<td class="px-6 py-4"> ESCA </td>
					<td class="px-6 py-4"> Processing </td>
					<td class="px-6 py-4"> 173 (0 / 141 / 32) </td>
					<td class="px-6 py-4"> 16:20 </td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4"> 12/15/2021 12:26:49 AM </td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
