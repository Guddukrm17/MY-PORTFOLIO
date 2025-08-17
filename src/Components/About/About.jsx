import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="min-h-[60vh] w-full flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-20 bg-indigo-900"
    >
      <div className="flex flex-col items-center md:items-start md:w-1/3 bg-white/10 rounded-2xl shadow-xl p-8 mb-8 md:mb-0 md:mr-12">
        <img
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-indigo-400 shadow-lg mb-6"
          src={AboutImg}
          alt="Guddu Kumar"
        />
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center md:text-left">
          Guddu Kumar
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-indigo-200 mb-4 text-center md:text-left">
          Full Stack Developer
        </h3>
      </div>
      <div className="md:w-2/3 bg-white/10 rounded-2xl shadow-xl p-8">
        <div className="flex gap-3 items-start mb-4">
          <IoArrowForward size={32} className="text-indigo-200 mt-1" />
          <span>
            <p className="text-md md:text-lg text-white leading-relaxed">
              Hey there! I’m a passionate Full Stack Developer who loves turning
              ideas into interactive, scalable web experiences. My toolkit includes{" "}
              <span className="font-semibold text-indigo-200">React</span>,{" "}
              <span className="font-semibold text-indigo-200">Tailwind CSS</span>,{" "}
              <span className="font-semibold text-indigo-200">Node.js</span>, and{" "}
              <span className="font-semibold text-indigo-200">Express</span>, plus
              database skills in{" "}
              <span className="font-semibold text-indigo-200">MongoDB</span> and{" "}
              <span className="font-semibold text-indigo-200">MySQL</span>.
              <br />
              <br />
              I’ve built cool projects like{" "}
              <span className="font-semibold text-indigo-200">TicketMate</span>{" "}
              (railway ticket transfer system) and an{" "}
              <span className="font-semibold text-indigo-200">
                IoT-based Gas Leak Detector
              </span>{" "}
              using Machine Learning. I’m always learning, collaborating, and
              pushing boundaries to create awesome digital solutions.
              <br />
              <br />
              Let’s connect and build something amazing together!
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
