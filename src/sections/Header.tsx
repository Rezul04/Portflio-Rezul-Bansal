"use client";
import Link from "next/link";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex  justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex items-center gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop:blur">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="nav-item"
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
          className="nav-item"
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className="nav-item"
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className="nav-item"
        >
          Contact
        </a>

        <Link href="/all-projects" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          All Projects
        </Link>
      </nav>
    </div>
  );
};
