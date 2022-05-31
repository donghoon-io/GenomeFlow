export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/selected_task_dashboard.svelte"),
	() => import("../../src/routes/selected_job_dashboard.svelte"),
	() => import("../../src/routes/selected_task_dag.svelte"),
	() => import("../../src/routes/selected_job_dag.svelte"),
	() => import("../../src/routes/list_of_jobs.svelte"),
	() => import("../../src/routes/selected_job.svelte"),
	() => import("../../src/routes/first_table/[id].svelte"),
	() => import("../../src/routes/deprecated/job_selection.svelte"),
	() => import("../../src/routes/deprecated/task_view_2.svelte"),
	() => import("../../src/routes/deprecated/task_view.svelte"),
	() => import("../../src/routes/deprecated/backup.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"selected_task_dashboard": [[0, 3], [1]],
	"selected_job_dashboard": [[0, 4], [1]],
	"selected_task_dag": [[0, 5], [1]],
	"selected_job_dag": [[0, 6], [1]],
	"list_of_jobs": [[0, 7], [1]],
	"selected_job": [[0, 8], [1]],
	"first_table/[id]": [[0, 9], [1]],
	"deprecated/job_selection": [[0, 10], [1]],
	"deprecated/task_view_2": [[0, 11], [1]],
	"deprecated/task_view": [[0, 12], [1]],
	"deprecated/backup": [[0, 13], [1]]
};