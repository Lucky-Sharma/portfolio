import { ProjectCard } from "./ProjectCard";
import { useEffect, useState, useCallback } from "react";

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
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Dev (localhost): call GitHub directly — no proxy needed
      // Prod (Vercel):   call /api/repos — serverless proxy with secure token
      const isDev = import.meta.env.DEV;
      const url = isDev
        ? "https://api.github.com/users/Lucky-Sharma/repos?sort=updated&per_page=100"
        : "/api/repos";

      const res = await fetch(url);

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const msg: string =
          body?.message || body?.error || `Error ${res.status}: ${res.statusText}`;
        if (res.status === 403 || msg.toLowerCase().includes("rate limit")) {
          throw new Error(
            "GitHub API rate limit exceeded. Please try again in a few minutes."
          );
        }
        throw new Error(msg);
      }

      const json = await res.json();
      // GitHub returns a raw array; /api/repos proxy returns { repos: [...] }
      const repos: Repo[] = Array.isArray(json) ? json : json.repos;
      setProjects(repos.filter((repo) => !repo.fork));
    } catch (err) {
      if (err instanceof TypeError && err.message === "Failed to fetch") {
        setError(
          "Unable to reach the server. Check your internet connection and try again."
        );
      } else {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred."
        );
      }
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <div className="w-full pb-10">
      <div className="flex items-center w-full pb-4">
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#c6d0f0]">
          /projects
        </div>
        <div className="flex-1 h-[1px] bg-gray-600 ml-3"></div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-[#56ddc1] text-lg font-mono animate-pulse">
            Fetching repositories from GitHub...
          </div>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-4 text-center px-4">
          <div className="p-3 rounded-full bg-red-500/10 border border-red-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div>
            <p className="text-red-400 font-semibold font-mono mb-1">
              Failed to load projects
            </p>
            <p className="text-[#8791af] text-sm max-w-md">{error}</p>
          </div>
          <button
            onClick={fetchRepos}
            className="mt-2 px-5 py-2 rounded-lg border border-[#56ddc1]/40 text-[#56ddc1] text-sm font-mono hover:bg-[#56ddc1]/10 transition-colors"
          >
            Try Again
          </button>
          <a
            href="https://github.com/Lucky-Sharma?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8791af] hover:text-[#56ddc1] transition-colors underline underline-offset-2"
          >
            View repositories directly on GitHub →
          </a>
        </div>
      ) : projects.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <p className="text-[#8791af] font-mono text-sm">
            No repositories found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mt-6 items-stretch">
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
