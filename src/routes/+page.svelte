<script>
	//import { modalOpened } from '$lib/store';
	import projects from '$lib/Projects';
	import logo from '$lib/images/avatarFRCircle.png';

	import Icon from 'svelte-awesome';
	import envelope from 'svelte-awesome/icons/envelope';
	import linkedin from 'svelte-awesome/icons/linkedin';
	import github from 'svelte-awesome/icons/github';
</script>

<svelte:head>
	<title>Felipe Rolon - Portfolio</title>
	<meta name="description" content="Felipe Rolon - Portfolio" />
</svelte:head>

<div class="main">
	<h1>Hi!✋ <br /> I'm Felipe a Front-End Developer 💻 based in Toronto 🍁</h1>
</div>
<div class="section about">
	<!-- {#each about as aboutText}
	<div class="square">
		<p>
			<b>Crafting exceptional web experiences is my passion.</b> As a full-stack developer with a keen eye for detail and a focus on clean, performant code, I deliver high-impact solutions that drive results.
		</p>
	</div>
	{/each} -->
	
	
	<p>
	<b>My expertise lies in bridging the gap between design and functionality.</b> I leverage my proficiency in technologies like React, Node.js, and AWS to seamlessly translate client visions into user-centric websites and applications.
	</p>
	<p>
		<b>But my skillset extends beyond the code.</b> I'm a strong communicator and team player, adept at collaborating with cross-functional teams to ensure projects stay on track and exceed expectations. My cybersecurity background further enhances my problem-solving abilities and commitment to secure, reliable solutions.
	</p>
	<p>
		<b>I'm constantly evolving.</b> I actively seek out new technologies and challenges to stay ahead of the curve. This dedication to continuous learning ensures I can deliver the most innovative and effective solutions for your business needs.
	</p>
</div>
<div class="section">
	<div class="projectContainer">
		<div class="projects">
			<h1>Projects</h1>
			<p class="note">
				Note: most of my projects are under NDA so I am unable to share those projects. If there is
				anything you would like to see further, please feel free to contact me.
			</p>
			{#each projects as project}
				<div class="project">
					<div class="header">
						<h2>
							{project.title}
						</h2>
						<div class="techsContainer">
							Technologies:
							<div class="techs">
								{#each project.technologies as tech}
									<div>{tech}</div>
								{/each}
							</div>
						</div>
					</div>
					<p>
						{project.description}
					</p>
					<a href={project.url} target="_blank" rel="noreferrer">
						<div class="button">Project url =></div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.projectContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	.note {
		opacity: 0.5;
		margin: 0;
		max-width: 900px;
		text-align: left;
	}

	.projectContainer a {
		text-decoration: none;
	}

	.projectContainer .projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	.projectContainer h1 {
		font-weight: 700;
		text-align: start;
	}

	.projectContainer h2 {
		display: flex;
		margin: 0;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: var(--color-bg-0);
		padding: 2rem;
		width: 100%;
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.project p {
		font-weight: 100;
		color: #708090;
	}

	.projects {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.techs > div {
		margin: 0 0 0 10px;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border: 2px solid white;
		padding: 10px;
	}

	.about {
		width: 70%;
		margin: auto;
		font-size: large;
	}

	.about .square {
    background: transparent;
    background-image: url(/src/lib/images/dev_Img1.jpg);
    background-image: url(/src/lib/images/dev_Img1.jpg), linear-gradient(to right, black 20%, grey 60%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    padding: 20px;
		align-content: center;
		border-radius: 5px;
	}



	.about p {
		width: 60%;
		color: var(--color-text-alt);
	}

	.about p b {
		letter-spacing: 4px;
    font-style: italic;
		font-size: larger;
	}

	@media (min-width: 900px) {
		.projectContainer {
			padding: 0;
		}
		.projects > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.projects {
			grid-template-columns: 1fr;
		}

		.projects .project {
			min-height: 200px;
		}
		.button {
			max-width: 200px;
		}
	}

	@media (min-width: 600px) {
		.projects {
			grid-template-columns: 1fr;
		}
	}

	div.main {
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

	.main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
	}

	@media (min-width: 900px) {
		.main > h1 {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		.main {
			max-width: none;
		}
	}
</style>
