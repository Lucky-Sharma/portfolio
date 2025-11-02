export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-6xl flex gap-3 mb-2 name">
        <label>hi,</label>
        <label className="text-[#64ffda] font-bold;">Lucky</label>
        <label>here.</label>
      </div>
      <div className="text-4xl text-[#8892b0] flex gap-3 justify-center">
        I Create stuff sometimes.
      </div>
      <div className="text-xl max-w-140 mt-2 text-[#5e6985] ">
        I'm a software engineer from Madhya Pradesh, India. I'm fascinated by
        large-scale, high-impact products and wants to contributed to major
        feature launches in industry-leading services as well as apps that have
        100M+ installs.
      </div>
      <a href="mailto:luckysharmab1@gmail.com ">  
        <button className="border-[#64ffda] text-[#64ffda] border-2 rounded-sm p-4 m-3 flex gap-4 fount-extrabold bg-transparent hover:cursor-pointer hover:bg-[#64ffda]/10">
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
    </div>
  );
};
