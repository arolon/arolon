<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaMedium from 'svelte-icons/fa/FaMedium.svelte';
	import { modalOpened } from '$lib/store';
	import { onMount } from 'svelte';

	//Background script 
	let canvas;
	let ctx;
	let dots = [];
	let mouse = { x: 0, y: 0 };

	const numDots = 100;

	onMount(() => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		ctx = canvas.getContext('2d');

		for (let i = 0; i < numDots; i++) {
			dots.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius: 2 + Math.random() * 2,
				dx: Math.random() - 0.5,
				dy: Math.random() - 0.5
			});
		}

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let dot of dots) {
				dot.x += dot.dx;
				dot.y += dot.dy;

				// bounce off edges
				if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
				if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;

				// draw
				ctx.beginPath();
				ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
				ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
				ctx.fill();

				// draw line to mouse if close
				let dist = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);
				if (dist < 100) {
					ctx.beginPath();
					ctx.moveTo(dot.x, dot.y);
					ctx.lineTo(mouse.x, mouse.y);
					ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
					ctx.stroke();
				}
			}

			requestAnimationFrame(animate);
		};

		animate();

		window.addEventListener('mousemove', (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		});

		window.addEventListener('resize', () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});
	});
</script>


<svelte:head>
	<title>Felipe Rolon - Portfolio</title>
</svelte:head>
<main>
	<canvas bind:this={canvas} class="background-canvas"></canvas>
	<h1>Hi!✋ <br /> I'm Felipe a Developer 💻 based in Toronto</h1>
	<div class="icons">
		<div
			role="button"
			tabindex="0"
			on:keypress={() => {
				modalOpened.set(true);
			}}
			on:click={() => {
				modalOpened.set(true);
			}}
		>
			<div class="icon">
				<FaEnvelope />
			</div>
		</div>

		<a
			href="https://github.com/arolon"
			aria-label="GitHub"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaGithub />
			</div>
		</a>
		<a
			href="https://www.linkedin.com/in/alvaro-rolon/"
			aria-label="Linkedin"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaLinkedin />
			</div>
		</a>
	</div>
</main>

<style>
	a {
		color: white;
		text-decoration: none;
	}
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;

		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-weight: 700;
	}

	main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 50px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #ca3c25;
	}

	.background-canvas {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background: #0f0f0f;
}


	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>
