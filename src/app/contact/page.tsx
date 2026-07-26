import { ContactEnquirySection } from "@/components/sections/contact/ContactEnquirySection";
import { HeroContact } from "@/components/sections/contact/HeroContact";
import { CONTACT_META } from "@/lib/contact-content";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  pathname: "/contact/",
  title: CONTACT_META.title,
  description: CONTACT_META.description,
});

export default function ContactPage() {
  return (
    <div className="contact-page">
      <HeroContact />
      <ContactEnquirySection />
    </div>
  );
}
