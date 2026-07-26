import {
  ClipboardCheck,
  Droplets,
  MessageCircle,
  PenLine,
  Shovel,
  type LucideIcon,
} from "lucide-react";

/** Lucide icons — https://lucide.dev (ISC, common on modern marketing sites). */
export const PROCESS_JOURNEY_ICONS: Record<
  "enquiry" | "assessment" | "recommendation" | "execution" | "aftercare",
  LucideIcon
> = {
  enquiry: MessageCircle,
  assessment: ClipboardCheck,
  recommendation: PenLine,
  execution: Shovel,
  aftercare: Droplets,
};

type PhaseId = keyof typeof PROCESS_JOURNEY_ICONS;

type Props = {
  phaseId: PhaseId;
};

export function ProcessJourneyIcon({ phaseId }: Props) {
  const Icon = PROCESS_JOURNEY_ICONS[phaseId];

  return (
    <Icon
      className="process-journey__icon-img"
      size={48}
      strokeWidth={1.75}
      aria-hidden
    />
  );
}
