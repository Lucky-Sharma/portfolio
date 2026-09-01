import { useState, useEffect } from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { ScrollReveal } from "./ScrollReveal";
import { Footer } from "./Footer";

const sections = [
  { id: "Home", name: "01. Home" },
  { id: "About", name: "02. About" },
  { id: "Experience", name: "03. Experience" },
  { id: "Projects", name: "04. Projects" },
];

export const Container = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen">
      {/* Floating Scrollytelling Side Indicator (Desktop) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-5 items-end pointer-events-auto">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <span
                className={`text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? "text-[#56ddc1] font-bold translate-x-0 opacity-100"
                    : "text-gray-500 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                }`}
              >
                {sec.name}
              </span>
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-2.5 h-2.5 bg-[#56ddc1]"
                    : "w-2 h-2 bg-gray-600 group-hover:bg-gray-400"
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Main Centered Content Column */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 flex flex-col justify-center items-center">
        <section id="Home" className="min-h-screen w-full flex justify-center items-center py-16">
          <ScrollReveal direction="up" className="w-full">
            <Home />
          </ScrollReveal>
        </section>

        <section id="About" className="min-h-screen w-full flex justify-center items-center py-16">
          <ScrollReveal direction="up" className="w-full">
            <About />
          </ScrollReveal>
        </section>

        <section id="Experience" className="min-h-screen w-full flex justify-center items-center py-16">
          <ScrollReveal direction="up" className="w-full">
            <Experience />
          </ScrollReveal>
        </section>

        <section id="Projects" className="w-full flex justify-center items-start py-20">
          <ScrollReveal direction="up" className="w-full">
            <Projects />
          </ScrollReveal>
        </section>
      </div>

      {/* Footer — full width */}
      <Footer />
    </div>
  );
};
