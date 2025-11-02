import { Home } from "./Home";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
export const Container = () => {
  return (
    <div className="flex flex-col justify-center items-centere">
      <section id="Home" className="min-h-screen flex justify-center items-center">
        <Home />
      </section>
      <section id="About" className="min-h-screen flex justify-center items-center">
        <About />
      </section>
      <section id="Experience" className="min-h-screen flex justify-center items-center">
        <Experience />
      </section>
      <section id="Projects" className="min-h-screen flex justify-center items-center">
        <Projects />
      </section>
    </div>
  );
};
