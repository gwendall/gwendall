import ITEMS, { ProjectType, ProjectTypeLabels } from "@/data/projects";
import NOTES from "@/data/notes";
import { Section } from "./components/ProjectList";

export default function Home() {
  // All items by type (for totalCount)
  const allNotes = NOTES.filter(n => !n.hidden);
  const allWorks = ITEMS.filter(item => !item.hidden && [ProjectType.CurrentWork, ProjectType.OngoingExperiments, ProjectType.PastWork].includes(item.type));
  const allTalks = ITEMS.filter(item => !item.hidden && [ProjectType.Talk, ProjectType.Exhibition].includes(item.type));

  // Visible items on landing (filtered by !archived)
  const visibleItems = ITEMS.filter(item => !item.hidden && !item.archived);
  const currentWork = visibleItems.filter(item => item.type === ProjectType.CurrentWork);
  const ongoingExperiments = visibleItems.filter(item => item.type === ProjectType.OngoingExperiments);
  const pastWork = visibleItems.filter(item => item.type === ProjectType.PastWork);
  const talksAndExhibitions = visibleItems.filter(item => [ProjectType.Talk, ProjectType.Exhibition].includes(item.type));

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

        <Section 
          title={ProjectTypeLabels[ProjectType.CurrentWork]} 
          items={currentWork} 
        />
        <Section 
          title={ProjectTypeLabels[ProjectType.OngoingExperiments]} 
          items={ongoingExperiments} 
        />
        
        <Section 
          title={ProjectTypeLabels[ProjectType.PastWork]} 
          items={pastWork}
          viewAllLabel="View All Works"
          viewAllHref="/works"
          totalCount={allWorks.length}
        />

        <Section 
          title="Selected Talks & Exhibitions" 
          items={talksAndExhibitions} 
          description="I regularly speak about AI agents, avatars, and the convergence of physical and digital systems."
          viewAllLabel="View All Talks & Exhibitions"
          viewAllHref="/talks"
          totalCount={allTalks.length}
        />
      </div>
    </>
  );
}
