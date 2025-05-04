<script lang="ts">
	// Make sure this path is correct for your project structure
	import skills from '$lib/Skills';

	// Prepare skills data for easier iteration if needed, though Object.entries works fine.
	const skillEntries = Object.entries(skills);

	// Function to format section titles (e.g., 'programming' -> 'Programming')
	function formatSectionTitle(title: string): string {
		if (!title) return '';
		return title.charAt(0).toUpperCase() + title.slice(1);
	}
</script>

<svelte:head>
	<!-- Update the title -->
	<title>Felipe Rolon — About</title>
	<meta name="description" content="About Felipe Rolon, a Full-Stack Developer and Cyber Security Specialist with experience in AWS, JavaScript, Python, and more." />
</svelte:head>

<div class="container">
	<main>
		<h1>About Me</h1>
		<!-- Update the paragraph with your summary -->
		<p class="intro-paragraph">
			I'm Felipe Rolon, a versatile Full-Stack Developer and Cyber Security Specialist based in Toronto, Canada.
			With hands-on experience in cloud computing (especially AWS), application integration, and the full software development lifecycle,
			I enjoy translating user needs into robust technical solutions. My expertise spans Python, JavaScript (including Node.js, React, Svelte),
			and cloud infrastructure, always with a focus on security and performance.
			I'm passionate about problem-solving, continuously learning, and currently expanding my skills into game development with Unity and C#.
		</p>

		<h2>Skills</h2>
		<!-- New structure and styling for skills -->
		<div class="skills-grid">
			{#each skillEntries as [sectionKey, technologies]}
				<section class="skill-category">
					<h3>{formatSectionTitle(sectionKey)}</h3>
					<ul class="skill-list">
						{#each technologies as technology (technology)}
							<li class="skill-item">{technology}</li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
	</main>
</div>

<style>
	.container {
		max-width: 900px; /* Keep max-width */
		margin: 0 auto; /* Center the container */
		padding: 2rem 1rem; /* Add some padding */
		display: flex; /* Using flex mainly for potential future centering needs */
		justify-content: center;
	}

	main {
		width: 100%; /* Use full width of container */
		min-height: 500px;
		text-align: left;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 1.5rem 0; /* Adjusted margin */
		font-size: clamp(2rem, 5vw, 2.5rem); /* Responsive font size */
		text-align: start;
		color: var(--text-color, #eee); /* Use CSS variables if you have them */
		border-bottom: 2px solid var(--accent-color, #4a90e2); /* Add an accent line */
		padding-bottom: 0.5rem;
		display: inline-block; /* Make border only as wide as text */
	}

	.intro-paragraph {
		font-size: 1.1rem;
		line-height: 1.7;
		margin-bottom: 3rem; /* Space before skills */
		color: var(--text-secondary, #ccc);
	}

	h2 {
		margin-top: 3rem; /* Consistent spacing */
		margin-bottom: 1.5rem;
		font-size: clamp(1.5rem, 4vw, 1.8rem);
		color: var(--text-color, #eee);
		border-bottom: 1px solid var(--border-color, #555);
		padding-bottom: 0.3rem;
	}

	/* --- Skills Section Styling --- */
	.skills-grid {
		display: grid;
		/* Adjust columns based on screen size */
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem; /* Gap between skill category sections */
	}

	.skill-category {
		background-color: var(--card-bg, #1a1a1a); /* Slightly different background for sections */
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		border: 1px solid var(--border-color, #333);
	}

	.skill-category h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-top: 0;
		margin-bottom: 1rem;
		color: var(--accent-color, #4a90e2); /* Use accent color for category titles */
	}

	.skill-list {
		list-style: none; /* Remove default bullet points */
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap; /* Allow skills to wrap */
		gap: 0.75rem; /* Gap between skill items */
	}

	.skill-item {
		background-color: var(--tag-bg, #333); /* Background for skill tags */
		color: var(--tag-text, #eee);
		padding: 0.3rem 0.8rem;
		border-radius: 15px; /* Pill shape */
		font-size: 0.9rem;
		white-space: nowrap; /* Prevent wrapping within a tag */
		transition: transform 0.2s ease-in-out;
	}

	.skill-item:hover {
		transform: translateY(-2px); /* Subtle hover effect */
		background-color: var(--accent-color, #4a90e2);
		color: var(--button-text-color, #fff);
	}

	/* --- Responsive Adjustments --- */
	@media (max-width: 600px) {
		.skills-grid {
			grid-template-columns: 1fr; /* Stack categories on small screens */
		}

		h1 {
			font-size: 2rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.intro-paragraph {
			font-size: 1rem;
		}
	}
</style>
