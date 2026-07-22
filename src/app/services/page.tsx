import { Section } from "@/components/ui/Section";
import { CtaLink } from "@/components/ui/CtaLink";

export default function ServicesPage() {
  return (
    <>
      <h1>Services</h1>
      {/* TODO: sections from info.md / wireframes/services.md */}
      <Section title="Services Introduction">
        <p>TODO: overview for residential, commercial, industrial, farmhouse, public-sector</p>
        <CtaLink href="/contact/">Request a Site Assessment</CtaLink>
      </Section>
      <Section title="Farmhouse Garden Development">
        <p>TODO: service details</p>
      </Section>
      <Section title="Indoor Office and Home Gardens">
        <p>TODO: service details, AMC terms TBD, client</p>
      </Section>
      <Section title="Vertical Gardens">
        <p>TODO: service details</p>
      </Section>
      <Section title="Industrial Gardens">
        <p>TODO: service details</p>
      </Section>
      <Section title="Annual Maintenance Contracts">
        <p>TODO: AMC details, terms TBD, client</p>
      </Section>
      <Section title="Service Enquiry">
        <p>TODO: enquiry prompt + form/WhatsApp pathways</p>
        <CtaLink href="/contact/">Get a Customized Recommendation</CtaLink>
      </Section>
    </>
  );
}
