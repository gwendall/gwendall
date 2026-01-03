import ITEMS, { ProjectType, ProjectTypeLabels } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "./components/ProjectList";

export default function Home() {
  const visibleItems = ITEMS.filter(item => !item.hidden && !item.archived);
  
  const currentWork = visibleItems.filter(item => item.type === ProjectType.CurrentWork);
  const ongoingExperiments = visibleItems.filter(item => item.type === ProjectType.OngoingExperiments);
  const pastWork = visibleItems.filter(item => item.type === ProjectType.PastWork);
  const talksAndExhibitions = visibleItems.filter(item => item.type === ProjectType.Talk || item.type === ProjectType.Exhibition);

  return (
    <>
      <header className="mb-12">
        <h1 className="font-bold">GWENDALL</h1>
        <p className="text-foreground-muted">
          Builder & founder exploring embodied agents, spatial systems, and autonomous behavior. Find me on{" "}
          <Link  
            href="https://x.com/gwendall" 
            target="_blank" 
            className="text-link hover:underline font-bold"
          >
            X
          </Link>{" "}
          or{" "}
          <Link 
            href="https://github.com/gwendall" 
            target="_blank" 
            className="text-link hover:underline font-bold"
          >
            Github
          </Link>
          , or email me at{" "}
          <a 
            href="mailto:hi@gwendall.com?subject=Hello" 
            className="text-link hover:underline font-bold"
          >
            hi@gwendall.com
          </a>.
        </p>
      </header>

      <div className="flex flex-col gap-12">
        <Section title={ProjectTypeLabels[ProjectType.CurrentWork]} items={currentWork} />
        <Section title={ProjectTypeLabels[ProjectType.OngoingExperiments]} items={ongoingExperiments} />
        
        <div>
          <Section 
            title={ProjectTypeLabels[ProjectType.PastWork]} 
            items={pastWork}
          />
          <div className="text-foreground-muted mt-6 flex gap-6 text-sm">
            <Link href="/works" className="inline-flex items-center gap-1 hover:text-foreground hover:underline">
              View All Works <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <Section 
          title="Talks & Exhibitions" 
          items={talksAndExhibitions} 
          description="I regularly speak about AI agents, avatars, and the convergence of physical and digital systems."
        />
      </div>
    </>
  );
}
