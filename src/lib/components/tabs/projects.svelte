<script lang="ts">
	import Card from './card.svelte';
</script>

<Card title="Magacine 🎬">
	<p><span>Movie App</span></p>
	<p>Movie dashboard, streaming platform, discover and download movies.</p>
	<div slot="tags">
		<span>svelte-kit</span>
		<span>vitejs</span>
		<span>frameworks</span>
		<span>API</span>
	</div>
	<div slot="actions">
		<a href="https://github.com/dangelomedinag/magacine">repository</a>
		<a href="https://magacine.vercel.app">site</a>
	</div>
</Card>

<Card title="Climate 🌤️">
	<p><span>Weather App</span></p>
	<p>Get weather conditions, forecast and more.</p>
	<div slot="tags">
		<span>vanilla</span>
		<span>vitejs</span>
		<span>API</span>
	</div>
	<div slot="actions">
		<a href="https://github.com/dangelomedinag/climate">repository</a>
		<a href="https://climateapp-weather.netlify.app">site</a>
	</div>
</Card>
