export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export type HeroJobs = readonly [
  HeroJob,
  HeroJob,
  HeroJob,
  HeroJob,
  HeroJob,
  HeroJob,
  HeroJob,
  HeroJob,
];

export const HERO_JOBS = [
  {
    name: "Sales Outbound",
    icon: "outbound",
    account: "Target account",
    signal: "Illustrative outreach review",
    work:
      "I checked the account brief. The priority, timing, and contact are still TBD. I drafted a note that asks for discovery instead of assuming facts.",
    result: "Reviewed outreach draft ready",
    user: "keep it queued for my review",
    bot: "queued. nothing will send without your approval.",
  },
  {
    name: "Account Research",
    icon: "research",
    account: "Target account",
    signal: "Account research requested",
    work:
      "I collected approved public sources. The account priority, current trigger, and owner are still TBD. I marked each open field.",
    result: "Account brief ready for review",
    user: "show me the open fields",
    bot: "ready. every unknown is marked TBD.",
  },
  {
    name: "Call Follow-up",
    icon: "follow-up",
    account: "Discovery follow-up",
    signal: "Illustrative discovery notes ready",
    work:
      "I organized the notes without attributing a quote. The workflow, owner, and value are still TBD. I drafted the next-meeting brief.",
    result: "Reviewed brief and deck ready",
    user: "queue both for my review",
    bot: "queued. both still need your approval.",
  },
  {
    name: "Deal Desk",
    icon: "deal-desk",
    account: "Customer account",
    signal: "Approved answer review requested",
    work:
      "I found the approved AI security positioning. I left account-specific terms and value as TBD and drafted a sourced response.",
    result: "Sourced response ready for review",
    user: "hold it for approval",
    bot: "held. unsupported claims are marked TBD.",
  },
  {
    name: "Pipeline Health",
    icon: "pipeline",
    account: "Pipeline review",
    signal: "Pipeline review task queued",
    work:
      "I organized the open account tasks. I did not add stage, value, timing, or contact facts. Each gap is ready for seller review.",
    result: "Pipeline review draft ready",
    user: "show me the gaps",
    bot: "ready. nothing changed in the source systems.",
  },
  {
    name: "Renewal Risk",
    icon: "renewal",
    account: "Customer account",
    signal: "Renewal review requested",
    work:
      "I prepared a review checklist. Usage, value, owner, and timing are still TBD. The seller can fill them before any outreach.",
    result: "Renewal checklist ready",
    user: "queue it for account review",
    bot: "queued. outreach still needs your approval.",
  },
  {
    name: "Competitive Intel",
    icon: "competitive",
    account: "Customer account",
    signal: "Competitive review requested",
    work:
      "I prepared a neutral review template. The competitor, buyer concern, and proof points are TBD. No competitor is named in this sample.",
    result: "Competitive review draft ready",
    user: "hold until I add sources",
    bot: "held. I will not add an unsupported claim.",
  },
  {
    name: "Sales Chief of Staff",
    icon: "chief-of-staff",
    account: "Weekly operating review",
    signal: "Operating review task queued",
    work:
      "I collected the open seller tasks. Account priorities, owners, timing, and value stay TBD until the team confirms them.",
    result: "Operating review draft ready",
    user: "queue the brief for review",
    bot: "queued. the brief still needs your approval.",
  },
] satisfies HeroJobs;
