import { CompanyDetails } from "./CompanyDetails";
import { useState, useRef, useEffect } from "react";
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
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  });

  useEffect(() => {
    const activeTab = tabsRef.current[currentSelect - 1];
    if (activeTab) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
        top: activeTab.offsetTop,
        height: activeTab.offsetHeight,
      });
    }
  }, [currentSelect]);

  return (
    <div className="h-full w-full px-4 sm:px-10">
      <div className="flex items-center w-full pb-4">
        <div className="font-bold text-3xl sm:text-4xl text-[#c6d0f0] whitespace-nowrap">/experience</div>
        <div className="flex-1 h-[1px] bg-gray-600 ml-3"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-start gap-6 sm:gap-10 mt-6 sm:mt-10 min-h-[500px]">
        <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-1/3 border-b md:border-b-0 md:border-l border-gray-700 md:pl-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Desktop Indicator - Vertical */}
          <div
            className="absolute left-0 w-0.5 bg-[#56ddc1] transition-all duration-300 ease-in-out hidden md:block"
            style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
          />
           {/* Mobile Indicator - Horizontal */}
           <div
            className="absolute bottom-0 h-0.5 bg-[#56ddc1] transition-all duration-300 ease-in-out block md:hidden"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />

          <button
            ref={(el) => { tabsRef.current[0] = el; }}
            onClick={() => setCurrentSelect(1)}
            className={`shrink-0 md:shrink text-center md:text-left text-xs sm:text-base px-3 md:px-6 py-3 md:py-4 rounded-t-md md:rounded-md cursor-pointer 
              hover:bg-gray-800/50 transition-all duration-300 ease-in-out whitespace-nowrap
              ${
                currentSelect === 1
                  ? "text-[#56ddc1] bg-gray-800/40"
                  : "text-[#8791af]"
              }`}
          >
            DigiChum PVT LTD.
          </button>
          <button
            ref={(el) => { tabsRef.current[1] = el; }}
            onClick={() => setCurrentSelect(2)}
            className={`shrink-0 md:shrink text-center md:text-left text-xs sm:text-base px-3 md:px-6 py-3 md:py-4 rounded-t-md md:rounded-md cursor-pointer 
              hover:bg-gray-800/50 transition-all duration-300 ease-in-out whitespace-nowrap
              ${
                currentSelect === 2
                  ? "text-[#56ddc1] bg-gray-800/40"
                  : "text-[#8791af]"
              }`}
          >
            Gamma Edge PVT LTD.
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
                        ? "opacity-100 translate-x-0 visible relative"
                        : "opacity-0 -translate-x-4 invisible absolute top-0"
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
