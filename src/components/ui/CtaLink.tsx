import Link from "next/link";
import type { ReactNode } from "react";

type CtaVariant = "primary" | "secondary" | "ghost";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  disabled?: boolean;
  title?: string;
  onClick?: () => void;
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  disabled = false,
  title,
  onClick,
  className,
}: CtaLinkProps) {
  const classes = [
    "cta-link",
    `cta-link--${variant}`,
    disabled ? "cta-link--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (disabled) {
    return (
      <span className={classes} title={title} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={classes} title={title} onClick={onClick}>
      {children}
    </Link>
  );
}
