import type { Metadata } from "next";
import { HeroHome } from "@/components/sections/home/HeroHome";
import { CredibilityHome } from "@/components/sections/home/CredibilityHome";
import { ServicesOverviewHome } from "@/components/sections/home/ServicesOverviewHome";
import { ScientificApproachHome } from "@/components/sections/home/ScientificApproachHome";
import { BeforeAfterHome } from "@/components/sections/home/BeforeAfterHome";
import { TestimonialsEnquiryHome } from "@/components/sections/home/TestimonialsEnquiryHome";
import { DEFAULT_DESCRIPTION, pageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = pageMetadata({
  pathname: "/",
  description: DEFAULT_DESCRIPTION,
});

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroHome />
      <CredibilityHome />
      <ServicesOverviewHome />
      <ScientificApproachHome />
      <BeforeAfterHome />
      <TestimonialsEnquiryHome />
    </div>
  );
}
