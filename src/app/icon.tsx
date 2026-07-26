import { renderKalpamIcon } from "@/lib/render-kalpam-icon";

export const runtime = "nodejs";
export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return renderKalpamIcon(48);
}
