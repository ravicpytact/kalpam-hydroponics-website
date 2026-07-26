import { HeroProcess } from "@/components/sections/process/HeroProcess";
import { ProcessFaq } from "@/components/sections/process/ProcessFaq";
import { ProcessJourney } from "@/components/sections/process/ProcessJourney";
import { ProcessSteps } from "@/components/sections/process/ProcessSteps";
import { PROCESS_META } from "@/lib/process-content";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  pathname: "/process/",
  title: PROCESS_META.title,
  description: PROCESS_META.description,
});

export default function ProcessPage() {
  return (
    <div className="process-page">
      <HeroProcess />
      <ProcessJourney />
      <ProcessSteps />
      <ProcessFaq />
    </div>
  );
}
