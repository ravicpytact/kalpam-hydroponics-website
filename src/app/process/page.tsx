import { Section } from "@/components/ui/Section";
import { CtaLink } from "@/components/ui/CtaLink";

export default function ProcessPage() {
  return (
    <>
      <h1>Process</h1>
      {/* TODO: sections from info.md / wireframes/process.md */}
      <Section title="Process Overview">
        <p>TODO: enquiry → assessment → recommendation → execution → aftercare</p>
        <CtaLink href="/contact/">Book an Initial Discussion</CtaLink>
      </Section>
      <Section title="Step 1 Discovery and Site Assessment">
        <p>TODO: discovery and site assessment details</p>
      </Section>
      <Section title="Step 2 Recommendation and Planning">
        <p>TODO: recommendation and planning details</p>
      </Section>
      <Section title="Step 3 Development and Installation">
        <p>TODO: development and installation details</p>
      </Section>
      <Section title="Step 4 Handover and Maintenance">
        <p>TODO: handover and maintenance, terms TBD, client</p>
      </Section>
      <Section title="Common Questions and Final CTA">
        <p>TODO: FAQs, factual answers TBD, client</p>
        <CtaLink href="/contact/">Talk to a Landscaping Expert</CtaLink>
      </Section>
    </>
  );
}
