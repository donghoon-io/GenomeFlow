export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","genome.png","genome_expanded.png","profile.jpg","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-d5aaa508.js","js":["start-d5aaa508.js","chunks/vendor-63c306b5.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "selected_task_dashboard",
				pattern: /^\/selected_task_dashboard\/?$/,
				names: [],
				types: [],
				path: "/selected_task_dashboard",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "selected_job_dashboard",
				pattern: /^\/selected_job_dashboard\/?$/,
				names: [],
				types: [],
				path: "/selected_job_dashboard",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "selected_task_dag",
				pattern: /^\/selected_task_dag\/?$/,
				names: [],
				types: [],
				path: "/selected_task_dag",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "list_of_jobs/[id]/dashboard",
				pattern: /^\/list_of_jobs\/([^/]+?)\/dashboard\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "list_of_jobs/[id]/dag",
				pattern: /^\/list_of_jobs\/([^/]+?)\/dag\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "list_of_jobs/[id]/[id_task]/dashboard",
				pattern: /^\/list_of_jobs\/([^/]+?)\/([^/]+?)\/dashboard\/?$/,
				names: ["id","id_task"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "list_of_jobs/[id]/[id_task]/dag",
				pattern: /^\/list_of_jobs\/([^/]+?)\/([^/]+?)\/dag\/?$/,
				names: ["id","id_task"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "list_of_jobs/[id]",
				pattern: /^\/list_of_jobs\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "list_of_jobs",
				pattern: /^\/list_of_jobs\/?$/,
				names: [],
				types: [],
				path: "/list_of_jobs",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "selected_job",
				pattern: /^\/selected_job\/?$/,
				names: [],
				types: [],
				path: "/selected_job",
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "deprecated/job_selection",
				pattern: /^\/deprecated\/job_selection\/?$/,
				names: [],
				types: [],
				path: "/deprecated/job_selection",
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				id: "deprecated/task_view_2",
				pattern: /^\/deprecated\/task_view_2\/?$/,
				names: [],
				types: [],
				path: "/deprecated/task_view_2",
				shadow: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "deprecated/task_view",
				pattern: /^\/deprecated\/task_view\/?$/,
				names: [],
				types: [],
				path: "/deprecated/task_view",
				shadow: null,
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				id: "deprecated/backup",
				pattern: /^\/deprecated\/backup\/?$/,
				names: [],
				types: [],
				path: "/deprecated/backup",
				shadow: null,
				a: [0,16],
				b: [1]
			},
			{
				type: 'page',
				id: "dag",
				pattern: /^\/dag\/?$/,
				names: [],
				types: [],
				path: "/dag",
				shadow: null,
				a: [0,17],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
