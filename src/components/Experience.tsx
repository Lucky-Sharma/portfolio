import { CompanyDetails } from "./CompanyDetails";
import { useState, useRef, useEffect } from "react";
interface dataType {
  id: number;
  companyPosition: string;
  companyName: string;
  companyUrl: string;
  dates: string;
  details: string[];
}
const data: dataType[] = [
  {
    id: 1,
    companyPosition: "Software Engineer (Intern)",
    companyName: "MpOnline Limited",
    companyUrl: "https://www.mponline.gov.in/Portal/AboutMPOnline.aspx",
    dates: "May 2026 - Present",
    details: [
      "Built and maintained backend services using FastAPI, integrating AI models into government digital service workflows.",
      "Set up CI/CD pipelines using Microsoft Azure DevOps for automated builds, testing, and deployments, improving release consistency.",
      "Wrote end-to-end test suites with Playwright to validate critical user flows, improving release confidence pre-deployment.",
      "Collaborated with cross-functional teams on architecture reviews, applying DevOps best practices for API performance."
    ],
  },
  {
    id: 2,
    companyPosition: "Full Stack Developer",
    companyName: "GammaEdge Technologies",
    companyUrl: "https://gammaedge.io/",
    dates: "Jun 2025 - Nov 2025",
    details: [
      "Implemented Redux Toolkit state management, optimizing responsiveness and streamlining complex data handling for enterprise clients.",
      "Orchestrated Docker containerization and AWS deployment (EC2, ECR), improving system reliability by 30% and accelerating release cycles.",
      "Built and maintained RESTful APIs with Node.js and Express, enabling seamless frontend-backend communication."
    ],
  },
  {
    id: 3,
    companyPosition: "Frontend Developer (Intern)",
    companyName: "DigiChum Infotech Pvt. Ltd.",
    companyUrl: "https://digichuminfotech.com/",
    dates: "Feb 2025 - May 2025",
    details: [
      "Built responsive frontend interfaces that boosted user engagement by 15% on the company's finance platform.",
      "Developed RESTful APIs that reduced backend processing time by 20%, improving scalability for financial operations.",
      "Translated Figma mockups into pixel-perfect React components, ensuring cross-browser compatibility and consistent UX."
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
    <div className="h-full w-full">
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

          {data.map((item, index) => (
            <button
              key={item.id}
              ref={(el) => { tabsRef.current[index] = el; }}
              onClick={() => setCurrentSelect(item.id)}
              className={`shrink-0 md:shrink text-center md:text-left text-xs sm:text-base px-3 md:px-6 py-3 md:py-4 rounded-t-md md:rounded-md cursor-pointer 
                hover:bg-gray-800/50 transition-all duration-300 ease-in-out whitespace-nowrap
                ${
                  currentSelect === item.id
                    ? "text-[#56ddc1] bg-gray-800/40"
                    : "text-[#8791af]"
                }`}
            >
              {item.companyName}
            </button>
          ))}
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
                    companyUrl={item.companyUrl}
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
