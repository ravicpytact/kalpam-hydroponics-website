import type { Metadata } from "next";
import { HeroServices } from "@/components/sections/services/HeroServices";
import { ServiceLineSection } from "@/components/sections/services/ServiceLineSection";
import { ServicesEnquiry } from "@/components/sections/services/ServicesEnquiry";
import { SERVICE_LINES, SERVICES_META } from "@/lib/services-content";

export const metadata: Metadata = {
  title: `${SERVICES_META.title} | KALPAM LANDSCAPING`,
  description: SERVICES_META.description,
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <HeroServices />
      {SERVICE_LINES.map((service, index) => (
        <ServiceLineSection
          key={service.id}
          service={service}
          reverse={index % 2 === 1}
        />
      ))}
      <ServicesEnquiry />
    </div>
  );
}
