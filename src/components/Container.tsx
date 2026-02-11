import { Home } from "./Home";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
export const Container = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full overflow-x-hidden">
      <section id="Home" className="min-h-screen w-full flex justify-center items-center py-10">
        <Home />
      </section>
      <section id="About" className="min-h-screen w-full flex justify-center items-center py-10">
        <About />
      </section>
      <section id="Experience" className="min-h-screen w-full flex justify-center items-center py-10">
        <Experience />
      </section>
      <section id="Projects" className="min-h-screen w-full flex justify-center items-center py-10">
        <Projects />
      </section>
    </div>
  );
};
