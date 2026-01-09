import { Project } from "@/data/projects";
import { Note } from "@/data/notes";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// Minimum number of items to show "View All" link
export const VIEW_ALL_THRESHOLD = 10;

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
    .format(date)
    .toUpperCase();
}

export function ProjectList({ items }: { items: Project[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="space-y-6">
      {items.sort((a, b) => b.date.getTime() - a.date.getTime()).map((item) => (
        <li key={item.name}>
          <article className="flex flex-col">
            <div className="block leading-relaxed mb-0.5">
              {item.url ? (
                <Link 
                  href={item.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-link hover:underline uppercase tracking-wide mr-3"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="font-bold text-foreground uppercase tracking-wide mr-3">
                  {item.name}
                </span>
              )}
              <span className="text-foreground-muted tabular-nums whitespace-nowrap">
                {(() => {
                    const startYear = item.date.getFullYear();
                    const endYear = item.dateEnd?.getFullYear();

                    if (item.dateEnd) {
                        if (startYear !== endYear) {
                            return `${startYear} - ${endYear}`;
                        }
                        const startMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format(item.date).toUpperCase();
                        const endMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format(item.dateEnd).toUpperCase();
                        return `${startMonth} - ${endMonth} ${startYear}`;
                    }

                    return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" })
                        .format(item.date)
                        .toUpperCase();
                })()}
              </span>
              {item.tweets && item.tweets.length > 0 && (
                <Link
                  href={item.tweets[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center ml-2 p-1 -m-1 text-foreground-muted hover:text-foreground transition-colors align-middle"
                  title="View Tweet (opens in a new tab)"
                  aria-label="View Tweet (opens in a new tab)"
                >
                  <ArrowUpRight size={16} aria-hidden="true" focusable={false} />
                </Link>
              )}
            </div>
            
            <div className="text-foreground-muted">
              {item.description}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export function NoteList({ items, clampDescription = false }: { items: Note[]; clampDescription?: boolean }) {
  if (items.length === 0) return null;

  return (
    <ul className="space-y-3">
      {items.sort((a, b) => b.date.getTime() - a.date.getTime()).map((note) => (
        <li key={note.slug}>
          <div>
            <Link 
              href={`/notes/${note.slug}`}
              className="font-bold text-link hover:underline transition-colors mr-3"
            >
              {note.title}
            </Link>
            <span className="text-foreground-muted tabular-nums whitespace-nowrap">
              {formatDate(note.date)}
            </span>
          </div>
          <p className={`text-foreground-muted ${clampDescription ? 'truncate' : ''}`}>
            {note.body.replace(/\n/g, ' ').slice(0, 200)}
          </p>
        </li>
      ))}
    </ul>
  );
}

interface SectionProps {
  title: string;
  items?: Project[];
  notes?: Note[];
  description?: string;
  viewAllLabel?: string;
  viewAllHref?: string;
  totalCount?: number;
  clampDescription?: boolean;
}

export function Section({ title, items, notes, description, viewAllLabel, viewAllHref, totalCount, clampDescription = false }: SectionProps) {
  const hasContent = (items && items.length > 0) || (notes && notes.length > 0);
  if (!hasContent) return null;

  const showViewAll = viewAllLabel && viewAllHref && (totalCount ?? 0) >= VIEW_ALL_THRESHOLD;

  return (
    <section>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2.5 h-2.5 bg-foreground -translate-y-[0.5px]" aria-hidden="true" />
        <h2 className="font-bold text-foreground tracking-wider uppercase">{title}</h2>
      </div>
      {description && (
        <p className="text-foreground-muted mb-6">{description}</p>
      )}
      <div className={description ? "" : "mt-6"}>
        {items && <ProjectList items={items} />}
        {notes && <NoteList items={notes} clampDescription={clampDescription} />}
      </div>
      {showViewAll && (
        <div className="text-foreground-muted mt-6 flex gap-6">
          <Link href={viewAllHref} className="inline-flex items-center gap-1 hover:text-foreground hover:underline">
            {viewAllLabel} <ArrowRight size={14} aria-hidden="true" focusable={false} />
          </Link>
        </div>
      )}
    </section>
  );
}

