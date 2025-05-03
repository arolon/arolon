<script lang="ts">
	import { base } from '$app/paths';

	const games = [
		{
			id: 'game-one',
			title: 'Dark Forest Sprint',
			description: 'Dash through ethereal landscapes in this thrilling endless runner! How long can you evade the spectral obstacles?',
			buildPath: '/unity-builds/GhostRunner/index.html'
		},
		{
			id: 'game-two',
			title: 'RPS Showdown',
			description: 'Challenge the AI in the timeless classic! Can you outsmart the machine in Rock, Paper, Scissors?',
			buildPath: '/unity-builds/RockPaperScissors/index.html'
		},
		{
			id: 'game-three',
			title: 'Feline Pursuit AI Demo',
			description: 'Watch out! This demo showcases NPC line-of-sight detection and pursuit behavior. Don\'t let the cat catch you!',
			buildPath: '/unity-builds/CatChase/index.html'
		},
		{
			id: 'game-four',
			title: 'Rio\'s Aerial Adventure',
			description: 'Take flight as Rio! Soar through the skies, blast enemies, and skillfully dodge bullets and cages in this action-packed shooter.',
			buildPath: '/unity-builds/RioGame/index.html'
		}
	];

	function getGameSrc(buildPath: string): string {
		return `${base}${buildPath}`;
	}
</script>

<svelte:head>
	<title>Felipe Rolon — Games</title>
	<meta name="description" content="Play games developed by Felipe Rolon using Unity." />
</svelte:head>

<div class="container">
	<main>
		<h1>My Games</h1>
		<p class="intro-paragraph">
			Welcome to my game development corner! As I explore game creation with Unity and C#, I'll be sharing some of my projects here. Feel free to play them directly in the browser.
		</p>

		{#if games.length > 0}
			<div class="games-list">
				{#each games as game (game.id)}
					<section class="game-section">
						<h2>{game.title}</h2>
						<p>{game.description}</p>
						<div class="game-embed">
							<iframe
								title="{game.title}"
								src={getGameSrc(game.buildPath)}
								width="800"
								height="600"
								frameborder="0"
								allowfullscreen
								scrolling="no"
							>
								Your browser does not support iframes. You can access the game directly at
								<a href={getGameSrc(game.buildPath)} target="_blank" rel="noopener noreferrer">this link</a>.
							</iframe>
						</div>
					</section>
				{/each}
			</div>
		{:else}
			<p>No games available to display at the moment. Check back soon!</p>
		{/if}
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1rem;
		display: flex;
		justify-content: center;
	}

	main {
		width: 100%;
		min-height: 500px;
		text-align: left;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 1.5rem 0;
		font-size: clamp(2rem, 5vw, 2.5rem);
		text-align: start;
		color: var(--text-color, #eee);
		border-bottom: 2px solid var(--accent-color, #ca3c25); 
		padding-bottom: 0.5rem;
		display: inline-block;
	}

	.intro-paragraph {
		font-size: 1.1rem;
		line-height: 1.7;
		margin-bottom: 3rem;
		color: var(--text-secondary, #ccc);
	}

	.games-list {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	.game-section {
		border: 1px solid var(--border-color, #333);
		border-radius: 8px;
		padding: 1.5rem;
		background-color: var(--card-bg, #1a1a1a);
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	}

	.game-section h2 {
		font-size: clamp(1.5rem, 4vw, 1.8rem);
		margin-top: 0;
		margin-bottom: 1rem;
		color: var(--accent-color, #ca3c25);
	}

	.game-section p {
		margin-bottom: 1.5rem;
		color: var(--text-secondary, #ccc);
		line-height: 1.6;
	}

	.game-embed {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000; /* Black background can look good for games */
		border-radius: 4px;
		overflow: hidden; /* Ensure iframe corners are rounded if container is */
		/* Responsive iframe container */
		position: relative;
		padding-bottom: 75%; /* 4:3 aspect ratio (600 / 800 = 0.75). Adjust if your game is 16:9 (56.25%) */
		height: 0;
		max-width: 800px; /* Match iframe width */
		margin: 0 auto; /* Center container */
	}

	.game-embed iframe {
		/* Make iframe fill the container */
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none; /* Ensure no iframe border */
	}

	/* --- Responsive Adjustments --- */
	@media (max-width: 900px) {
		.game-embed {
			max-width: 100%; /* Allow iframe container to take full width */
			/* Adjust aspect ratio padding if needed for vertical layouts */
		}
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 2rem;
		}
		.game-section h2 {
			font-size: 1.5rem;
		}
		.intro-paragraph {
			font-size: 1rem;
		}
		.container {
			padding: 1.5rem 0.5rem;
		}
		.game-section {
			padding: 1rem;
		}
	}
</style>
