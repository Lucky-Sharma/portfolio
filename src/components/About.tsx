import pic from "../assets/pic.jpg";
export const About = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-4">
      <div className="flex items-center w-full pb-4">
        <div className="font-bold text-4xl text-[#c6d0f0]">/ about me</div>
        <div className="flex-1 h-[1px] bg-gray-600 ml-3"></div>
      </div>
      <div className="h-screen flex justify-between">
        <div className="max-w-xl flex flex-col text-[#8791af] text-justify">
          <p className="flex text-lg sm:text-xl">
            I am currently a Software Development Engineer at Gamma Edge,
            working in the Software development sector under MERN team.
            Previously, I have worked as a Software Engineer Intern at DigiChum,
            where I contributed to developing web applications using MERN stack.
            I have a strong foundation in computer science principles and a
            passion for building efficient and scalable software solutions.
          </p>
          <p className="mt-4 text-lg sm:text-xl">
            Here are a some technologies I have been working with:
          </p>
          <div className="grid grid-cols-2 text-lg sm:text-xl">
            <div>
              <span className="p-1 m-3 text-[#56ddc1]">▹</span>
              <span>JavaScript</span>
            </div>
            <div>
              <span className="p-1 m-3 text-[#56ddc1]">▹</span>
              <span>React.js</span>
            </div>
            <div>
              <span className="p-1 m-3 text-[#56ddc1]">▹</span>
              <span>TypeScript</span>
            </div>
            <div>
              <span className="p-1 m-3 text-[#56ddc1]">▹</span>
              <span>Tailwind css</span>
            </div>
            <div>
              <span className="p-1 m-3 text-[#56ddc1]">▹</span>
              <span>Node.js</span>
            </div>
            <div>
              <span className="p-1 m-3 text-[#56ddc1]">▹</span>
              <span>Express.js</span>
            </div>
            <div>
              <span className="p-1 m-3 text-[#56ddc1]">▹</span>
              <span>Postgresql</span>
            </div>
            <div>
              <span className="p-1 m-3 text-[#56ddc1]">▹</span>
              <span>AWS</span>
              <span className="opacity-0 sm: opacity-100">(S3,EC2,ECR,cloudfront)</span>
            </div>
          </div>
          <span className="mt-5 text-lg sm:text-xl">
            Outside of work, I'm interested in following the developments of
            science , technologies and world affairs. I also enjoy reading.
          </span>
        </div>
        <div className="hidden sm:block m-7">
          <img
            src={pic}
            alt="profile pic"
            className="w-90 h-90 rounded-lg object-cover transition duration-700 easy-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
