import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactSidebar } from "@/components/sections/contact/ContactSidebar";
import { CONTACT_FORM } from "@/lib/contact-content";

export function ContactEnquirySection() {
  return (
    <section className="section contact-enquiry" id="contact-enquiry" aria-labelledby="contact-form-heading">
      <Container>
        <div className="contact-enquiry__grid about-story__grid">
          <div className="contact-enquiry__form-wrap" id="contact-form">
            <header className="contact-enquiry__form-header">
              <h2 id="contact-form-heading" className="about-story__title">
                {CONTACT_FORM.title}
              </h2>
              <p className="about-story__lead">{CONTACT_FORM.intro}</p>
            </header>
            <ContactForm />
          </div>
          <ContactSidebar />
        </div>
      </Container>
    </section>
  );
}
