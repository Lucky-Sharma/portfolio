import pic from "../assets/pic.jpg";
export const About = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center w-full pb-4">
        <div className="font-bold text-3xl sm:text-4xl text-[#c6d0f0] whitespace-nowrap">/ about me</div>
        <div className="flex-1 h-[1px] bg-gray-600 ml-3"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        <div className="max-w-xl flex flex-col text-[#8791af] text-justify">
          <p className="flex text-base sm:text-lg md:text-xl">
            I am a Full Stack Developer with experience building scalable and efficient web applications using modern technologies such as React, Node.js, and TypeScript. I have a strong foundation in computer science principles, backend development, RESTful APIs, cloud deployments, and system performance optimization. I enjoy designing reliable software solutions, solving complex technical problems, and continuously exploring new technologies to build impactful and scalable products.

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
        <div className="w-full lg:w-auto flex justify-center lg:block my-4 lg:my-0">
          <img
            src={pic}
            alt="profile pic"
            className="w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl object-cover object-top border border-gray-700/80 shadow-2xl hover:border-[#56ddc1]/50 transition duration-500 ease-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
