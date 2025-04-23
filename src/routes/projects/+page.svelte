<script lang="ts">
	// Import the project data
	import projects from '$lib/Projects';

	// Optional: Define a type for better type safety if you haven't already
	// interface Project {
	//  title: string;
	//  technologies: string[];
	//  description: string;
	//  url: string;
	// }
	// const projectList: Project[] = projects;
</script>

<svelte:head>
	<title>Felipe Rolon — Projects</title>
	<meta name="description" content="Showcase of projects developed by Felipe Rolon, including web applications and integrations." />
</svelte:head>

<div class="container">
	<main>
		<h1>My Projects</h1>
		<p class="intro-paragraph">
			Here are some of the projects I've worked on, showcasing my skills in web development, cloud integration, and problem-solving.
		</p>

		<div class="projects-grid">
			{#each projects as project (project.title)}
				<article class="project-card">
					<header>
						<h3 class="project-title">{project.title}</h3>
						{#if project.url}
							<a href={project.url} target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Link to {project.title}">
								<!-- Simple link icon (replace with SVG or icon font if preferred) -->
								🔗
							</a>
						{/if}
					</header>
					<p class="project-description">{project.description}</p>
					<footer>
						<ul class="technology-list">
							{#each project.technologies as tech (tech)}
								<li class="technology-item">{tech}</li>
							{/each}
						</ul>
					</footer>
				</article>
			{/each}
		</div>
	</main>
</div>

<style>
	/* --- General Container & Main (Similar to About page) --- */
	.container {
		max-width: 1100px; /* Slightly wider for project cards */
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
		margin: 0 0 1rem 0; /* Adjusted margin */
		font-size: clamp(2rem, 5vw, 2.5rem);
		color: var(--text-color, #eee);
		border-bottom: 2px solid var(--accent-color, #4a90e2);
		padding-bottom: 0.5rem;
		display: inline-block;
	}

	.intro-paragraph {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 3rem;
		color: var(--text-secondary, #ccc);
		max-width: 75ch; /* Limit line length for readability */
	}

	/* --- Projects Grid Styling --- */
	.projects-grid {
		display: grid;
		/* Responsive columns: 1 on small, 2 on medium, potentially 3 on large */
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem; /* Gap between project cards */
	}

	/* --- Project Card Styling --- */
	.project-card {
		background-color: var(--card-bg, #1a1a1a);
		border: 1px solid var(--border-color, #333);
		border-radius: 8px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column; /* Stack header, description, footer */
		justify-content: space-between; /* Push footer down */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
	}

	.project-card header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start; /* Align items to the top */
		margin-bottom: 1rem;
	}

	.project-title {
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--accent-color, #4a90e2);
		margin: 0;
		/* Allow title to wrap if needed, but give space for link */
		padding-right: 0.5rem;
	}

	.project-link {
		font-size: 1.5rem; /* Make link icon larger */
		color: var(--text-secondary, #ccc);
		text-decoration: none;
		transition: color 0.2s ease;
		flex-shrink: 0; /* Prevent link from shrinking */
	}

	.project-link:hover {
		color: var(--accent-color, #4a90e2);
	}

	.project-description {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-secondary, #ccc);
		margin-bottom: 1.5rem; /* Space before technologies */
		flex-grow: 1; /* Allow description to take available space */
	}

	.project-card footer {
		margin-top: auto; /* Ensure footer stays at the bottom */
	}

	/* --- Technology List Styling (Similar to Skills) --- */
	.technology-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem; /* Slightly smaller gap for tech tags */
	}

	.technology-item {
		background-color: var(--tag-bg, #333);
		color: var(--tag-text, #eee);
		padding: 0.25rem 0.75rem;
		border-radius: 15px;
		font-size: 0.85rem;
		white-space: nowrap;
	}

	/* --- Responsive Adjustments --- */
	@media (max-width: 768px) {
		.projects-grid {
			/* Adjust minmax if needed for tablets */
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		}
	}

	@media (max-width: 480px) {
		.projects-grid {
			grid-template-columns: 1fr; /* Stack cards on small mobile */
		}
		.intro-paragraph {
			font-size: 1rem;
		}
		h1 {
			font-size: 2rem;
		}
	}
</style>
