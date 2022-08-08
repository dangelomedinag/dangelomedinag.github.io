<div id="app">
	<header>
		logo
		<div>
			<a href="/">github</a>
		</div>
	</header>
	<main>
		<slot />
	</main>
	<footer>dangelomedinag</footer>
</div>

<style>
	#app {
		min-height: 100vh;
		/* background-color: rgba(255, 0, 0, 0.203); */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		max-width: 1024px;
		padding: 0 1em;
		margin: 0 auto;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em 2em;
		border-bottom: 1px solid var(--color-bg-opacity);
	}

	main {
		/* background-color: rgba(240, 255, 255, 0.144); */
		flex: auto;
	}
</style>
