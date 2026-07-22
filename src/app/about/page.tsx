import { Section } from "@/components/ui/Section";
import { CtaLink } from "@/components/ui/CtaLink";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      {/* TODO: sections from info.md / wireframes/about.md */}
      <Section title="Company Story">
        <p>TODO: origin story, focus, service area TBD, client</p>
        <CtaLink href="/contact/">Tell Us About Your Property</CtaLink>
      </Section>
      <Section title="Horticulturist-Led Team">
        <p>TODO: team overview and roles, credentials TBD, client</p>
      </Section>
      <Section title="How Kalpam Works Differently">
        <p>TODO: scientific assessment differentiation</p>
        <CtaLink href="/process/">See Our Working Process</CtaLink>
      </Section>
      <Section title="Values and Service Promise">
        <p>TODO: values list, warranty wording TBD, client</p>
      </Section>
      <Section title="Proof and Trust">
        <p>TODO: reviews, logos, stats, testimonials TBD, client</p>
      </Section>
    </>
  );
}
