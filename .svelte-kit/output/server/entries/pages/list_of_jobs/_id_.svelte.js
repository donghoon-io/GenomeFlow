import { c as create_ssr_component, i as subscribe, j as each, e as escape } from "../../../chunks/index-20d5dc34.js";
import { p as page } from "../../../chunks/stores-1949e0ee.js";
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params;
  var job_data = [];
  $$unsubscribe_page();
  return `<section><div class="${"bg-gray-50 drop-shadow-lg overflow-hidden sm:rounded-lg mb-3"}"><div class="${"px-4 py-5 sm:px-6"}"><div class="${"flex gap-3"}"><a><svg class="${"w-6 h-6 dark:text-black"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 19l-7-7m0 0l7-7m-7 7h18"}"></path></svg></a>
				${each(job_data, (job) => {
    return `<h3 class="${"text-lg leading-6 font-medium text-gray-900"}">${escape(job.job_name)}
					</h3>`;
  })}</div></div>
		<hr>
		<table class="${"w-full text-sm text-left text-gray-500"}"><thead class="${"text-xs text-gray-700 uppercase"}"><tr><th scope="${"col"}" class="${"px-6 py-3"}">No </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Project name </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Job name </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Job status </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Total tasks
						<br>
						<span style="${"font-size: 10px; font-weight: 400;"}">(processing / completed / failed)</span></th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Total<br>elapsed time<br>
						<span style="${"font-size: 10px; font-weight: 400;"}">(days:hours:minutes)</span></th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Cost </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Updated </th>
					<th scope="${"col"}" class="${"px-6 py-3"}"><span class="${"sr-only"}">Edit</span></th></tr></thead>
				<tbody><tr class="${"bg-gray-50 border-b cursor-pointer"}" onclick="${"window.location='/list_of_jobs/1';"}"><th scope="${"row"}" class="${"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"}">1</th>
						<td class="${"px-6 py-4"}">aleelab-genomeflow-test-opt</td>
						<td class="${"px-6 py-4"}">test</td>
						<td class="${"px-6 py-4"}"><p class="${"text-sm text-white bg-blue-700 px-2 py-1 rounded-md text-center"}">Completed</p></td>
						<td class="${"px-6 py-4"}">0 / 1 / 0</td>
						<td class="${"px-6 py-4"}">0:2:37</td>
						<td class="${"px-6 py-4"}">0.705</td>
						<td class="${"px-6 py-4"}">9/27/2022, 5:50:00 PM</td></tr></tbody></table></div>

	<div class="${"relative overflow-x-auto bg-gray-50 drop-shadow-lg sm:rounded-lg m-3"}"><table class="${"w-full text-sm text-left text-gray-500"}"><thead class="${"text-xs text-gray-700 uppercase bg-gray-100 border-b"}"><tr><th scope="${"col"}" class="${"px-6 py-3"}">No </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Task name </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Task status </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">CPU </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">RAM </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">HDD </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Elapsed time<br>
						<span style="${"font-size: 10px; font-weight: 400;"}">(hours:minutes)</span></th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Cost </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Updated </th>
					<th scope="${"col"}" class="${"px-6 py-3"}"><span class="${"sr-only"}">Edit</span></th></tr></thead>
			<tbody><tr class="${"border-b cursor-pointer"}" onclick="${"window.location='/list_of_jobs/1/1/dashboard';"}"><th scope="${"row"}" class="${"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"}">1
					</th>
					<td class="${"px-6 py-4"}">Task 1</td>
					<td class="${"px-6 py-4"}"><p class="${"text-sm text-white bg-blue-700 px-2 py-1 rounded-md text-center"}">Completed</p></td>
					<td class="${"px-6 py-4"}">21.0% </td>
					<td class="${"px-6 py-4"}">40.0% </td>
					<td class="${"px-6 py-4"}">23.0% </td>
					<td class="${"px-6 py-4"}">2:37</td>
					<td class="${"px-6 py-4"}">$0.705 </td>
					<td class="${"px-6 py-4"}">9/27/2022, 5:50:00 PM</td>
					<td class="${"px-6 py-4 text-right"}"><a href="${"/list_of_jobs/1/1/dag"}" class="${"text-sm text-white hover:underline bg-gray-700 px-2 py-1 rounded-md"}">DAG</a></td></tr></tbody></table></div></section>`;
});
export { U5Bidu5D as default };
