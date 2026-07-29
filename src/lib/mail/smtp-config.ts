import "server-only";

import type { Transporter } from "nodemailer";
import nodemailer from "nodemailer";
import { SITE_CONTACT } from "@/lib/site-contact";

export type SmtpConfig = {
  host: string;
  port: number;
  /** SMTP login — used only for authentication. */
  authUser: string;
  authPass: string;
  /** From address on outgoing enquiry emails (SMTP_FROM). */
  sender: string;
  /** Inbox that receives form submissions (CONTACT_FORM_TO). */
  recipient: string;
};

function readRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getSmtpConfig(): SmtpConfig {
  const host = readRequiredEnv("SMTP_HOST");
  const authUser = readRequiredEnv("SMTP_USER");
  const authPass = readRequiredEnv("SMTP_PASS");
  const sender = readRequiredEnv("SMTP_FROM");
  const recipient =
    process.env.CONTACT_FORM_TO?.trim() || SITE_CONTACT.email.formRecipient;
  const port = Number(process.env.SMTP_PORT ?? "465");

  if (!Number.isFinite(port) || port <= 0) {
    throw new Error("SMTP_PORT must be a valid port number.");
  }

  return { host, port, authUser, authPass, sender, recipient };
}

export function createSmtpTransporter(config: SmtpConfig): Transporter {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.authUser,
      pass: config.authPass,
    },
  });
}
