<script lang="ts">
</script>

<div class="hero">
	<a href="/">
		<img src="/dm-logo.svg" class="logo" alt="Vite Logo" />
	</a>
	<div>
		<h1>¡Welcome!</h1>
	</div>
</div>

<div class="tabs">
	<button>About me</button><button>Skills</button><button>Contact</button>
</div>

<div data-title="⚡" class="bio">
	<p>My name is <span>Dangelo</span>, i am a Junior front-end developer and graphic designer.</p>
	<p>
		I've always been pretty passionate about technology and photography, that's really what drives
		me to want to learn. I have worked as an audiovisual editor and as a graphic designer. Some time
		ago, self-taught, I started my steps in web development. To this day, I love it and I hope to
		continue enjoying it and learning.
	</p>
</div>
<div data-title="❤" class="bio">
	<p>Disfruto mucho del <span>Desarrollo web</span> y de las tecnologia que lo rodean.</p>
	<p>
		todo el ecositema web,
		<span>html/ css/ javascript, framework, API's, NodeJS</span>
	</p>
</div>

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

	.tabs {
		display: flex;
		/* border-radius: 10px; */
		overflow: hidden;
	}

	.tabs > * {
		flex-basis: 100%;
		border-radius: 0;
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

	.bio {
		text-align: center;
		border-radius: 10px;
		border: 1px solid var(--color-bg-opacity);
		padding: 1em;
		position: relative;
		margin-top: 2em;
		margin-bottom: 2em;
	}

	.bio:hover {
		background-color: rgba(255 255 255 / 1%);
	}

	.bio::before {
		content: attr(data-title);
		position: absolute;
		top: 0;
		left: 0;
		margin-left: 1em;
		margin-top: -1.5em;
		background-color: var(--color-bg);
		padding: 0.25em 1em;
		border: 1px solid var(--color-bg-opacity);
		border-radius: inherit;
	}

	.bio span {
		color: #64d0ff;
	}
</style>
