import { ImageResponse } from "next/og";

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

interface OGImageOptions {
  width: number;
  height: number;
}

interface OGImageProps {
  title?: string;
  subtitle?: string;
}

export function generateOGImage(
  props: OGImageProps,
  options: OGImageOptions
): ImageResponse {
  const { width, height } = options;
  const { title = "Gwendall", subtitle } = props;
  const theme = colors[THEME];

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
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Title */}
        <div
          style={{
            display: "flex",
            color: theme.foreground,
            fontSize: 72,
            fontWeight: 800,
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
    }
  );
}
