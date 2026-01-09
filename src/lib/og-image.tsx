import { ImageResponse } from "next/og";

// Theme configuration - set to 'light' or 'dark'
const THEME: "light" | "dark" = "dark";

// Font sizes
const TITLE_FONT_SIZE = 84;
const MAX_SUBTITLE_WIDTH = 1040; // 1200 - 80*2 padding
const MAX_SUBTITLE_LINES = 2;

// System monospace font stack (no custom font loading needed)
const FONT_FAMILY = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// Calculate subtitle font size to fit in 2 lines max
function getSubtitleFontSize(text: string): number {
  const charWidth = 0.6; // approximate char width ratio for monospace
  const maxCharsPerLine = MAX_SUBTITLE_WIDTH / (TITLE_FONT_SIZE * charWidth);
  const totalChars = text.length;
  const linesNeeded = totalChars / maxCharsPerLine;
  
  if (linesNeeded <= MAX_SUBTITLE_LINES) {
    return TITLE_FONT_SIZE;
  }
  
  // Scale down to fit in 2 lines
  const scaleFactor = MAX_SUBTITLE_LINES / linesNeeded;
  const newSize = Math.floor(TITLE_FONT_SIZE * scaleFactor);
  return Math.max(newSize, 36); // minimum 36px
}

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

export async function generateOGImage(
  props: OGImageProps,
  options: OGImageOptions
): Promise<ImageResponse> {
  const { width, height } = options;
  const { title = "Gwendall", subtitle } = props;
  const theme = colors[THEME];
  const subtitleFontSize = subtitle ? getSubtitleFontSize(subtitle) : TITLE_FONT_SIZE;

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
          fontFamily: FONT_FAMILY,
        }}
      >
        {/* Title */}
        <div
          style={{
            display: "flex",
            color: theme.foreground,
            fontSize: TITLE_FONT_SIZE,
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: subtitle ? 32 : 0,
          }}
        >
          {title}
        </div>
        
        {/* Subtitle - only if provided */}
        {subtitle && (
          <div
            style={{
              display: "flex",
              color: theme.muted,
              fontSize: subtitleFontSize,
              fontWeight: 400,
              lineHeight: 1.3,
              maxWidth: MAX_SUBTITLE_WIDTH,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    ),
    {
      width,
      height,
    }
  );
}
