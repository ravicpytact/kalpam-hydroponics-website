import type { Metadata } from "next";
import { CompanyStoryAbout } from "@/components/sections/about/CompanyStoryAbout";
import { DifferentiatorAbout } from "@/components/sections/about/DifferentiatorAbout";
import { HeroAbout } from "@/components/sections/about/HeroAbout";
import { ProofAbout } from "@/components/sections/about/ProofAbout";
import { TeamAbout } from "@/components/sections/about/TeamAbout";
import { ValuesAbout } from "@/components/sections/about/ValuesAbout";
import { ABOUT_META } from "@/lib/about-content";

export const metadata: Metadata = {
  title: `${ABOUT_META.title} | KALPAM LANDSCAPING`,
  description: ABOUT_META.description,
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <HeroAbout />
      <CompanyStoryAbout />
      <TeamAbout />
      <DifferentiatorAbout />
      <ValuesAbout />
      <ProofAbout />
    </div>
  );
}
