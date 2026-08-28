import type { JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gmail"
  | "gdoc"
  | "linkedin"
  | "research"
  | "page";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const figma = { id: "figma", host: "figma.com", label: "Figma" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const gdoc = { id: "gdoc", host: "docs.google.com", label: "Docs" };
const linkedin = {
  id: "linkedin",
  host: "www.linkedin.com",
  label: "LinkedIn",
};
const research = {
  id: "research",
  host: "target-account.example",
  label: "Public research",
};
const accountPage = {
  id: "page",
  host: "target-account.grok.page",
  label: "Account page",
};

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "discovery-brief": {
    m1: {
      pill: "Opening the discovery note",
      host: "granola.app",
      path: "/notes/target-account-discovery",
      title: "Target account discovery",
      site: "granola",
      tabs: [granola, figma, gdoc],
    },
    m2: {
      pill: "Separating approved context from TBD fields",
      host: "granola.app",
      path: "/notes/target-account-discovery",
      title: "Target account discovery",
      site: "granola",
      tabs: [granola, figma, gdoc],
    },
    m3: {
      pill: "Building the next-meeting deck",
      host: "figma.com",
      path: "/file/target-account-next-meeting",
      title: "Target account next-meeting brief",
      site: "figma",
      tabs: [granola, figma, gdoc],
    },
    m4: {
      pill: "Writing the meeting checklist",
      host: "docs.google.com",
      path: "/document/d/target-account-questions",
      title: "Target account questions",
      site: "gdoc",
      tabs: [granola, figma, gdoc],
    },
    m5: {
      pill: "Drafts parked for review",
      host: "docs.google.com",
      path: "/document/d/target-account-questions",
      title: "Target account questions",
      site: "gdoc",
      tabs: [granola, figma, gdoc],
    },
  },
  "approved-answers": {
    m1: {
      pill: "Opening the customer question",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m2: {
      pill: "Checking approved sources",
      host: "docs.google.com",
      path: "/document/d/approved-ai-security",
      title: "Approved AI security material",
      site: "gdoc",
      tabs: [gmail, gdoc],
    },
    m3: {
      pill: "Building the sourced answer pack",
      host: "docs.google.com",
      path: "/document/d/approved-answer-pack",
      title: "Approved answer pack",
      site: "gdoc",
      tabs: [gmail, gdoc],
    },
    m4: {
      pill: "Drafting the response in Gmail",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m5: {
      pill: "Response parked for review",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
  },
  "account-outreach": {
    m1: {
      pill: "Opening public account sources",
      host: "target-account.example",
      path: "/company",
      title: "Target account public site",
      site: "research",
      tabs: [research, gdoc, linkedin, gmail, accountPage],
    },
    m2: {
      pill: "Checking for a verified account trigger",
      host: "target-account.example",
      path: "/public-information",
      title: "Target account public information",
      site: "research",
      tabs: [research, gdoc, linkedin, gmail, accountPage],
    },
    m3: {
      pill: "Writing the account hypothesis",
      host: "docs.google.com",
      path: "/document/d/target-account-hypothesis",
      title: "Target account hypothesis",
      site: "gdoc",
      tabs: [research, gdoc, linkedin, gmail, accountPage],
    },
    m4: {
      pill: "Writing the research checklist",
      host: "docs.google.com",
      path: "/document/d/target-account-research",
      title: "Target account research",
      site: "gdoc",
      tabs: [research, gdoc, linkedin, gmail, accountPage],
    },
    m5: {
      pill: "Drafting a LinkedIn message",
      host: "www.linkedin.com",
      path: "/messaging/compose",
      title: "Message",
      site: "linkedin",
      tabs: [research, gdoc, linkedin, gmail, accountPage],
    },
    m6: {
      pill: "Drafting an email",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [research, gdoc, linkedin, gmail, accountPage],
    },
    m7: {
      pill: "Building the account page",
      host: "target-account.grok.page",
      path: "/ai-security",
      title: "AI security at Target account",
      site: "page",
      tabs: [research, gdoc, linkedin, gmail, accountPage],
    },
    m8: {
      pill: "Drafts parked for review",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [research, gdoc, linkedin, gmail, accountPage],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
