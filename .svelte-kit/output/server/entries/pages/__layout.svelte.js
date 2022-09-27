import { c as create_ssr_component, v as validate_component } from "../../chunks/index-20d5dc34.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header>
<nav class="${"bg-gray-800"}"><div class="${"mx-auto px-2 sm:px-6 lg:px-6"}"><div class="${"relative flex items-center justify-between h-16"}"><div class="${"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"}"><div class="${"flex-shrink-0 flex items-center"}"><a href="${"/"}"><img class="${"block lg:hidden h-8 w-auto"}" src="${"/genome.png"}" alt="${"Workflow"}"></a>
			<a href="${"/"}"><img class="${"hidden lg:block h-8 w-auto"}" src="${"/genome_expanded.png"}" alt="${"Workflow"}"></a></div></div>
		<div class="${"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"}">
		  <div class="${"ml-3 relative"}"><div><button type="${"button"}" class="${"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}" id="${"user-menu-button"}" aria-expanded="${"false"}" aria-haspopup="${"true"}"><span class="${"sr-only"}">Open user menu</span>
				<img class="${"h-8 w-8 rounded-full"}" src="${"/profile.jpg"}" alt="${""}"></button></div>
  
			</div></div></div></div></nav>
  
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-100u4ig{padding:1rem}footer.svelte-100u4ig{margin:1rem !important}rect.chart-grid-backdrop{fill:rgba(250,250,250, 0) !important}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-100u4ig"}">${slots.default ? slots.default({}) : ``}</main>


<footer class="${"p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 svelte-100u4ig"}"><span class="${"text-sm text-gray-500 sm:text-center"}">\xA9 2022 <a class="${"hover:underline"}">GenomeFlow\u2122</a>. All Rights Reserved.
	</span>
	<ul class="${"flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0"}"><li><a href="${"#"}" class="${"mr-4 hover:underline md:mr-6 "}">About</a></li>
	<li><a href="${"#"}" class="${"mr-4 hover:underline md:mr-6"}">Privacy Policy</a></li>
	<li><a href="${"#"}" class="${"mr-4 hover:underline md:mr-6"}">Licensing</a></li>
	<li><a href="${"#"}" class="${"hover:underline"}">Contact</a></li></ul>
	</footer>`;
});
export { _layout as default };
