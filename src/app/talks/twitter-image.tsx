import { generateOGImage } from "@/lib/og-image";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return generateOGImage(
    { title: "Talks & Exhibitions", subtitle: "Speaking about AI agents, avatars, and spatial systems." },
    size
  );
}
