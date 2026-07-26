import { HeroServices } from "@/components/sections/services/HeroServices";
import { ServiceLineSection } from "@/components/sections/services/ServiceLineSection";
import { ServicesEnquiry } from "@/components/sections/services/ServicesEnquiry";
import { SERVICE_LINES, SERVICES_META } from "@/lib/services-content";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  pathname: "/services/",
  title: SERVICES_META.title,
  description: SERVICES_META.description,
});

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
