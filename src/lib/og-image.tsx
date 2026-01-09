import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

// Theme configuration - set to 'light' or 'dark'
const THEME: "light" | "dark" = "dark";

// Colors matching the site's CSS variables
const colors = {
  light: {
    background: "#fafafa",
    foreground: "#171717",
    muted: "#404040",
  },
  dark: {
    background: "#0a0a0a",
    foreground: "#ededed",
    muted: "#a3a3a3",
  },
};

// Load Geist Mono font from node_modules
async function loadGeistFont(filename: string): Promise<ArrayBuffer> {
  const fontPath = join(process.cwd(), "node_modules", "geist", "dist", "fonts", "geist-mono", filename);
  const buffer = await readFile(fontPath);
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

interface OGImageOptions {
  width: number;
  height: number;
}

interface OGImageProps {
  title?: string;
  subtitle?: string;
}

export async function generateOGImage(
  props: OGImageProps,
  options: OGImageOptions
): Promise<ImageResponse> {
  const { width, height } = options;
  const { title = "Gwendall", subtitle } = props;
  const theme = colors[THEME];

  // Load fonts
  const [fontRegular, fontBold] = await Promise.all([
    loadGeistFont("GeistMono-Regular.ttf"),
    loadGeistFont("GeistMono-Bold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: theme.background,
          fontFamily: "Geist Mono",
        }}
      >
        {/* Title */}
        <div
          style={{
            display: "flex",
            color: theme.foreground,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          {title}
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            color: theme.muted,
            fontSize: 32,
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: 900,
          }}
        >
          {subtitle ?? "Gwendall"}
        </div>
      </div>
    ),
    {
      width,
      height,
      fonts: [
        {
          name: "Geist Mono",
          data: fontRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist Mono",
          data: fontBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
