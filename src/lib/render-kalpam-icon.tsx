import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

const LOGO_PATH = path.join(process.cwd(), "public/images/shared/logos/kalpam-logo.png");

/** Enlarge mark within square — source PNG has extra padding around the K. */
const LOGO_FILL = 1.5;

export async function renderKalpamIcon(size: number) {
  const logoData = await readFile(LOGO_PATH);
  const src = `data:image/png;base64,${logoData.toString("base64")}`;
  const logoPx = Math.round(size * LOGO_FILL);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F5F0",
        }}
      >
        {/* ImageResponse img — not Next/Image */}
        <img src={src} width={logoPx} height={logoPx} alt="" />
      </div>
    ),
    { width: size, height: size },
  );
}
