export type JobId =
  | "discovery-brief"
  | "approved-answers"
  | "account-outreach";

export type ParticipantRole = "you" | "bot";

export type Participant = {
  id: string;
  name: string;
  role: ParticipantRole;
  persona?: string;
  color?: string;
};

export type MessageKind = "text" | "draft" | "routine" | "system";

export type SlideCard = {
  n: number;
  title: string;
  body: string;
  kicker?: string;
};

export type StoryScene = "call" | "notes" | "deck" | "inspect" | "send";

export type StoryVisual =
  | {
      kind: "live-call";
      title: string;
      people: { initials: string; name: string }[];
    }
  | {
      kind: "discovery-notes";
      title: string;
      notes: string[];
      status: string;
    }
  | {
      kind: "deck-update";
      eyebrow: string;
      headline: string;
      product: string;
      status: string;
    }
  | {
      kind: "request-email";
      sender: string;
      subject: string;
      status: string;
    }
  | {
      kind: "answers-found";
      sources: { name: string; answer: string }[];
      status: string;
    }
  | {
      kind: "reply-ready";
      to: string;
      subject: string;
      status: string;
    }
  | {
      kind: "account-research";
      account: string;
      sources: string[];
      signal: string;
    }
  | {
      kind: "three-why";
      items: { label: string; answer: string }[];
    }
  | {
      kind: "outreach-ready";
      person: string;
      channels: string[];
      status: string;
    };

export type StoryBeat = {
  label: string;
  scene: StoryScene;
  when?: string;
  slides?: SlideCard[];
  artifact?: Artifact;
  visual?: StoryVisual;
};

export type Artifact =
  | {
      kind: "slides";
      title: string;
      cards: SlideCard[];
    }
  | {
      kind: "one-pager";
      title: string;
      eyebrow?: string;
      sections: { heading: string; body: string }[];
    }
  | {
      kind: "packet";
      title: string;
      fields: { label: string; value: string }[];
    }
  | {
      kind: "answers";
      title: string;
      label: string;
      checks: {
        question: string;
        answer: string;
        source: string;
        status: "approved" | "tbd";
      }[];
      reply: {
        to: string;
        subject: string;
        body: string;
      };
    }
  | {
      kind: "outbound";
      title: string;
      account: string;
      hypothesis: { k: string; body: string }[];
      evidence: { source: string; finding: string }[];
      targets: { name: string; role: string; why: string }[];
      page: { headline: string; body: string };
      drafts: {
        channel: "LinkedIn" | "Email";
        to: string;
        subject?: string;
        body: string;
      }[];
    }
  | {
      kind: "linkedin";
      title: string;
      to: string;
      role?: string;
      body: string;
    }
  | {
      kind: "gmail";
      title: string;
      to: string;
      subject: string;
      body: string;
    };

export type DemoMessage = {
  id: string;
  from: string;
  kind: MessageKind;
  body?: string;
  draftLabel?: string;
  artifact?: Artifact;
  delayMs?: number;
};

export type DemoThread = {
  title: string;
  subtitle: string;
  participants: Participant[];
  messages: DemoMessage[];
};

export type SalesJob = {
  id: JobId;
  number: number;
  title: string;
  trigger: string;
  backgroundAction: string;
  problem: string;
  botJob: string;
  storyboard: StoryBeat[];
  unlock: string;
  outcome: string;
  clips: string[];
  demo: DemoThread;
};

export type Quote = {
  name: string;
  handle: string;
  date: string;
  avatar: string;
  quote: string;
  source: string;
};
