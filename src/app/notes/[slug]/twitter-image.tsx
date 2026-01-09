import { generateOGImage } from "@/lib/og-image";
import NOTES from "@/data/notes";

export const runtime = "nodejs";

// Twitter card image - same as OG for summary_large_image
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Generate static params for all notes
export function generateStaticParams() {
  return NOTES.filter((n) => !n.hidden).map((note) => ({
    slug: note.slug,
  }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = NOTES.find((n) => n.slug === slug && !n.hidden);

  return generateOGImage(
    { title: note?.title ?? "Note" },
    size
  );
}
