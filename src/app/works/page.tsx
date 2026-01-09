import type { Metadata } from "next";
import ITEMS, { ProjectType } from "@/data/projects";
import { Section } from "@/app/components/ProjectList";

export const metadata: Metadata = {
  title: "Works",
  description: "Projects and experiments, some unreleased.",
};

export default function Works() {
  const allWorks = ITEMS.filter(item => !item.hidden && item.type !== ProjectType.Talk && item.type !== ProjectType.Exhibition);

  return (
    <>
      <div className="space-y-12">
        <Section 
          title="ALL WORKS" 
          items={allWorks} 
          description="A non-exhaustive list of projects and experiments, some unreleased included."
        />
      </div>
    </>
  );
}
