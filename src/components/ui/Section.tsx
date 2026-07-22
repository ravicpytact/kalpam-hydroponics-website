import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  const classes = ["section", className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes}>
      {title ? (
        <div className="container">
          <h2 className="section__title">{title}</h2>
        </div>
      ) : null}
      {children}
    </section>
  );
}
