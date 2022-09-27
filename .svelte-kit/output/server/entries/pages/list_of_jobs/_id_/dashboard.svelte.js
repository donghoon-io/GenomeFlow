import { c as create_ssr_component, i as subscribe, j as each, v as validate_component, e as escape } from "../../../../chunks/index-20d5dc34.js";
import { G as GaugeChart_1 } from "../../../../chunks/GaugeChart-fa4301b9.js";
import { B as BarChartSimple } from "../../../../chunks/BarChartSimple-2dedb208.js";
import { M as MeterChart_1 } from "../../../../chunks/MeterChart-dd9bf35f.js";
import { p as page } from "../../../../chunks/stores-1949e0ee.js";
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params;
  var job_data = [];
  var logger_resource_data = [];
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>selected_job_dashboard</title>`, ""}`, ""}

<section><div class="${"bg-gray-50 drop-shadow-lg overflow-hidden sm:rounded-lg mb-3"}"><div class="${"px-4 py-5 sm:px-6"}"><div class="${"flex"}"><div class="${"w-3/5"}"><div class="${"flex gap-3"}"><a><svg class="${"w-6 h-6 dark:text-black"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 19l-7-7m0 0l7-7m-7 7h18"}"></path></svg></a>
						${each(job_data, (job) => {
    return `<h3 class="${"text-lg leading-6 font-medium text-gray-900"}">${escape(job.job_name)}</h3>`;
  })}</div></div>
				<div class="${"w-2/5"}"><div class="${"flex justify-end gap-3"}"><a href="${"#"}" class="${"text-sm text-white hover:underline bg-gray-700 px-2 py-1 rounded-md"}">DAG</a>
						<a href="${"#"}" class="${"text-sm text-white hover:underline bg-gray-400 px-2 py-1 rounded-md"}">Task list</a></div></div></div></div>
		<hr>
		<table class="${"w-full text-sm text-left text-gray-500"}"><thead class="${"text-xs text-gray-700 uppercase"}"><tr><th scope="${"col"}" class="${"px-6 py-3"}">(DNO) </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">(DINO) </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Machine type </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">CPU </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">RAM </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">HDD </th>
					<th scope="${"col"}" class="${"px-6 py-3"}">Updated </th></tr></thead>
			${each(logger_resource_data, (resource) => {
    return `<tbody><tr><td class="${"px-6 py-4"}">${escape(resource.dno)}</td>
					<td class="${"px-6 py-4"}">${escape(resource.dino)}</td>
					<td class="${"px-6 py-4"}">${escape(resource.machine_type)}</td>
					<td class="${"px-6 py-4"}">${escape(resource.cores)}</td>
					<td class="${"px-6 py-4"}">${escape(resource.memory)}</td>
					<td class="${"px-6 py-4"}">${escape(resource.disk)}</td>
					<td class="${"px-6 py-4"}">PUT UPDATED TIME HERE </td></tr>
			</tbody>`;
  })}</table></div>

	<div class="${"relative overflow-x-auto"}"><div class="${"py-5"}"><div class="${"flex gap-3"}"><div class="${"w-3/4"}"><div class="${"p-5 bg-gray-50 drop-shadow-lg sm:rounded-lg"}">${job_data.length != 0 ? `${validate_component(MeterChart_1, "MeterChart").$$render($$result, {
    data: [
      {
        "group": "Complete",
        "value": job_data[0].task_count_completed
      },
      {
        "group": "Processing",
        "value": job_data[0].task_count_processing
      },
      {
        "group": "Failed",
        "value": job_data[0].task_count_failed
      }
    ],
    options: {
      "title": "Proportional Meter Chart",
      "height": "130px",
      "meter": {
        "proportional": {
          "total": job_data[0].task_count_total,
          "unit": "Tasks"
        }
      },
      "color": {
        "pairing": { "option": 3 },
        "scale": {
          "Complete": "#0C5DD8",
          "Processing": "#12CFEA",
          "Pending": "#FAE737"
        }
      }
    }
  }, {}, {})}` : ``}</div>
					<div class="${"my-3 p-5 bg-gray-50 drop-shadow-lg sm:rounded-lg"}"><p class="${"font-semibold"}">Average resource used over time</p>
						<div class="${"grid grid-cols-1 md:grid-cols-3 gap-4 py-5"}"><div>${validate_component(GaugeChart_1, "GaugeChart").$$render($$result, {
    data: [{ "group": "value", "value": 67 }],
    options: {
      "title": "CPU",
      "resizable": true,
      "height": "250px",
      "gauge": { "type": "full", "alignment": "center" },
      "color": { "scale": { "value": "#0C5DD8" } }
    }
  }, {}, {})}
								<p class="${"mt-5 text-sm text-center"}">67 of 100 used</p></div>
							<div>${validate_component(GaugeChart_1, "GaugeChart").$$render($$result, {
    data: [{ "group": "value", "value": 67 }],
    options: {
      "title": "RAM",
      "resizable": true,
      "height": "250px",
      "gauge": { "type": "full", "alignment": "center" },
      "color": { "scale": { "value": "#12CFEA" } }
    }
  }, {}, {})}
									<p class="${"mt-5 text-sm text-center"}">67 of 100 used</p></div>
							<div>${validate_component(GaugeChart_1, "GaugeChart").$$render($$result, {
    data: [{ "group": "value", "value": 67 }],
    options: {
      "title": "HDD",
      "resizable": true,
      "height": "250px",
      "gauge": { "type": "full", "alignment": "center" },
      "color": { "scale": { "value": "#FAE737" } }
    }
  }, {}, {})}
									<p class="${"mt-5 text-sm text-center"}">67 of 100 used</p></div></div></div></div>
				<div class="${"w-1/4 bg-gray-50 drop-shadow-lg sm:rounded-lg p-5"}"><p class="${"font-semibold"}">Total elapsed time and cost</p>
					<div class="${"my-5"}">${validate_component(BarChartSimple, "BarChartSimple").$$render($$result, {
    data: [
      {
        "group": "Expected value",
        "value": 65e3
      },
      { "group": "Current value", "value": 29123 }
    ],
    options: {
      "title": "Total elapsed time",
      "axes": {
        "left": { "mapsTo": "value" },
        "bottom": { "mapsTo": "group", "scaleType": "labels" }
      },
      "height": "263px",
      "color": {
        "pairing": { "option": 2 },
        "scale": {
          "Expected value": "#999999",
          "Current value": "#0C5DD8"
        }
      },
      "legend": { "enabled": false }
    }
  }, {}, {})}</div>
					<div class="${"my-5"}">${validate_component(BarChartSimple, "BarChartSimple").$$render($$result, {
    data: [
      {
        "group": "Expected value",
        "value": 65e3
      },
      { "group": "Current value", "value": 29123 }
    ],
    options: {
      "title": "Cost",
      "axes": {
        "left": { "mapsTo": "value" },
        "bottom": { "mapsTo": "group", "scaleType": "labels" }
      },
      "height": "263px",
      "color": {
        "pairing": { "option": 2 },
        "scale": {
          "Expected value": "#999999",
          "Current value": "#0C5DD8"
        }
      },
      "legend": { "enabled": false }
    }
  }, {}, {})}</div></div></div></div></div></section>`;
});
export { Dashboard as default };
