import { c as create_ssr_component, v as validate_component } from "../../chunks/index-a93c14e4.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header>
<nav class="${"bg-gray-800"}"><div class="${"mx-auto px-2 sm:px-6 lg:px-6"}"><div class="${"relative flex items-center justify-between h-16"}"><div class="${"absolute inset-y-0 left-0 flex items-center sm:hidden"}">
		  <button type="${"button"}" class="${"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"}" aria-controls="${"mobile-menu"}" aria-expanded="${"false"}"><span class="${"sr-only"}">Open main menu</span>
			
			<svg class="${"block h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg>
			
			<svg class="${"hidden h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div>
		<div class="${"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"}"><div class="${"flex-shrink-0 flex items-center"}"><img class="${"block lg:hidden h-8 w-auto"}" src="${"genome.png"}" alt="${"Workflow"}">
			<img class="${"hidden lg:block h-8 w-auto"}" src="${"genome_expanded.png"}" alt="${"Workflow"}"></div></div>
		<div class="${"hidden relative mr-3 md:mr-0 md:block"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg class="${"w-5 h-5 text-gray-500"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"}" clip-rule="${"evenodd"}"></path></svg></div>
		  <input type="${"text"}" id="${"email-adress-icon"}" class="${"block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}" placeholder="${"Search..."}"></div>
		<div class="${"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"}"><button type="${"button"}" class="${"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}"><span class="${"sr-only"}">View notifications</span>
			
			<svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}"></path></svg></button>
  
		  
		  <div class="${"ml-3 relative"}"><div><button type="${"button"}" class="${"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}" id="${"user-menu-button"}" aria-expanded="${"false"}" aria-haspopup="${"true"}"><span class="${"sr-only"}">Open user menu</span>
				<img class="${"h-8 w-8 rounded-full"}" src="${"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}" alt="${""}"></button></div>
  
			</div></div></div></div></nav>
  
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-ddxgh{padding:1rem}footer.svelte-ddxgh{margin:1rem !important}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-ddxgh"}">${slots.default ? slots.default({}) : ``}</main>


<footer class="${"p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 svelte-ddxgh"}"><span class="${"text-sm text-gray-500 sm:text-center"}">\xA9 2022 <a class="${"hover:underline"}">GenomeFlow\u2122</a>. All Rights Reserved.
	</span>
	<ul class="${"flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0"}"><li><a href="${"#"}" class="${"mr-4 hover:underline md:mr-6 "}">About</a></li>
	<li><a href="${"#"}" class="${"mr-4 hover:underline md:mr-6"}">Privacy Policy</a></li>
	<li><a href="${"#"}" class="${"mr-4 hover:underline md:mr-6"}">Licensing</a></li>
	<li><a href="${"#"}" class="${"hover:underline"}">Contact</a></li></ul>
	</footer>`;
});
export { _layout as default };
