import { Section } from "@/components/ui/Section";
import { CtaLink } from "@/components/ui/CtaLink";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      {/* TODO: sections from info.md / wireframes/contact.md */}
      <Section title="Contact Introduction">
        <p>TODO: invitation + info needed for first response</p>
        <CtaLink href="#">Chat on WhatsApp</CtaLink>
        {/* WhatsApp number TBD — client */}
      </Section>
      <Section title="Contact Form">
        {/* Single Foundation form — wired in later stage */}
        <form>
          <label>
            Name
            <input name="name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" />
          </label>
          <label>
            Phone or WhatsApp number
            <input name="phone" type="tel" />
          </label>
          <label>
            Property or organization type
            <input name="propertyType" />
          </label>
          <label>
            Service interest
            <input name="serviceInterest" required />
          </label>
          <label>
            Project location
            <input name="projectLocation" required />
          </label>
          <label>
            Message or site requirement
            <textarea name="message" required />
          </label>
          <label>
            <input name="consent" type="checkbox" required />
            Consent: privacy wording TBD, client
          </label>
          {/* TODO: honeypot or hCaptcha */}
          <Button type="submit">Submit Your Enquiry</Button>
        </form>
      </Section>
      <Section title="Business Details">
        <p>Phone, email, address, service areas, hours: TBD, client</p>
      </Section>
      <Section title="What Happens Next">
        <p>TODO: received confirmation, follow-up expectation TBD, client</p>
      </Section>
    </>
  );
}
