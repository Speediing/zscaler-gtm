import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "rep",
    name: "Every Zscaler seller",
    blurb: "The seller stays in control. Their agents prepare the work.",
    color: "#F6F0E4",
    mark: "AE",
    seat: true,
  },
  {
    id: "brief",
    name: "Discovery Brief",
    blurb: "Turns approved live notes into the next-meeting brief.",
    jobId: "discovery-brief",
    color: "#0065A8",
  },
  {
    id: "answers",
    name: "Answer Desk",
    blurb: "Finds approved answers and keeps unsupported claims out.",
    jobId: "approved-answers",
    color: "#0B3B66",
  },
  {
    id: "outreach",
    name: "Account Research",
    blurb: "Researches target accounts and prepares reviewed outreach.",
    jobId: "account-outreach",
    color: "#F47B20",
  },
];
