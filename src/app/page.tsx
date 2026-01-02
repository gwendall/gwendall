import PROJECTS, { EXHIBITIONS } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-12 font-mono leading-6">
      <header className="mb-12">
        <h1 className="font-bold">GWENDALL</h1>
        <p className="text-zinc-500">
          Builder. Find me on{" "}
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
          .
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="font-bold text-zinc-500 mb-6 text-xs tracking-wider">WORK</h2>
          <div className="space-y-6">
            {PROJECTS.sort((a, b) => (b.launchDate?.getTime() || 0) - (a.launchDate?.getTime() || 0)).map((project) => (
              <article key={project.name} className="flex flex-col">
                <div className="flex items-baseline gap-4">
                  <Link 
                    href={project.url} 
                    target="_blank"
                    className="font-bold text-link hover:underline uppercase tracking-wide"
                  >
                    {project.name}
                  </Link>
                  <span className="text-black tabular-nums">
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
                
                <div className="text-zinc-600">
                  {project.description}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-bold text-zinc-500 mb-6 text-xs tracking-wider">TALKS & EXHIBITIONS</h2>
          <div className="space-y-6">
            {EXHIBITIONS.sort((a, b) => b.date.getTime() - a.date.getTime()).map((item) => (
              <article key={item.name} className="flex flex-col">
                <div className="flex items-baseline gap-4">
                  <Link 
                    href={item.url} 
                    target="_blank"
                    className="font-bold text-link hover:underline uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                  <span className="text-black tabular-nums">
                    {new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" })
                      .format(item.date)
                      .toUpperCase()}
                  </span>
                </div>
                
                <div className="text-zinc-600">
                  {item.description}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
