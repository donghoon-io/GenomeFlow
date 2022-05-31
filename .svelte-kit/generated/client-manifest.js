export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/selected_task_dashboard.svelte"),
	() => import("../../src/routes/selected_job_dashboard.svelte"),
	() => import("../../src/routes/selected_task_dag.svelte"),
	() => import("../../src/routes/list_of_jobs/[id]/dashboard.svelte"),
	() => import("../../src/routes/list_of_jobs/[id]/dag.svelte"),
	() => import("../../src/routes/list_of_jobs/[id]/[id_task]/dashboard.svelte"),
	() => import("../../src/routes/list_of_jobs/[id]/[id_task]/dag.svelte"),
	() => import("../../src/routes/list_of_jobs/[id].svelte"),
	() => import("../../src/routes/list_of_jobs.svelte"),
	() => import("../../src/routes/selected_job.svelte"),
	() => import("../../src/routes/deprecated/job_selection.svelte"),
	() => import("../../src/routes/deprecated/task_view_2.svelte"),
	() => import("../../src/routes/deprecated/task_view.svelte"),
	() => import("../../src/routes/deprecated/backup.svelte"),
	() => import("../../src/routes/dag.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"selected_task_dashboard": [[0, 3], [1]],
	"selected_job_dashboard": [[0, 4], [1]],
	"selected_task_dag": [[0, 5], [1]],
	"list_of_jobs/[id]/dashboard": [[0, 6], [1]],
	"list_of_jobs/[id]/dag": [[0, 7], [1]],
	"list_of_jobs/[id]/[id_task]/dashboard": [[0, 8], [1]],
	"list_of_jobs/[id]/[id_task]/dag": [[0, 9], [1]],
	"list_of_jobs/[id]": [[0, 10], [1]],
	"list_of_jobs": [[0, 11], [1]],
	"selected_job": [[0, 12], [1]],
	"deprecated/job_selection": [[0, 13], [1]],
	"deprecated/task_view_2": [[0, 14], [1]],
	"deprecated/task_view": [[0, 15], [1]],
	"deprecated/backup": [[0, 16], [1]],
	"dag": [[0, 17], [1]]
};