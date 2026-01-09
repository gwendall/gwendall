import { generateOGImage } from "@/lib/og-image";
import { SITE_NAME, SITE_DESCRIPTION } from "@/data/constants";

export const dynamic = "force-static";

// Twitter card image - same as OG for summary_large_image
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return generateOGImage(
    { title: SITE_NAME.toUpperCase(), subtitle: SITE_DESCRIPTION },
    size
  );
}
