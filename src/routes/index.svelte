<script lang="ts">
	import GridTabs from '$lib/components/tabs/grid-tabs.svelte';
	import About from '$lib/components/tabs/about.svelte';
	import Contact from '$lib/components/tabs/contact.svelte';
	import Projects from '$lib/components/tabs/projects.svelte';
	import TabsButtons from '$lib/components/tabs/tabs-buttons.svelte';
	import type { Tabs } from '$lib/types';

	let tab: Tabs;
</script>

<div class="hero">
	<a href="/">
		<img src="/dm-logo.svg" class="logo" alt="Vite Logo" />
	</a>
	<div>
		<h1>¡Welcome!</h1>
	</div>
</div>

<TabsButtons bind:tab />

<GridTabs>
	<svelte:fragment slot="title">
		<h1 class="title">{tab}.</h1>
	</svelte:fragment>
	{#if tab === 'about'}
		<About />
	{:else if tab === 'projects'}
		<Projects />
	{:else}
		<Contact />
	{/if}
</GridTabs>

<style>
	.logo {
		height: 6em;
		will-change: filter;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}

	.hero {
		padding-top: 3em;
		padding-bottom: 3em;
		text-align: center;
	}

	.title {
		display: inline-block;
		position: relative;
		text-transform: capitalize;
		padding: 0 0.25em;
	}

	.title::after {
		position: absolute;
		content: '';
		left: 0;
		bottom: 0;
		width: 100%;
		height: 5px;
		transform: rotate(-2deg);
		z-index: -1;
		/* background-color: var(--color-primary); */
		border-bottom: 4px dashed var(--color-primary);
	}
</style>
