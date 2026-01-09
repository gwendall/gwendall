import type { Metadata } from "next";
import NOTES from "@/data/notes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return NOTES.filter((n) => !n.hidden).map((note) => ({
    slug: note.slug,
  }));
}

// Remove trailing punctuation for cleaner meta titles (before "| Gwendall")
function cleanTitleForMeta(title: string): string {
  return title.replace(/[.!?]+$/, "");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = NOTES.find((n) => n.slug === slug && !n.hidden);

  if (!note) {
    return {
      title: "Note Not Found",
    };
  }

  return {
    title: cleanTitleForMeta(note.title),
    description: note.body.slice(0, 160),
  };
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
    .format(date)
    .toUpperCase();
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = NOTES.find((n) => n.slug === slug && !n.hidden);

  if (!note) {
    notFound();
  }

  return (
    <>
      <article>
        <div className="mb-6">
          <h1 className="font-bold text-foreground">{note.title}</h1>
          <time className="text-foreground-muted">
            {formatDate(note.date)}
          </time>
        </div>
        <div className="text-foreground prose-minimal">
          <Markdown>{note.body}</Markdown>
        </div>
      </article>
    </>
  );
}
