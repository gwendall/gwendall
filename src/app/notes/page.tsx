import type { Metadata } from "next";
import NOTES from "@/data/notes";
import { NoteList } from "@/app/components/ProjectList";

export const metadata: Metadata = {
  title: "Notes",
  description: "Thoughts and reflections.",
};

export default function Notes() {
  const visibleNotes = NOTES.filter((n) => !n.hidden).sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold mb-2">SOME NOTES</h1>
        <p className="text-foreground-muted">Thoughts and reflections.</p>
      </div>

      <NoteList items={visibleNotes} />
    </>
  );
}
