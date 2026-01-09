import { generateOGImage } from "@/lib/og-image";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return generateOGImage(
    { title: "Works", subtitle: "Projects and experiments, some unreleased." },
    size
  );
}
