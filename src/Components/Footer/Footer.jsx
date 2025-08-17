import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:guddukrm17@gmail.com" className="hover:underline">
            guddukrm17@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a
            href="https://www.linkedin.com/in/guddu-kumar-3b3660247/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://www.linkedin.com/in/guddu-kumar-3b3660247/
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a
            href="https://github.com/Guddukrm17"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://github.com/Guddukrm17
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
