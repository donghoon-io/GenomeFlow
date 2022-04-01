export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/task_view_2.svelte"),
	() => import("../../src/routes/dashboard.svelte"),
	() => import("../../src/routes/task_view.svelte"),
	() => import("../../src/routes/job_view.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"task_view_2": [[0, 3], [1]],
	"dashboard": [[0, 4], [1]],
	"task_view": [[0, 5], [1]],
	"job_view": [[0, 6], [1]]
};