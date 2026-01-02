import { Project } from "@/data/projects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectList({ items }: { items: Project[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="space-y-6">
      {items.sort((a, b) => b.date.getTime() - a.date.getTime()).map((item) => (
        <li key={item.name}>
          <article className="flex flex-col">
            <div className="flex items-center">
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
              {item.tweets && item.tweets.length > 0 && (
                <Link
                  href={item.tweets[0]}
                  target="_blank"
                  className="inline-flex items-center justify-center ml-2 text-zinc-400 hover:text-zinc-600 transition-colors"
                  title="View Tweet"
                >
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
            
            <div className="text-zinc-700">
              {item.description}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export function Section({ title, items, description }: { title: string; items: Project[]; description?: string }) {
  // Items filtering is now handled by the caller or within the list component if needed
  if (items.length === 0) return null;

  return (
    <section>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2.5 h-2.5 bg-zinc-400 -translate-y-[0.5px]" />
        <h2 className="font-bold text-zinc-600 text-xs tracking-wider uppercase">{title}</h2>
      </div>
      {description && (
        <p className="text-zinc-500 mb-6">{description}</p>
      )}
      <div className={description ? "" : "mt-6"}>
        <ProjectList items={items} />
      </div>
    </section>
  );
}

