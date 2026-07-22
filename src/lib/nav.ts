import type { NavItem } from "@/types";

export const PRIMARY_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/process/", label: "Process" },
  { href: "/contact/", label: "Contact" },
];

export const HEADER_CTA = {
  href: "/contact/",
  label: "Request a Site Visit",
} as const;

/** WhatsApp number + opening message: TBD — client */
export const WHATSAPP = {
  href: "#",
  label: "Chat on WhatsApp",
  available: false,
} as const;
