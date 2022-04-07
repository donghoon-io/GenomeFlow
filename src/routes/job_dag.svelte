<script>
	import { onMount } from 'svelte';
	import mermaid from 'mermaid';

	mermaid.initialize({
		startOnLoad: true
	});

	onMount(() => {
		mermaid.init();
	});
</script>

<svelte:head>
	<title>job_dag</title>
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
					<td class="px-6 py-4"> Processing </td>
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

	<div class="relative overflow-x-auto bg-gray-50 drop-shadow-lg sm:rounded-lg mt-3">
		<div class="px-4 py-5 sm:px-6">
			<div class="flex pt-5">
				<div class="w-1/6">
					<div class="gap-3">
						<h3 class="text-md leading-6 font-medium text-gray-900 text-center">DAG runs</h3>
						<p class="text-xs font-light text-gray-900 text-center">(sum of tasks)</p>
						<div class="flex gap-1 py-1">
							<div class="w-1/3 text-right">
								<div class="circle border-blue">
									<div class="text">
									  20
									 </div>
								  </div>
							</div>
							<div class="w-1/3 text-center">
								<div class="circle border-skyblue">
									<div class="text">
										12
									 </div>
								  </div>
							</div>
							<div class="w-1/3 text-left">
								<div class="circle border-gray">
									<div class="text">
										8
									 </div>
								  </div>
							</div>
						</div>
					</div>
				</div>
				<div class="w-1/6">
					<div class="gap-3">
						<h3 class="text-md leading-6 font-medium text-gray-900 text-center">Last DAG run</h3>
						<p class="text-sm leading-10 font-light text-gray-900 text-center">12/15/2021 12:26:49 AM</p>
					</div>
				</div>
				<div class="w-2/3">
				</div>
			</div>
			<div class="mermaid flex justify-center py-5">
				<slot>
					flowchart LR
						A[sample download] --> B[alignment] --> C[quality check] --> D[ctea] --> E[result store]
						E --> F[failed]
						E --> G[success]
				</slot>
			</div>
		</div>
	</div>
</section>

<style>
	.circle {
		background: none;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: inline-block;
		text-align: center;
		overflow:hidden;
		padding:5px;
		position:relative;
	}
	.text{
		transform:translate(-50%,-50%);
		position:absolute;
		top:50%;
		left:50%;
	}
	.border-blue {
		border: 4px solid #0C5DD8;
	}
	.border-skyblue {
		border: 4px solid #12CFEA;
	}
	.border-gray {
		border: 4px solid #DDE3ED;
	}
</style>
