import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, demoUrl, codeUrl }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-gradient-to-br from-[#1a223f] to-[#0c0e19] shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-blue-900">
      <div className="overflow-hidden rounded-xl">
        <img
          className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
          src={bannerImg}
          alt={title}
        />
      </div>
      <h3 className="px-4 pt-4 text-xl md:text-2xl font-extrabold leading-normal text-[#465697]">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
        {main}
      </p>
      <div className="mt-4 px-4 flex gap-4">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#465697] hover:bg-[#3a476e] text-white py-2 px-4 rounded-2xl font-semibold shadow-md hover:scale-105 transition-all duration-300"
        >
          <FaExternalLinkAlt size={18} />
          Demo
        </a>
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#23272f] hover:bg-[#465697] text-white py-2 px-4 rounded-2xl font-semibold shadow-md hover:scale-105 transition-all duration-300"
        >
          <FaGithub size={18} />
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
