import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
	{
		title: "Blogging Website",
		main: "A modern blogging platform built with Next.js and component libraries for a seamless writing experience.",
		demoUrl: "#",
		codeUrl: "#",
	},
	{
		title: "YouTube Clone",
		main: "A responsive YouTube clone using Next.js, featuring video streaming and user authentication.",
		demoUrl: "#",
		codeUrl: "#",
	},
	{
		title: "Netflix Clone",
		main: "A Netflix-inspired web app built with Next.js, showcasing movie browsing and streaming UI.",
		demoUrl: "#",
		codeUrl: "#",
	},
	{
		title: "My Awesome Project",
		main: "A brief description of the project goes here.",
		demoUrl: "https://demo-link.com",
		codeUrl: "https://github.com/your-repo",
	},
];

const Projects = () => {
	return (
		<section
			id="Projects"
			className="min-h-screen px-4 py-16 md:px-24 bg-indigo-900"
		>
			<h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mb-10 text-center">
				Projects
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, idx) => (
					<ProjectCard
						key={idx}
						title={project.title}
						main={project.main}
						demoUrl={project.demoUrl}
						codeUrl={project.codeUrl}
						imageUrl={project.imageUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
