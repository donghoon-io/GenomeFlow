<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="bg-white shadow overflow-hidden sm:rounded-lg mb-3">
		<div class="px-4 py-5 sm:px-6">
			<h3 class="text-lg leading-6 font-medium text-gray-900 mb-3">Keyscreens</h3>
			<p class="text-sm leading-6 font-light">Keyscreen directory for GenomeFlow prototyping project</p>
			<p class="text-sm leading-6 font-light">Each screen corresponds to the keyscreen from <a class="text-blue-600 hover:underline" href="https://www.figma.com/file/2If3JWD9tRviCRvVHm1nVO/GenomeFlow-(Copy)?node-id=0%3A1">this Figma worksheet</a></p>
		</div>
	</div>

	<div class="relative overflow-x-auto bg-gray-50 drop-shadow-lg sm:rounded-lg">
		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-100 border-b">
				<tr>
					<th scope="col" class="px-6 py-3"> No </th>
					<th scope="col" class="px-6 py-3"> Figma keyscreen id </th>
					<th scope="col" class="px-6 py-3"> Design status </th>
					<th scope="col" class="px-6 py-3"> Data population status </th>
					<th scope="col" class="px-6 py-3"> Link </th>
				</tr>
			</thead>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 1 </th>
					<td class="px-6 py-4"> job_view </td>
					<td class="px-6 py-4"> Complete </td>
					<td class="px-6 py-4"> In progress </td>
					<td class="px-6 py-4">
						<a href="job_view" class="font-medium text-blue-600 hover:underline">/ job_view</a>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 2 </th>
					<td class="px-6 py-4"> task_view </td>
					<td class="px-6 py-4"> Complete </td>
					<td class="px-6 py-4"> In progress </td>
					<td class="px-6 py-4">
						<a href="task_view" class="font-medium text-blue-600 hover:underline">/ task_view</a>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 3 </th>
					<td class="px-6 py-4"> task_view (duplicate) </td>
					<td class="px-6 py-4"> Complete </td>
					<td class="px-6 py-4"> In progress </td>
					<td class="px-6 py-4">
						<a href="task_view_2" class="font-medium text-blue-600 hover:underline">/ task_view_2</a>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 4 </th>
					<td class="px-6 py-4"> First_table </td>
					<td class="px-6 py-4"> Complete </td>
					<td class="px-6 py-4"> In progress </td>
					<td class="px-6 py-4">
						<a href="first_table" class="font-medium text-blue-600 hover:underline">/ first_table</a>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 5 </th>
					<td class="px-6 py-4"> Job_selection </td>
					<td class="px-6 py-4"> Complete </td>
					<td class="px-6 py-4"> In progress </td>
					<td class="px-6 py-4">
						<a href="job_selection" class="font-medium text-blue-600 hover:underline">/ job_selection</a>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 6 </th>
					<td class="px-6 py-4"> Job_dag </td>
					<td class="px-6 py-4"> Complete </td>
					<td class="px-6 py-4"> In progress </td>
					<td class="px-6 py-4">
						<a href="job_dag" class="font-medium text-blue-600 hover:underline">/ job_dag</a>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 7 </th>
					<td class="px-6 py-4"> Job_dashboard </td>
					<td class="px-6 py-4"> Complete </td>
					<td class="px-6 py-4"> In progress </td>
					<td class="px-6 py-4">
						<a href="job_dashboard" class="font-medium text-blue-600 hover:underline">/ job_dashboard</a>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 8 </th>
					<td class="px-6 py-4"> Task_dag </td>
					<td class="px-6 py-4"> Complete </td>
					<td class="px-6 py-4"> In progress </td>
					<td class="px-6 py-4">
						<a href="task_dag" class="font-medium text-blue-600 hover:underline">/ task_dag</a>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> 9 </th>
					<td class="px-6 py-4"> Task_dashboard </td>
					<td class="px-6 py-4"> Complete </td>
					<td class="px-6 py-4"> In progress </td>
					<td class="px-6 py-4">
						<a href="task_dashboard" class="font-medium text-blue-600 hover:underline">/ task_dashboard</a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
