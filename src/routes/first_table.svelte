<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>first_table</title>
</svelte:head>

<section>
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
