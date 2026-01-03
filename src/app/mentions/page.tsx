import React from "react";
import MENTIONS, { TESTIMONIALS, Mention } from "@/data/mentions";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Mentions",
  description: "Selected press, talks, and testimonials.",
};

function MentionItem({ item }: { item: Mention }) {
  return (
    <li className="group">
      <Link 
        href={item.url}
        target="_blank"
        className="block text-sm"
      >
        <span className="font-bold text-foreground hover:text-link transition-colors mr-2">
            {item.title}
        </span>
        <span className="text-foreground-muted whitespace-nowrap">
            — {item.source}, {item.date.getFullYear()}
            <ArrowUpRight size={10} className="inline ml-1 mb-0.5 text-foreground-faint group-hover:text-foreground-muted transition-colors opacity-0 group-hover:opacity-100" />
        </span>
      </Link>
    </li>
  );
}

export default function Mentions() {
  const visibleMentions = MENTIONS.filter(m => !m.hidden).sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <>
      <header className="mb-12">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-1 text-foreground-muted hover:text-foreground hover:underline">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
        <h1 className="font-bold mb-2">MENTIONS</h1>
        <p className="text-foreground-muted">
          Selected press coverage, talks, and community feedback.
        </p>
      </header>

      <div className="space-y-16">
        <section>
          <ul className="space-y-1">
            {visibleMentions.map((mention, i) => (
              <MentionItem key={i} item={mention} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

