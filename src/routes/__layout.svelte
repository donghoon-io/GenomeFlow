<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>


<footer class="p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6">
	<span class="text-sm text-gray-500 sm:text-center">© 2022 <a class="hover:underline">GenomeFlow™</a>. All Rights Reserved.
	</span>
	<ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
	<li>
	<a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
	</li>
	<li>
	<a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
	</li>
	<li>
	<a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
	</li>
	<li>
	<a href="#" class="hover:underline">Contact</a>
	</li>
	</ul>
	</footer>
	

<style>
	main {
		padding: 1rem;
	}
	footer {
		margin: 1rem !important;
	}

	:global(rect.chart-grid-backdrop) {
		fill: rgba(250,250,250, 0) !important;
	}
</style>