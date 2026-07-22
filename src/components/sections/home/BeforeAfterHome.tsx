import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { BeforeAfterCompare } from "@/components/ui/BeforeAfterCompare";
import { Section } from "@/components/ui/Section";
import { HOME_BEFORE_AFTER } from "@/lib/home-content";

export function BeforeAfterHome() {
  const { pairs, cta } = HOME_BEFORE_AFTER;

  return (
    <Section className="home-before-after" title={HOME_BEFORE_AFTER.title}>
      <Container>
        <ul className="home-before-after__grid">
          {pairs.map((pair) => (
            <li key={pair.id} className="home-before-after__pair">
              <BeforeAfterCompare
                beforeSrc={pair.before.src}
                afterSrc={pair.after.src}
                beforeAlt={pair.before.alt}
                afterAlt={pair.after.alt}
              />
              <p className="home-before-after__caption">{pair.caption}</p>
            </li>
          ))}
        </ul>
        <div className="home-before-after__cta">
          <CtaLink href={cta.href} variant="primary">
            {cta.label}
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}
