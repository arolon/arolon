<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/avatarFRCircle.png';
	import github from '$lib/images/github.svg';
	import Icon from 'svelte-awesome';
	import refresh from 'svelte-awesome/icons/refresh';
	import { onMount } from 'svelte';

  let scrollPosition = 0;

	onMount(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  function handleScroll() {
    scrollPosition = window.scrollY;
  }
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<ul class="collapsed">
			{#each ['Home', 'About', 'Sverdle'] as item, index}
				<li style='--position:{scrollPosition};'>
					<a href={`/${item.toLowerCase()}`}>{item}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="corner">
		<Icon data={refresh} scale="6" />
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		position: fixed;
		width: 100%;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
    DELETE
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		/* height: 3em;  DELETE*/
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		flex-direction: column;
		padding: 0.3em 2em;
		border-radius: 0 0 0.3em 0.3em;
	}

	ul::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		right: 0;
		top: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-right: var(--size) solid var(--color-theme-1);
	}

	.collapsed {
		height: 2em;
		overflow-y: hidden;
	}

	.collapsed li {
    position: relative;
    padding: 0.5em 0;
    transition: top 0.3s ease; /* Add smooth transition effect */
    top: calc( (var(--position) * -0.1px) + 2em );/* Adjust the division factor as needed */
  }

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
