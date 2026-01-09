import type { Metadata } from "next";
import ITEMS, { ProjectType } from "@/data/projects";
import { Section } from "@/app/components/ProjectList";

export const metadata: Metadata = {
  title: "Talks & Exhibitions",
  description: "All talks and exhibitions.",
};

export default function Talks() {
  const allTalks = ITEMS.filter(item => !item.hidden && (item.type === ProjectType.Talk || item.type === ProjectType.Exhibition));

  return (
    <>
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

