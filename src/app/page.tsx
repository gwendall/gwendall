import ITEMS, { Project, ProjectType } from "@/data/projects";
import Link from "next/link";

function Section({ title, items, description }: { title: string; items: Project[]; description?: string }) {
  if (items.length === 0) return null;

  return (
    <section>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-zinc-900" />
        <h2 className="font-bold text-zinc-600 text-xs tracking-wider uppercase">{title}</h2>
      </div>
      {description && (
        <p className="text-zinc-500 mb-6">{description}</p>
      )}
      <ul className={description ? "space-y-6" : "space-y-6 mt-6"}>
        {items.sort((a, b) => b.date.getTime() - a.date.getTime()).map((item) => (
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
                <span className="text-black tabular-nums mr-4">
                  {new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" })
                    .format(item.date)
                    .toUpperCase()}
                </span>
              </div>
              
              <div className="text-zinc-700">
                {item.description}
                {item.tweets && item.tweets.length > 0 && (
                  <>
                    {" "}
                    <Link
                      href={item.tweets[0]}
                      target="_blank"
                      className="text-link hover:underline"
                    >
                      [TWEET]
                    </Link>
                  </>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  const currentWork = ITEMS.filter(item => item.type === 'Current Work');
  const pastWork = ITEMS.filter(item => item.type === 'Past Work');
  const talksAndExhibitions = ITEMS.filter(item => item.type === 'Talk' || item.type === 'Exhibition');

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
        <Section title="Current Work" items={currentWork} />
        <Section title="Past Work" items={pastWork} />
        <Section 
          title="Talks & Exhibitions" 
          items={talksAndExhibitions} 
          description="I regularly speak about AI agents, avatars, and the convergence of physical and digital systems."
        />
      </div>
    </main>
  );
}
