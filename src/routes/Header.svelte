<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/avatarFRCircle.png';
	import Icon from 'svelte-awesome';
	import lightbulb from 'svelte-awesome/icons/lightbulbO';
	import moon from 'svelte-awesome/icons/moonO';
	import language from 'svelte-awesome/icons/language';
	import linkedin from 'svelte-awesome/icons/linkedin';
	import github from 'svelte-awesome/icons/github';
	import { onMount } from 'svelte';

	import { t, locale, locales } from '$lib/text/i18n';

	export let scrollPosition = 0;
	export let scrollPosProportion = 0;
	let color = '#465362';
	let theme = false;
	var currentLanguage = 'en'
	let moonElement, lightbulbElement, headerElement;
	let collapsedVar = true;

	

	const handleTheme = () => {
		console.log(theme);
		if (theme === false) {
			theme = true;
			document.body.classList.add('dark-mode');
			moonElement.style.display = 'none';
			lightbulbElement.style.display = 'block';
			color = '#70b1e3';
		} else {
			theme = false;
			document.body.classList.remove('dark-mode');
			moonElement.style.display = 'block';
			lightbulbElement.style.display = 'none';
			color = '#465362';
		}
	};

	const handleLanguage = () => {
		console.log(currentLanguage);
		console.log($locale)
		if (currentLanguage === 'en') {
			currentLanguage = 'es';
			$locale = 'es';
		} else {
			currentLanguage = 'en';
			$locale = 'en';
		}
	};

	const handleScroll = () => {
		scrollPosition = window.scrollY;
		scrollPosProportion = scrollPosition * 944.7 / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
	};

	const handleHover = () => {
		headerElement.classList.remove('collapsed');
	}

	const handleHoverOut = () => {
		headerElement.classList.add('collapsed')
	}

	const heightAnimation = () => {

	}

	onMount(() => {
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header bind:this={headerElement} class="collapsed">
	<div class="corner">
		<a href="/">
			<img src={logo} alt="FelipeRolonLogo" />
		</a>
	</div>

	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<nav on:mouseover={handleHover} on:mouseleave={handleHoverOut}>
		<ul class="" style="--position:{scrollPosition}; --scrollPosProportion:{scrollPosProportion};">
			{#each $t('header.sections') as item, index}
				<li>
					<a href={`/${item.toLowerCase()}`}>{item}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="corner-right">
		<a href="https://www.linkedin.com/in/alvaro-rolon/" target="_blank">
			<Icon data={linkedin} scale="2" {color} label="Linkedin" />
		</a>
		<a href="https://github.com/arolon" target="_blank">
			<Icon data={github} scale="2" {color} />
		</a>
		<a href="#" on:click={handleTheme} bind:this={lightbulbElement} style="display: none;">
			<Icon data={lightbulb} scale="2" {color} />
		</a>
		<a href="#" on:click={handleTheme} bind:this={moonElement}>
			<Icon data={moon} scale="2" {color} />
		</a>
		<a href="#" on:click={handleLanguage}>
			<Icon data={language} scale="2" {color} />
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
		width: 5em;
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

	.corner-right {
		display: flex;
		justify-content: center;
		padding-right: 0.5em;
		padding-top: 0.5em;
	}
	.corner-right a {
		padding: 0 0.1em;
		width: 2em;
		height: 2em;
		text-align: center;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.2);
		height: auto;
    overflow-y: hidden;
		transition: all 2.5s ease;
	}
	.collapsed nav {
		height: 2em;
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
		top: calc((var(--scrollPosProportion) * 100% / 944.7) - var(--size));
		border: var(--size) solid transparent;
		border-right: var(--size) solid var(--color-theme-1);
	}

	.collapsed ul::before {
		top: calc(50% - var(--size));
	}

	.collapsed {
		overflow-y: hidden;
	}
	ul li {
		padding: 0.5em 0;
		transition: top 0.3s ease;
	}

	.collapsed li {
		position: relative;
		top: calc((var(--scrollPosProportion) * 	-0.1px ) + 3em);
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
		transition: all 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
