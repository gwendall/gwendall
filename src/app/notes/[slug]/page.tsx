import type { Metadata } from "next";
import NOTES from "@/data/notes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { ArrowRight } from "lucide-react";

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
        {note.tweetId && (
          <div className="mt-8 mb-[-24px]">
            <a
              href={`https://x.com/gwendall/status/${note.tweetId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
            >
              Discuss on X
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </article>
    </>
  );
}
