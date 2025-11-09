import { CompanyDetails } from "./CompanyDetails";
import { useState } from "react";
interface dataType {
  id: number;
  companyPosition: string;
  companyName: string;
  dates: string;
  details: string[];
}
const data: dataType[] = [
  {
    id: 1,
    companyPosition: "Software Engineer Intern",
    companyName: "DigiChum",
    dates: "Jan 2025 - Mar 2025",
    details: [
      "Designed responsive frontend interfaces using modern web technologies (e.g., React, Tailwind CSS) to ensure cross-device compatibility",
      "Developed and integrated RESTful APIs to handle data exchange between frontend and backend efficiently.",
      "Collaborated closely with backend services to achieve seamless integration and consistent data flow.",
    ],
  },
  {
    id: 2,
    companyPosition: "Associate Software Engineer",
    companyName: "Gamma Edge PVT LTD.",
    dates: "June 2025 - Present",
    details: [
      "Integrated Redux for efficient and scalable state management across multiple components.",
      "Containerized MERN applications using Docker, ensuring consistent environments for development and deployment.",
      "Deployed Docker containers on AWS EC2 instances for scalable cloud hosting.",
      "Managed and stored Docker images securely using Amazon Elastic Container Registry (ECR).",
    ],
  },
];

export const Experience = () => {
  const [currentSelect, setCurrentSelect] = useState<number>(1);

  return (
    <div className="h-full w-full">
      <div className="flex items-center w-full pb-4">
        <div className="font-bold text-4xl text-[#c6d0f0]">/experience</div>
        <div className="flex-1 h-[1px] bg-gray-600 ml-3"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-start gap-6 sm:gap-10 mt-6 sm:mt-10 min-h-[500px]">
        <div className="relative flex flex-col w-full md:w-1/3">
          <div
            className={`absolute right-0 h-12 sm:h-16 w-0.5 bg-[#56ddc1] transition-transform duration-300 ease-in-out 
              ${currentSelect === 1 ? "translate-y-14" : "translate-y-1"}`}
          />

          <button
            onClick={() => setCurrentSelect(2)}
            className={`text-left text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 my-1 rounded-md cursor-pointer 
              hover:bg-gray-800/50 transition-all duration-300 ease-in-out 
              ${
                currentSelect === 2
                  ? "text-[#56ddc1] bg-gray-800/40"
                  : "text-[#8791af]"
              }`}
          >
            Gamma Edge PVT LTD.
          </button>
          <button
            onClick={() => setCurrentSelect(1)}
            className={`text-left text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 my-1 rounded-md cursor-pointer 
              hover:bg-gray-800/50 transition-all duration-300 ease-in-out 
              ${
                currentSelect === 1
                  ? "text-[#56ddc1] bg-gray-800/40"
                  : "text-[#8791af]"
              }`}
          >
            DigiChum PVT LTD.
          </button>
        </div>

        <div className="relative w-full mt-4 md:mt-0">
          <div className="relative w-full min-h-[300px]">
            {data.map((item) => {
              const isActive = item.id === currentSelect;

              return (
                <div
                  key={item.id}
                  className={`absolute w-full transition-all duration-300 ease-in-out transform
                    ${
                      isActive
                        ? "opacity-100 translate-x-0 visible"
                        : "opacity-0 -translate-x-4 invisible"
                    }`}
                >
                  <CompanyDetails
                    companyPosition={item.companyPosition}
                    companyName={item.companyName}
                    dates={item.dates}
                    details={item.details}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
