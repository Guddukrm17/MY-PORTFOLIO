import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const GITHUB_USERNAME = "guddukrm17";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
			.then((res) => res.json())
			.then((data) => {
				const filtered = data
					.filter((repo) => !repo.fork)
					.map((repo) => ({
						title: repo.name,
						main: repo.description || "No description provided.",
						demoUrl: repo.homepage || repo.html_url,
						codeUrl: repo.html_url,
					}));
				setProjects(filtered);
			});
	}, []);

	return (
		<section
			id="Projects"
			className="min-h-screen w-full px-2 sm:px-4 md:px-8 lg:px-24 py-8 sm:py-12 md:py-16 bg-indigo-900 flex flex-col items-center"
		>
			<h1 className="w-full text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 sm:mb-10 text-center">
				Projects
			</h1>
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
				{projects.map((project, idx) => (
					<ProjectCard
						key={idx}
						title={project.title}
						main={project.main}
						demoUrl={project.demoUrl}
						codeUrl={project.codeUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
