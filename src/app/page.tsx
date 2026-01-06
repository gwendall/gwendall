import type { Metadata } from "next";
import ITEMS, { ProjectType, ProjectTypeLabels } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "./components/ProjectList";

export const metadata: Metadata = {
  openGraph: {
    title: "Gwendall",
    description: "Builder & founder exploring embodied agents, spatial systems, and autonomous behavior.",
  },
  twitter: {
    title: "Gwendall",
    description: "Builder & founder exploring embodied agents, spatial systems, and autonomous behavior.",
  },
};

export default function Home() {
  const visibleItems = ITEMS.filter(item => !item.hidden && !item.archived);
  
  const currentWork = visibleItems.filter(item => item.type === ProjectType.CurrentWork);
  const ongoingExperiments = visibleItems.filter(item => item.type === ProjectType.OngoingExperiments);
  const pastWork = visibleItems.filter(item => item.type === ProjectType.PastWork);
  const talksAndExhibitions = visibleItems.filter(item => item.type === ProjectType.Talk || item.type === ProjectType.Exhibition);

  return (
    <>
      <div className="flex flex-col gap-12">
        <Section title={ProjectTypeLabels[ProjectType.CurrentWork]} items={currentWork} />
        <Section title={ProjectTypeLabels[ProjectType.OngoingExperiments]} items={ongoingExperiments} />
        
        <div>
          <Section 
            title={ProjectTypeLabels[ProjectType.PastWork]} 
            items={pastWork}
          />
          <div className="text-foreground-muted mt-6 flex gap-6">
            <Link href="/works" className="inline-flex items-center gap-1 hover:text-foreground hover:underline">
              View All Works <ArrowRight size={14} aria-hidden="true" focusable={false} />
            </Link>
          </div>
        </div>

        <div>
          <Section 
            title="Selected Talks & Exhibitions" 
            items={talksAndExhibitions} 
            description="I regularly speak about AI agents, avatars, and the convergence of physical and digital systems."
          />
          <div className="text-foreground-muted mt-6 flex gap-6">
            <Link href="/talks" className="inline-flex items-center gap-1 hover:text-foreground hover:underline">
              View All Talks <ArrowRight size={14} aria-hidden="true" focusable={false} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
