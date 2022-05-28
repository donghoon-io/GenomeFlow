<script>
	import { onMount } from 'svelte';

	var job_data = [];

	function tens(num) {
		return num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
	}

	function timeDiff(pre, post) {
		let diff = (Date.parse(post) - Date.parse(pre))/1000;
		let m = Math.floor((diff/60) % 60);
		let h = Math.floor((diff/3600) % 24);
		let d = Math.floor(diff/86400);

		return `${d}:${tens(h)}:${tens(m)}`;
	}


	onMount(async () => {
		fetch("http://127.0.0.1:5555/?" + new URLSearchParams({
			table: 'job'
		}), { method: 'GET' })
			.then(response => response.json())
			.then(data => {
				job_data = data;
				console.log(job_data);
			}).catch(error => {
				console.log(error);
				job_data = [];
		});
	});
</script>

<svelte:head>
	<title>first_table</title>
</svelte:head>

<section>
	<div class="relative overflow-x-auto drop-shadow-lg sm:rounded-lg mt-3">
		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-100 border-b">
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
						Total<br/>elapsed time<br/>
						<span style="font-size: 10px; font-weight: 400;">(days:hours:minutes)</span>
					</th>
					<th scope="col" class="px-6 py-3"> Cost </th>
					<th scope="col" class="px-6 py-3"> Updated </th>
				</tr>
			</thead>
			<tbody>
				{#each job_data as job}
				<tr class="bg-gray-50 border-b cursor-pointer" onclick="window.location='/first_table/{job.sno}';">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{job.sno}</th>
					<td class="px-6 py-4">{job.project_name}</td>
					<td class="px-6 py-4">{job.job_name}</td>
					{#if job.task_count_completed == job.task_count_total}
					<td class="px-6 py-4">
						<p class="text-sm text-white bg-blue-700 px-2 py-1 rounded-md text-center">Completed</p>
					</td>
					{:else if job.task_count_completed != 0}
					<td class="px-6 py-4">
						<p class="text-sm text-white bg-blue-400 px-2 py-1 rounded-md text-center">Processing</p>
					</td>
					{:else}
					<td class="px-6 py-4">
						<p class="text-sm text-black bg-yellow-300 px-2 py-1 rounded-md text-center">Pending</p>
					</td>
					{/if}
					<td class="px-6 py-4">{job.task_count_total} ({job.task_count_completed} / {job.task_count_completed} / {job.task_count_failed})</td>
					<td class="px-6 py-4">{#if job.last_processed_date}{timeDiff(job.started_date, job.last_processed_date)}{/if}</td>
					<td class="px-6 py-4"> $1.21 </td>
					<td class="px-6 py-4">{#if job.last_processed_date}{new Date(job.last_processed_date).toLocaleString()}{/if}</td>
				</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
