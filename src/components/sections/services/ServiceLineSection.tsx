import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { SERVICE_LINES } from "@/lib/services-content";

type ServiceLine = (typeof SERVICE_LINES)[number];

type Props = {
  service: ServiceLine;
  reverse?: boolean;
};

export function ServiceLineSection({ service, reverse = false }: Props) {
  const headingId = `service-${service.id}-heading`;

  return (
    <section
      className={`section service-detail${reverse ? " service-detail--reverse" : ""}`}
      id={service.id}
      aria-labelledby={headingId}
    >
      <Container>
        <div className="service-detail__grid home-scientific__grid">
          <div className="service-detail__media home-scientific__media">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              width={960}
              height={720}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="service-detail__copy">
            <h2 id={headingId} className="about-story__title">
              {service.title}
            </h2>
            <p className="service-detail__summary">{service.summary}</p>
            {service.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="service-detail__body">
                {paragraph}
              </p>
            ))}
            {"termsNote" in service && service.termsNote ? (
              <p className="about-story__note service-detail__terms" role="note">
                {service.termsNote}
              </p>
            ) : null}
            <CtaLink href={service.cta.href} variant="primary">
              {service.cta.label}
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
