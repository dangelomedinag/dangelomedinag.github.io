<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		const json = await response.json();

		return {
			props: {
				todo: json
			}
		};
	};
</script>

<script lang="ts">
	interface Todo {
		userId: Number;
		id: Number;
		title: String;
		completed: String;
	}

	export let todo: Todo;
	const repo: string = 'magacine';
</script>

<h1>Welcome to SvelteKit - {repo}</h1>
<h2>este lo agrege ahora</h2>
{JSON.stringify({ todo })}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
