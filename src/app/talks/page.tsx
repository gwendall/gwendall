import ITEMS, { ProjectType } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/app/components/ProjectList";

export const metadata = {
  title: "Talks & Exhibitions",
  description: "Selected talks and exhibitions.",
};

export default function Talks() {
  const allTalks = ITEMS.filter(item => !item.hidden && (item.type === ProjectType.Talk || item.type === ProjectType.Exhibition));

  return (
    <>
      <header className="mb-4">
        <Link href="/" className="inline-flex items-center gap-1 text-foreground-muted hover:text-foreground hover:underline">
          <ArrowLeft size={14} /> Back
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

