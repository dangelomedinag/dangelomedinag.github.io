<script lang="ts">
	import { TABS, type Tabs } from '$lib/types';

	export let tab: Tabs = TABS.about;

	function setTab(e: MouseEvent): void {
		const buttons = document.querySelectorAll('[data-tab]');

		buttons.forEach((element) => {
			element.classList.remove('active');
		});

		if (e.target instanceof HTMLButtonElement) {
			if (e.target?.dataset?.tab) {
				tab = e.target?.dataset?.tab as any;
			}
			e.target.classList.add('active');
		}
	}
</script>

<div class="tabs">
	<button class="active" data-tab={TABS.about} on:click={setTab}>{TABS.about}</button>
	<button data-tab={TABS.projects} on:click={setTab}>{TABS.projects}</button><button
		data-tab={TABS.contact}
		on:click={setTab}>{TABS.contact}</button
	>
</div>

<style>
	.tabs {
		display: flex;
		overflow: hidden;
		max-width: 600px;
		margin: 0 auto;
	}

	.tabs > * {
		flex-basis: 100%;
		border-radius: 0;
		text-transform: capitalize;
	}

	.tabs > *:first-child {
		flex-basis: 100%;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}

	.tabs > *:last-child {
		flex-basis: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.active {
		color: var(--color-primary);
		border-color: var(--color-primary);
	}
</style>
