import type { Metadata } from "next";
import ITEMS, { ProjectType, ProjectTypeLabels } from "@/data/projects";
import NOTES from "@/data/notes";
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

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
    .format(date)
    .toUpperCase();
}

export default function Home() {
  const visibleItems = ITEMS.filter(item => !item.hidden && !item.archived);
  
  const currentWork = visibleItems.filter(item => item.type === ProjectType.CurrentWork);
  const ongoingExperiments = visibleItems.filter(item => item.type === ProjectType.OngoingExperiments);
  const pastWork = visibleItems.filter(item => item.type === ProjectType.PastWork);
  const talksAndExhibitions = visibleItems.filter(item => item.type === ProjectType.Talk || item.type === ProjectType.Exhibition);

  const latestNotes = NOTES.filter(n => !n.hidden)
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 3);

  return (
    <>
      <div className="flex flex-col gap-12">
        {latestNotes.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 bg-foreground -translate-y-[0.5px]" aria-hidden="true" />
              <h2 className="font-bold text-foreground tracking-wider uppercase">Some Notes</h2>
            </div>
            <div className="mt-6 space-y-3">
              {latestNotes.map((note) => (
                <div key={note.slug}>
                  <div>
                    <Link 
                      href={`/notes/${note.slug}`}
                      className="font-bold text-foreground hover:text-link transition-colors"
                    >
                      {note.title}
                    </Link>
                    <span className="text-foreground-faint text-sm ml-2">
                      {formatDate(note.date)}
                    </span>
                  </div>
                  <p className="text-foreground-muted truncate">
                    {note.body.replace(/\n/g, ' ').slice(0, 200)}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-foreground-muted mt-6 flex gap-6">
              <Link href="/notes" className="inline-flex items-center gap-1 hover:text-foreground hover:underline">
                View All Notes <ArrowRight size={14} aria-hidden="true" focusable={false} />
              </Link>
            </div>
          </section>
        )}

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
