export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/task_dashboard.svelte"),
	() => import("../../src/routes/job_dashboard.svelte"),
	() => import("../../src/routes/job_selection.svelte"),
	() => import("../../src/routes/first_table/[id].svelte"),
	() => import("../../src/routes/first_table.svelte"),
	() => import("../../src/routes/task_view_2.svelte"),
	() => import("../../src/routes/task_view.svelte"),
	() => import("../../src/routes/job_view.svelte"),
	() => import("../../src/routes/task_dag.svelte"),
	() => import("../../src/routes/job_dag.svelte"),
	() => import("../../src/routes/backup.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"task_dashboard": [[0, 3], [1]],
	"job_dashboard": [[0, 4], [1]],
	"job_selection": [[0, 5], [1]],
	"first_table/[id]": [[0, 6], [1]],
	"first_table": [[0, 7], [1]],
	"task_view_2": [[0, 8], [1]],
	"task_view": [[0, 9], [1]],
	"job_view": [[0, 10], [1]],
	"task_dag": [[0, 11], [1]],
	"job_dag": [[0, 12], [1]],
	"backup": [[0, 13], [1]]
};