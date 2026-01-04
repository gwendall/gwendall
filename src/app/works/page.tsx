import ITEMS, { ProjectType } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/app/components/ProjectList";

export const metadata = {
  title: "Works",
  description: "Complete list of projects and experiments.",
};

export default function Works() {
  const allWorks = ITEMS.filter(item => !item.hidden && item.type !== ProjectType.Talk && item.type !== ProjectType.Exhibition);

  return (
    <>
      <header className="mb-4">
        <Link href="/" className="inline-flex items-center gap-1 text-foreground-muted hover:text-foreground hover:underline">
          <ArrowLeft size={14} aria-hidden="true" focusable={false} /> Back
        </Link>
      </header>

      <div className="space-y-12">
        <Section 
          title="ALL WORKS" 
          items={allWorks} 
          description="Complete list of projects & experiments (unreleased included)."
        />
      </div>
    </>
  );
}
