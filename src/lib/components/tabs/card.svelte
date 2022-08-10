<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let title: string = '';

	let inside = false;

	function intersecting(node: HTMLElement) {
		let options = {
			rootMargin: '0px',
			threshold: 0.3
		};

		const callback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					inside = true;
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);
		observer.observe(node);

		return {
			destroy() {
				observer?.disconnect();
			}
		};
	}
</script>

{#key inside}
	<article
		style:visibility={!inside ? 'hidden' : 'visible'}
		use:intersecting
		data-title={title}
		in:scale={!inside
			? { duration: 0 }
			: { delay: 100, duration: 1000, easing: quintOut, start: 0.95 }}
	>
		<slot />
	</article>
{/key}

<style>
	article {
		text-align: left;
		border-radius: 10px;
		border: 2px solid var(--color-bg-opacity);
		padding: 2em;
		position: relative;
		margin-top: 2em;
		box-shadow: 0px 0px 0px var(--color-bg-opacity);
		transition: box-shadow 0.3s cubic-bezier(0.39, 0.575, 0.565, 1),
			transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
	}

	article:hover {
		border-color: var(--color-primary);
		transform: translate(-4px, -4px);
		background-color: rgba(255 255 255 / 1%);
		box-shadow: 4px 4px 0px var(--color-primary);
	}

	article::before {
		content: attr(data-title);
		position: absolute;
		top: 0;
		left: 0;
		margin-left: 2em;
		margin-top: -1.5em;
		background-color: var(--color-bg);
		padding: 0.25em 1em;
		border: 1px solid var(--color-bg-opacity);
		border-radius: inherit;
	}

	article :global(span.highlight) {
		color: #64d0ff;
	}

	article > :global(button.link) {
		width: 100%;
	}
</style>
