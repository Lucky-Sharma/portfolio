// Vercel Serverless Function — /api/repos
// Proxies the GitHub API server-side so the token stays secret
// and authenticated requests get 5,000 req/hr instead of 60.

export default async function handler(req, res) {
  // Allow CORS for your Vercel domain (and localhost for dev)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const username = "Lucky-Sharma";
  const token = process.env.GITHUB_TOKEN; // Set this in Vercel dashboard

  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "portfolio-app",
  };

  // Only add Authorization header if token exists
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const githubRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      { headers }
    );

    // Forward GitHub's rate limit headers to the client for debugging
    const rateLimitRemaining = githubRes.headers.get("x-ratelimit-remaining");
    const rateLimitReset = githubRes.headers.get("x-ratelimit-reset");

    if (!githubRes.ok) {
      const errorBody = await githubRes.json().catch(() => ({}));
      return res.status(githubRes.status).json({
        error: errorBody.message || `GitHub API error: ${githubRes.status}`,
        rateLimitRemaining,
        rateLimitReset,
      });
    }

    const repos = await githubRes.json();

    // Cache for 5 minutes on CDN edge to reduce API calls further
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=60");

    return res.status(200).json({
      repos,
      meta: {
        authenticated: !!token,
        rateLimitRemaining,
        rateLimitReset,
      },
    });
  } catch (error) {
    console.error("GitHub API proxy error:", error);
    return res.status(500).json({
      error: "Internal server error while fetching GitHub repositories.",
    });
  }
}
