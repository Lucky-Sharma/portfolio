import { ProjectCard } from "./ProjectCard";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  fork: boolean;
}

export const Projects = () => {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Lucky-Sharma/repos?sort=updated");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Repo[] = await res.json();
        // Filter out forked repositories
        setProjects(data.filter((repo) => !repo.fork));
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center w-full pb-4">
        <div className="font-bold text-3xl sm:text-4xl text-[#c6d0f0] ">/projects</div>
        <div className="flex-1 h-[1px] bg-gray-600 ml-3 "></div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-[#56ddc1] text-lg font-mono animate-pulse">
            Fetching repositories from GitHub...
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8 items-stretch">
          {projects.map((repo) => {
            const liveUrl = repo.homepage?.trim() || "";

            return (
              <div key={repo.id} className="w-full h-full flex">
                <ProjectCard
                  gitlink={repo.html_url}
                  uploadkink={liveUrl}
                  Heading={repo.name}
                  detail={repo.description || "No description provided on GitHub."}
                  techStack={repo.language || "Web Project"}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
