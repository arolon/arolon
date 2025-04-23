<script>
	import { Email } from '$lib/Constants';
</script>

<svelte:head>
	<title>Privacy policy</title>
</svelte:head>

<div class="container">
	<main>
		<h1>Privacy Policy</h1>
		<p>Last updated: November 01, 2021</p>
		<ul>
			<li>By email: {Email}</li>
		</ul>
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 1em;
		display: flex;
		justify-content: center;
	}

	main {
		min-height: 500px;
		text-align: center;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}
</style>
