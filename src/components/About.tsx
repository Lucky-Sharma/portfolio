import pic from "../assets/pic.jpg";
export const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 px-4 sm:px-10">
      <div className="flex items-center w-full pb-4">
        <div className="font-bold text-3xl sm:text-4xl text-[#c6d0f0] whitespace-nowrap">/ about me</div>
        <div className="flex-1 h-[1px] bg-gray-600 ml-3"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        <div className="max-w-xl flex flex-col text-[#8791af] text-justify">
          <p className="flex text-base sm:text-lg md:text-xl">
            I am currently a Software Development Engineer at Gamma Edge,
            working in the Software development sector under MERN team.
            Previously, I have worked as a Software Engineer Intern at DigiChum,
            where I contributed to developing web applications using MERN stack.
            I have a strong foundation in computer science principles and a
            passion for building efficient and scalable software solutions.
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Here are a some technologies I have been working with:
          </p>
          <div className="grid grid-cols-2 text-base sm:text-lg md:text-xl gap-2 mt-2">
            <div>
              <span className="p-1 mr-2 text-[#56ddc1]">▹</span>
              <span>JavaScript</span>
            </div>
            <div>
              <span className="p-1 mr-2 text-[#56ddc1]">▹</span>
              <span>React.js</span>
            </div>
            <div>
              <span className="p-1 mr-2 text-[#56ddc1]">▹</span>
              <span>TypeScript</span>
            </div>
            <div>
              <span className="p-1 mr-2 text-[#56ddc1]">▹</span>
              <span>Tailwind css</span>
            </div>
            <div>
              <span className="p-1 mr-2 text-[#56ddc1]">▹</span>
              <span>Node.js</span>
            </div>
            <div>
              <span className="p-1 mr-2 text-[#56ddc1]">▹</span>
              <span>Express.js</span>
            </div>
            <div>
              <span className="p-1 mr-2 text-[#56ddc1]">▹</span>
              <span>Postgresql</span>
            </div>
            <div className="flex items-center">
              <span className="p-1 mr-2 text-[#56ddc1]">▹</span>
              <span>AWS</span>
              <span className="opacity-70 text-sm ml-1 hidden sm:inline">(S3,EC2,ECR,cloudfront)</span>
            </div>
          </div>
          <span className="mt-5 text-base sm:text-lg md:text-xl">
            Outside of work, I'm interested in following the developments of
            science , technologies and world affairs. I also enjoy reading.
          </span>
        </div>
        <div className="hidden lg:block m-4 lg:m-7">
          <img
            src={pic}
            alt="profile pic"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-90 lg:h-90 rounded-lg object-cover transition duration-700 easy-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
