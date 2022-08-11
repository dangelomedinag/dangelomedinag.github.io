<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let title: string = '';

	let visible = false;

	function intersecting(node: HTMLElement) {
		let options = {
			rootMargin: '0px',
			threshold: 0.3
		};

		const callback: IntersectionObserverCallback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
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

{#key visible}
	<article
		use:intersecting
		class="card"
		class:visible
		data-title={title}
		in:scale={visible
			? { delay: 100, duration: 1000, easing: quintOut, start: 0.95 }
			: { duration: 0 }}
	>
		<div>
			<slot />
		</div>
		<slot name="actions" />
	</article>
{/key}

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		visibility: hidden;
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

	.card:hover,
	.card:focus-within {
		border-color: var(--color-primary);
		transform: translate(0px, -8px);
		background-color: rgba(255 255 255 / 1%);
		box-shadow: 4px 4px 0px var(--color-primary);
	}

	.card::before {
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
		font-family: 'Montserrat', sans-serif;
	}

	.card :global(span.highlight) {
		color: #64d0ff;
	}

	.card :global([slot='actions']) {
		display: inline-flex;
		width: 100%;
		gap: 1em;
		margin-top: 1em;
		text-align: center;
		font-size: 1em;
		font-family: 'Montserrat', sans-serif;
	}
	.card :global([slot='actions'] > *) {
		flex-basis: 100%;
		/* padding: 0.6em 1.2em; */
		margin: 0;
		background-color: var(--color-bg-opacity);
	}

	.visible {
		visibility: visible;
	}
</style>
