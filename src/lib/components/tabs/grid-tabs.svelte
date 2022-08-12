<slot name="title" />
<div class="grid">
	<slot />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2em;
		margin-bottom: 3em;
	}

	@media (min-width: 650px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
