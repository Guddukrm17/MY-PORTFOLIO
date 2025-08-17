import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { FaFileAlt } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#About" },
  { name: "Experience", href: "#Experience" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Footer" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-indigo-900 border-b border-indigo-700 shadow-xl px-6 md:px-20 py-4 flex items-center justify-between transition-all duration-300">
      {/* Logo */}
      <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
        Guddu<span className="font-black text-indigo-200">Portfolio</span>
      </span>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 items-center font-semibold">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-indigo-100 px-3 py-1 rounded-xl transition-all duration-200
    hover:text-white hover:bg-indigo-700 hover:scale-105 hover:shadow-lg"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/GudduResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-700 text-white px-5 py-2 rounded-2xl font-bold shadow-lg border border-indigo-300
    transition-all duration-200 hover:bg-indigo-800 hover:scale-105 hover:shadow-xl"
          >
            <FaFileAlt className="text-indigo-200" />
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          <RiCloseLine size={32} className="transition-all duration-300" />
        ) : (
          <RiMenu2Line size={32} className="transition-all duration-300" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-indigo-900 backdrop-blur-lg shadow-2xl z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden flex flex-col pt-24 gap-8 border-l border-indigo-700`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <RiCloseLine size={32} />
        </button>
        <ul className="flex flex-col gap-6 items-center font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-indigo-100 px-3 py-2 rounded-xl text-xl transition-all duration-200
    hover:text-white hover:bg-indigo-700 hover:scale-105 hover:shadow-lg"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/GudduResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-700 text-white px-5 py-2 rounded-2xl font-bold shadow-lg border border-indigo-300 text-xl
    transition-all duration-200 hover:bg-indigo-800 hover:scale-105 hover:shadow-xl"
              onClick={() => setMenuOpen(false)}
            >
              <FaFileAlt className="text-indigo-200" />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
