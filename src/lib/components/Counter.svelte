<script>
	let count = 0;
	function increment() {
		count += 1;
	}
</script>

<div>
	count: {count}
</div>
<button on:click={increment}>+1</button>
