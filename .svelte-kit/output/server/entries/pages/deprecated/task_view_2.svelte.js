import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-20d5dc34.js";
import { G as GaugeChart_1 } from "../../../chunks/GaugeChart-fa4301b9.js";
import { L as LineChart_1 } from "../../../chunks/LineChart-2a59414e.js";
const Task_view_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>task_view</title>`, ""}`, ""}

<section><div class="${"bg-gray-50 drop-shadow-lg overflow-hidden sm:rounded-lg mb-3"}"><div class="${"px-4 py-5 sm:px-6"}"><div class="${"flex gap-3"}"><a href="${"/"}"><svg class="${"w-6 h-6 dark:text-black"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 19l-7-7m0 0l7-7m-7 7h18"}"></path></svg></a>
				<h3 class="${"text-lg leading-6 font-medium text-gray-900"}">ESCA</h3></div></div></div>
	<div class="${"bg-gray-50 drop-shadow-lg overflow-hidden sm:rounded-lg m-3"}"><div class="${"px-4 py-5 sm:px-6"}"><div class="${"flex"}"><div class="${"w-3/5"}"><div class="${"flex gap-3"}"><a href="${"/"}"><svg class="${"w-6 h-6 dark:text-black"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 19l-7-7m0 0l7-7m-7 7h18"}"></path></svg></a>
						<h3 class="${"text-lg leading-6 font-medium text-gray-900"}">Task 1</h3>
						<a href="${"#"}" class="${"text-sm leading-none text-white bg-blue-700 px-2 py-1 rounded-md text-center"}">Completed</a></div></div>
				<div class="${"w-2/5"}"><div class="${"flex justify-end gap-3"}"><h3 class="${"text-sm leading-6 font-medium text-gray-900"}">Updated</h3>
						<h3 class="${"text-sm leading-6 font-light text-gray-900"}">12/15/2021 10:05:26 PM</h3>
						<a href="${"#"}" class="${"text-sm text-white hover:underline bg-gray-700 px-2 py-1 rounded-md"}">DAG</a></div></div></div></div>
		<div class="${"px-4 py-5 sm:px-6"}"><p class="${"font-semibold"}">Average resource used over time</p>
			<div class="${"m-3"}"><div class="${"flex gap-5 py-5"}"><div class="${"w-1/6"}">${validate_component(GaugeChart_1, "GaugeChart").$$render($$result, {
    data: [{ "group": "value", "value": 67 }],
    options: {
      "title": "CPU",
      "resizable": true,
      "height": "175px",
      "gauge": { "type": "full", "alignment": "center" },
      "color": { "scale": { "value": "#0C5DD8" } }
    }
  }, {}, {})}</div>
					<div class="${"w-5/6"}">${validate_component(LineChart_1, "LineChart").$$render($$result, {
    data: [
      {
        "group": "Dataset 1",
        "key": "1",
        "value": 34200
      },
      {
        "group": "Dataset 1",
        "key": "2",
        "value": 23500
      },
      {
        "group": "Dataset 1",
        "key": "3",
        "value": 53100
      },
      {
        "group": "Dataset 1",
        "key": "4",
        "value": 42300
      },
      {
        "group": "Dataset 1",
        "key": "5",
        "value": 12300
      }
    ],
    options: {
      "axes": {
        "bottom": { "mapsTo": "key", "scaleType": "labels" },
        "left": { "mapsTo": "value", "scaleType": "linear" }
      },
      "legend": { "enabled": false },
      "height": "175px",
      "color": {
        "pairing": { "option": 1 },
        "scale": { "Dataset 1": "#0C5DD8" }
      }
    }
  }, {}, {})}</div></div>
				<div class="${"flex gap-5 py-5"}"><div class="${"w-1/6"}">${validate_component(GaugeChart_1, "GaugeChart").$$render($$result, {
    data: [{ "group": "value", "value": 67 }],
    options: {
      "title": "RAM",
      "resizable": true,
      "height": "175px",
      "gauge": { "type": "full", "alignment": "center" },
      "color": { "scale": { "value": "#0C5DD8" } }
    }
  }, {}, {})}</div>
					<div class="${"w-5/6"}">${validate_component(LineChart_1, "LineChart").$$render($$result, {
    data: [
      {
        "group": "Dataset 1",
        "key": "1",
        "value": 34200
      },
      {
        "group": "Dataset 1",
        "key": "2",
        "value": 23500
      },
      {
        "group": "Dataset 1",
        "key": "3",
        "value": 53100
      },
      {
        "group": "Dataset 1",
        "key": "4",
        "value": 42300
      },
      {
        "group": "Dataset 1",
        "key": "5",
        "value": 12300
      }
    ],
    options: {
      "axes": {
        "bottom": { "mapsTo": "key", "scaleType": "labels" },
        "left": { "mapsTo": "value", "scaleType": "linear" }
      },
      "legend": { "enabled": false },
      "height": "175px",
      "color": {
        "pairing": { "option": 1 },
        "scale": { "Dataset 1": "#0C5DD8" }
      }
    }
  }, {}, {})}</div></div>
				<div class="${"flex gap-5 py-5"}"><div class="${"w-1/6"}">${validate_component(GaugeChart_1, "GaugeChart").$$render($$result, {
    data: [{ "group": "value", "value": 67 }],
    options: {
      "title": "HDD",
      "resizable": true,
      "height": "175px",
      "gauge": { "type": "full", "alignment": "center" },
      "color": { "scale": { "value": "#0C5DD8" } }
    }
  }, {}, {})}</div>
					<div class="${"w-5/6"}">${validate_component(LineChart_1, "LineChart").$$render($$result, {
    data: [
      {
        "group": "Dataset 1",
        "key": "1",
        "value": 34200
      },
      {
        "group": "Dataset 1",
        "key": "2",
        "value": 23500
      },
      {
        "group": "Dataset 1",
        "key": "3",
        "value": 53100
      },
      {
        "group": "Dataset 1",
        "key": "4",
        "value": 42300
      },
      {
        "group": "Dataset 1",
        "key": "5",
        "value": 12300
      }
    ],
    options: {
      "axes": {
        "bottom": { "mapsTo": "key", "scaleType": "labels" },
        "left": { "mapsTo": "value", "scaleType": "linear" }
      },
      "legend": { "enabled": false },
      "height": "175px",
      "color": {
        "pairing": { "option": 1 },
        "scale": { "Dataset 1": "#0C5DD8" }
      }
    }
  }, {}, {})}</div></div></div></div></div></section>`;
});
export { Task_view_2 as default };
