import type { Metadata } from "next";
import NOTES from "@/data/notes";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes",
  description: "Thoughts and reflections.",
  openGraph: {
    title: "Notes | Gwendall",
    description: "Thoughts and reflections.",
  },
  twitter: {
    title: "Notes | Gwendall",
    description: "Thoughts and reflections.",
  },
};

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
    .format(date)
    .toUpperCase();
}

export default function Notes() {
  const visibleNotes = NOTES.filter((n) => !n.hidden).sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold mb-2">NOTES</h1>
        <p className="text-foreground-muted">Thoughts and reflections.</p>
      </div>

      <ul className="space-y-3">
        {visibleNotes.map((note) => (
          <li key={note.slug}>
            <div>
              <Link
                href={`/notes/${note.slug}`}
                className="font-bold text-foreground hover:text-link transition-colors"
              >
                {note.title}
              </Link>
              <span className="text-foreground-faint text-sm ml-2">
                {formatDate(note.date)}
              </span>
            </div>
            <p className="text-foreground-muted truncate">
              {note.body.replace(/\n/g, ' ').slice(0, 200)}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
