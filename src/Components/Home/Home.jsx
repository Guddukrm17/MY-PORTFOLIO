import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 md:py-24 bg-indigo-900">
      {/* Left: Text Card */}
      <div className="bg-indigo-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-6 md:w-2/4">
        <h1 className="text-2xl md:text-6xl font-extrabold flex items-center leading-tight tracking-tighter mb-2 text-white">
          <TextChange />
        </h1>
        <p className="text-base md:text-2xl text-indigo-100 font-medium tracking-tight mb-4">
          I&apos;m a dedicated full stack developer skilled in building robust web
          applications using modern technologies for both frontend and backend.
        </p>
        <a
          href="mailto:guddukrm17@gmail.com"
          className="inline-block w-fit mt-2 md:mt-6 text-white py-2 px-6 text-base md:text-lg font-semibold rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg hover:scale-105 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Contact Guddu Kumar via email"
        >
          Contact Me
        </a>
      </div>
      {/* Right: Avatar */}
      <div className="flex justify-center items-center md:w-2/4 mt-10 md:mt-0">
        <img
          src={avatarImg}
          alt="Guddu Kumar Avatar"
          className="w-40 h-40 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-purple-500 bg-indigo-900/60"
        />
      </div>
    </section>
  );
};

export default Home;
