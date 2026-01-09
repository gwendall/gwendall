import type { Metadata } from "next";
import ITEMS, { ProjectType, ProjectTypeLabels } from "@/data/projects";
import NOTES from "@/data/notes";
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

  const allNotes = NOTES.filter(n => !n.hidden);
  const latestNotes = allNotes
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 3);

  return (
    <>
      <div className="flex flex-col gap-12">
        <Section 
          title="Latest Notes"
          notes={latestNotes}
          viewAllLabel="View All Notes"
          viewAllHref="/notes"
          totalCount={allNotes.length}
          clampDescription
        />

        <Section title={ProjectTypeLabels[ProjectType.CurrentWork]} items={currentWork} />
        <Section title={ProjectTypeLabels[ProjectType.OngoingExperiments]} items={ongoingExperiments} />
        
        <Section 
          title={ProjectTypeLabels[ProjectType.PastWork]} 
          items={pastWork}
          viewAllLabel="View All Works"
          viewAllHref="/works"
          totalCount={visibleItems.filter(item => item.type !== ProjectType.Talk && item.type !== ProjectType.Exhibition).length}
        />

        <Section 
          title="Selected Talks & Exhibitions" 
          items={talksAndExhibitions} 
          description="I regularly speak about AI agents, avatars, and the convergence of physical and digital systems."
          viewAllLabel="View All Talks"
          viewAllHref="/talks"
          totalCount={talksAndExhibitions.length}
        />
      </div>
    </>
  );
}
