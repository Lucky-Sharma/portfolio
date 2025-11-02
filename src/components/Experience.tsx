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
      <div className="h-screen flex justify-start gap-10 mt-10">
        <div className=" relative flex flex-col w-1/3 md:w-90">
          <div
            className={`absolute right-0 w-[2px] h-16 bg-[#56ddc1] transition-transform duration-500 ease-in-out 
    ${currentSelect === 1 ? "translate-y-16" : "translate-y-0"}`}
          />

          <button
            onClick={() => {
              setCurrentSelect(2);
            }}
            className={`text-left text-xl p-10 py-2  cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out ${
              currentSelect == 2 ? "text-[#56ddc1]" : "text-[#8791af]"
            }`}
          >
            Gamma Edge PVT LTD.
          </button>
          <button
            onClick={() => {
              setCurrentSelect(1);
            }}
            className={`text-left text-xl p-10 py-2  cursor-pointer hover:bg-gray-800 transition-all  duration-300 ease-in-out ${
              currentSelect == 1 ? "text-[#56ddc1]" : "text-[#8791af]"
            }`}
          >
            DigiChum PVT LTD.
          </button>
        </div>
        <div className="relative w-full overflow-hidden">
          {data.map((item, key) => {
            return (
              <div
                key={key}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform 
                    ${
                      item.id === currentSelect
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-full"
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
  );
};
