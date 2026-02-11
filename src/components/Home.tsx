import { NoiseBackground } from "./ui/NoiseBackground";

export const Home = () => {
  return (
    <div className="text-4xl sm:text-6xl mb-2 text-center flex flex-col items-center">
      <div className="name inline-block text-3xl sm:text-6xl whitespace-nowrap">
        hi,<span className="inline-block w-1 sm:w-2"></span>
        <span className="text-[#64ffda] font-bold">Lucky</span>
        <span className="inline-block w-1 sm:w-2"></span>
        here.
      </div>
      <div className="text-base sm:text-xl text-center flex flex-col items-center">
        <div className="text-2xl sm:text-4xl text-[#8892b0] flex flex-wrap gap-2 justify-center">
          I Create stuff sometimes.
        </div>
        <div className="text-base sm:text-xl max-w-[35rem] mt-2 text-[#5e6985] leading-relaxed px-2">
          I'm a software engineer from Madhya Pradesh, India. I love building
          things that scale — products and features that reach millions of
          people and make a real impact. I'm always excited to work on apps that
          grow fast and shape how people interact with technology.
        </div>
        <div className="mt-8">
          <NoiseBackground
            containerClassName="w-fit p-2 rounded-full mx-auto"
            gradientColors={[
              "rgb(100, 255, 218)", // Teal
              "rgb(10, 25, 47)",    // Dark Navy
              "rgb(100, 255, 218)", // Teal
            ]}
          >
            <a href="mailto:luckysharmab1@gmail.com">
              <button className="h-full w-full cursor-pointer rounded-full bg-gradient-to-br from-[#172a45] to-[#0a192f] px-6 py-3 text-[#64ffda] font-bold shadow-[inset_0_1px_0_0_rgba(100,255,218,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border border-[#233554] hover:shadow-[inset_0_1px_0_0_rgba(100,255,218,0.2),_0_6px_15px_rgba(100,255,218,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                <span>Say hi!</span>
              </button>
            </a>
          </NoiseBackground>
        </div>
      </div>
    </div>
  );
};
