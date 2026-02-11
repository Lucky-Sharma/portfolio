import { ProjectCard } from "./ProjectCard";

const ProjectData = [
  {
    gitlink: "https://github.com/Lucky-Sharma/Blogging-web-application",
    uploadkink: "https://blogging-web-application-six.vercel.app/",
    Heading: "Blogging-web-applicationBlogging-web-application",
    detail:
      "A blogging web app built with React, Hono, and PostgreSQL, styled using Tailwind CSS and TypeScript.",
    techStack: "React , Hono, PostgreSQL, TailwindCSS , TypeScript",
  },
  {
    gitlink: "https://github.com/Lucky-Sharma/phonebooknew",
    uploadkink: "https://phonebooknew.vercel.app/",
    Heading: "Phone book web application",
    detail: "A phonebook web app with full CRUD, search, and sort features.",
    techStack:
      "React, TypeScript, Node.js, Express.js, Prisma ORM, Material UI, Redux ,Cloudinaryt",
  },
  {
    gitlink: "https://github.com/Lucky-Sharma/employee-management-system",
    uploadkink: "#",
    Heading: "employee-management-system",
    detail:
      "React-based frontend with Admin and Employee Dashboards for managing employees, tasks . It uses localstorage to store data .",
    techStack: "React JavaScript",
  },
  {
    gitlink: "https://github.com/Lucky-Sharma/PDF-Merger",
    uploadkink: "#",
    Heading: "PDF-Merger",
    detail:
      "A Web application that uses for PDF merging we upload PDF on the web application and it provide a merged PDF.",
    techStack: "HTML, CSS, JavaScript, Express",
  },
];
export const Projects = () => {
  return (
    <div className="w-full px-4 sm:px-10">
      <div className="flex items-center w-full pb-4">
        <div className="font-bold text-3xl sm:text-4xl text-[#c6d0f0] ">/projects</div>
        <div className="flex-1 h-[1px] bg-gray-600 ml-3 "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-10">
        {ProjectData.map((card, index) => (
          <div key={index} className="flex justify-center">
             <ProjectCard
                gitlink={card.gitlink}
                uploadkink={card.uploadkink}
                Heading={card.Heading}
                detail={card.detail}
                techStack={card.techStack}
              />
          </div>
        ))}
      </div>
    </div>
  );
};
