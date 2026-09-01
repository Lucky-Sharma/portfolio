interface ProjectCardProps {
  gitlink: string;
  uploadkink: string;
  Heading: string;
  detail: string;
  techStack: string;
}

export const ProjectCard = ({
  gitlink,
  uploadkink,
  Heading,
  detail,
  techStack,
}: ProjectCardProps) => {
  const hasLiveLink = uploadkink && uploadkink !== "#";

  return (
    <div className="bg-[#112240] w-full h-full p-4 sm:p-6 rounded-xl border border-gray-800/80 hover:border-[#56ddc1]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xl group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-gray-800/50 text-[#56ddc1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
          </div>
          <div className="flex items-center gap-3">
            {gitlink && (
              <a
                href={gitlink}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
                className="text-gray-400 hover:text-[#56ddc1] transition-colors p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-github cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            )}

            {hasLiveLink && (
              <a
                href={uploadkink}
                target="_blank"
                rel="noopener noreferrer"
                title="View Live Demo"
                className="text-gray-400 hover:text-[#56ddc1] transition-colors p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-[#c6d0f0] group-hover:text-[#56ddc1] transition-colors mb-3 text-left capitalize break-words">
          {Heading.replace(/[-_]/g, " ")}
        </h3>

        <p className="text-[#8791af] text-sm text-left line-clamp-3 leading-relaxed">
          {detail}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center justify-between text-xs font-mono text-[#56ddc1]">
        <span>{techStack}</span>
        {hasLiveLink && (
          <span className="text-[10px] px-2 py-0.5 rounded bg-[#56ddc1]/10 border border-[#56ddc1]/20 text-[#56ddc1]">
            Live
          </span>
        )}
      </div>
    </div>
  );
};
