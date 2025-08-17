import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaBolt } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const skills = [
	{ icon: <FaHtml5 color="#E34F26" size={40} />, name: "HTML5" },
	{ icon: <FaCss3 color="#1572B6" size={40} />, name: "CSS3" },
	{ icon: <FaReact color="#61DAFB" size={40} />, name: "React" },
	{ icon: <FaJs color="#F7DF1E" size={40} />, name: "JavaScript" },
	{ icon: <FaFigma color="#F24E1E" size={40} />, name: "Figma" },
	{ icon: <SiMongodb color="#47A248" size={40} />, name: "MongoDB" },
	{ icon: <SiRedis color="#FF4438" size={40} />, name: "Redis" },
];

const Experience = () => {
	return (
		<section
			id="Experience"
			className="min-h-screen px-4 py-16 md:px-24 bg-indigo-900"
		>
			<h1 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#cfd8ff] via-[#465697] to-[#23272f] flex items-center gap-3 relative">
				<FaBolt className="text-yellow-400 animate-bounce" size={32} />
				Experience
				<span className="absolute left-8 md:left-12 bottom-[-10px] h-2 w-1/2 bg-gradient-to-r from-[#cfd8ff] via-[#465697] to-[#23272f] rounded-full blur-sm opacity-80"></span>
			</h1>
			<div className="flex flex-col md:flex-row gap-10 items-start justify-between">
				{/* Skills Card */}
				<div className="bg-gradient-to-br from-[#23272f] to-[#465697] rounded-2xl shadow-xl p-8 flex flex-wrap gap-8 justify-center md:w-2/5">
					{skills.map((skill, idx) => (
						<div
							key={idx}
							className="flex flex-col items-center gap-2 group transition-transform duration-300 hover:scale-110"
						>
							<span className="p-4 bg-zinc-950 rounded-2xl shadow-lg group-hover:bg-[#465697] transition-colors duration-300">
								{skill.icon}
							</span>
							<span className="text-xs md:text-sm text-[#cfd8ff] font-semibold group-hover:text-white">
								{skill.name}
							</span>
						</div>
					))}
				</div>
				{/* Experience Card */}
				<div className="bg-gradient-to-br from-[#465697] to-[#23272f] rounded-2xl shadow-xl p-8 flex flex-col gap-4 md:w-3/5">
					<div className="flex items-center gap-6 mb-2">
						<FaGoogle color="#4285F4" size={40} />
						<div>
							<h2 className="text-xl md:text-2xl font-bold text-white">
								Full Stack Developer, CALIBER IDX
							</h2>
							<p className="text-sm text-[#cfd8ff] font-light">
								May 2025 - July 2025
							</p>
						</div>
					</div>
					<ul className="list-disc ml-8 text-white text-sm md:text-base font-normal space-y-2">
						<li>Developed and maintained modern web applications.</li>
						<li>
							Collaborated with cross-functional teams to deliver scalable
							solutions.
						</li>
						<li>Implemented responsive UI and optimized backend performance.</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Experience;
