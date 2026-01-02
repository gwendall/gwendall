import PROJECTS, { EXHIBITIONS } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-12 font-mono leading-6">
      <header className="mb-12">
        <h1 className="font-bold">GWENDALL</h1>
        <p className="text-zinc-600">
          Builder & Founder. Exploring systems around avatars, spatial worlds, and autonomous behavior. Find me on{" "}
          <Link 
            href="https://x.com/gwendall" 
            target="_blank" 
            className="text-link hover:underline font-bold"
          >
            X
          </Link>{" "}
          or{" "}
          <Link 
            href="https://github.com/gwendall" 
            target="_blank" 
            className="text-link hover:underline font-bold"
          >
            Github
          </Link>
          , or email me at{" "}
          <a 
            href="mailto:hi@gwendall.com" 
            className="text-link hover:underline font-bold"
          >
            hi@gwendall.com
          </a>.
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="font-bold text-zinc-600 mb-6 text-xs tracking-wider">WORK</h2>
          <ul className="space-y-6">
            {PROJECTS.sort((a, b) => (b.launchDate?.getTime() || 0) - (a.launchDate?.getTime() || 0)).map((project) => (
              <li key={project.name}>
                <article className="flex flex-col">
                  <div>
                    <Link 
                      href={project.url} 
                      target="_blank"
                      className="font-bold text-link hover:underline uppercase tracking-wide mr-4"
                    >
                      {project.name}
                    </Link>
                    <span className="text-black tabular-nums mr-4">
                      {project.launchDate ? (
                        new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" })
                          .format(project.launchDate)
                          .toUpperCase()
                      ) : (
                        "WIP"
                      )}
                    </span>
                    {project.tweets && project.tweets.length > 0 && (
                      <Link
                        href={project.tweets[0]}
                        target="_blank"
                        className="text-link hover:underline"
                      >
                        TWEET
                      </Link>
                    )}
                  </div>
                  
                  <div className="text-zinc-700">
                    {project.description}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-zinc-600 mb-2 text-xs tracking-wider">TALKS & EXHIBITIONS</h2>
          <p className="text-zinc-500 mb-6">I regularly speak about AI agents, avatars, and the convergence of physical and digital systems.</p>
          <ul className="space-y-6">
            {EXHIBITIONS.sort((a, b) => b.date.getTime() - a.date.getTime()).map((item) => (
              <li key={item.name}>
                <article className="flex flex-col">
                  <div>
                    <Link 
                      href={item.url} 
                      target="_blank"
                      className="font-bold text-link hover:underline uppercase tracking-wide mr-4"
                    >
                      {item.name}
                    </Link>
                    <span className="text-black tabular-nums">
                      {new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" })
                        .format(item.date)
                        .toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="text-zinc-700">
                    {item.description}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
