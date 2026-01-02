import ITEMS, { ProjectType } from "@/data/projects";
import Link from "next/link";
import { ProjectList } from "@/app/components/ProjectList";

export const metadata = {
  title: "Works | Gwendall",
  description: "Complete list of projects and experiments.",
};

export default function Works() {
  const allWorks = ITEMS.filter(item => !item.hidden && item.type !== ProjectType.Talk && item.type !== ProjectType.Exhibition);

  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-12 font-mono leading-6">
      <header className="mb-12">
        <div className="mb-6">
          <Link href="/" className="text-zinc-400 hover:text-zinc-600 hover:underline text-xs">
            ← Back
          </Link>
        </div>
        <h1 className="font-bold mb-2">ALL WORKS</h1>
        <p className="text-zinc-500">
          Complete list of projects & experiments (unreleased included).
        </p>
      </header>

      <div className="space-y-12">
        <ProjectList items={allWorks} />
      </div>
    </main>
  );
}
