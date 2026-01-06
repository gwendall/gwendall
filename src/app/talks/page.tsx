import type { Metadata } from "next";
import ITEMS, { ProjectType } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/app/components/ProjectList";

export const metadata: Metadata = {
  title: "Talks & Exhibitions",
  description: "All talks and exhibitions.",
  openGraph: {
    title: "Talks & Exhibitions | Gwendall",
    description: "All talks and exhibitions.",
  },
  twitter: {
    title: "Talks & Exhibitions | Gwendall",
    description: "All talks and exhibitions.",
  },
};

export default function Talks() {
  const allTalks = ITEMS.filter(item => !item.hidden && (item.type === ProjectType.Talk || item.type === ProjectType.Exhibition));

  return (
    <>
      <header className="mb-4">
        <Link href="/" className="inline-flex items-center gap-1 text-foreground-muted hover:text-foreground hover:underline">
          <ArrowLeft size={14} aria-hidden="true" focusable={false} /> Back
        </Link>
      </header>

      <div className="space-y-12">
        <Section 
          title="ALL TALKS & EXHIBITIONS" 
          items={allTalks} 
          description="Complete list of talks and exhibitions."
        />
      </div>
    </>
  );
}

