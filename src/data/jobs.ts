import type { Artifact, SalesJob, SlideCard } from "./types";

export const DISCOVERY_DECK: SlideCard[] = [
  {
    n: 1,
    kicker: "Illustrative sample",
    title: "Meeting goal",
    body: "Confirm which AI applications, agents, or workflows need protection.",
  },
  {
    n: 2,
    kicker: "Approved context",
    title: "Cybersecurity for the AI era",
    body: "Zscaler is positioning around cybersecurity for the AI era.",
  },
  {
    n: 3,
    kicker: "Discovery to confirm",
    title: "Keep unknowns visible",
    body: "The current process, priority, owner, and value are still TBD.",
  },
  {
    n: 4,
    kicker: "Next meeting",
    title: "Questions before claims",
    body: "Confirm the workflow, the owner, and the desired outcome before sharing a recommendation.",
  },
];

export const APPROVED_ANSWER: Extract<
  Artifact,
  { kind: "answers" }
> = {
  kind: "answers",
  title: "Approved answer pack",
  label: "Illustrative sample",
  checks: [
    {
      question: "How does Zscaler frame AI security?",
      answer: "Cybersecurity for the AI era.",
      source: "Approved positioning",
      status: "approved",
    },
    {
      question: "What platform direction can the seller cite?",
      answer:
        "Zero Trust Exchange is expanding to secure AI applications, agents, and workflows.",
      source: "Approved positioning",
      status: "approved",
    },
    {
      question: "What account-specific value is confirmed?",
      answer: "TBD. Do not add an unsupported claim.",
      source: "Account plan",
      status: "tbd",
    },
  ],
  reply: {
    to: "Customer contact (illustrative)",
    subject: "Follow-up on AI security",
    body: "Hi,\n\nZscaler is positioning around cybersecurity for the AI era. Zero Trust Exchange is expanding to secure AI applications, agents, and workflows.\n\nThe account-specific workflow, owner, and value are still TBD. We can use the next conversation to confirm those points before making a recommendation.\n\nBest,",
  },
};

export const OUTREACH_PACK: Extract<
  Artifact,
  { kind: "outbound" }
> = {
  kind: "outbound",
  title: "Target account outreach pack",
  account: "Target account",
  hypothesis: [
    {
      k: "Why this account",
      body: "TBD. Add one verified public priority before sending.",
    },
    {
      k: "Why now",
      body: "TBD. Add one current public trigger before sending.",
    },
    {
      k: "Why Zscaler",
      body:
        "Zscaler is expanding Zero Trust Exchange to secure AI applications, agents, and workflows.",
    },
  ],
  evidence: [
    {
      source: "Target account public site",
      finding: "Placeholder. Add one verified business priority.",
    },
    {
      source: "Approved internal account record",
      finding: "No account-specific evidence is included in this sample.",
    },
  ],
  targets: [
    {
      name: "Target contact",
      role: "Target role",
      why: "Confirm that this person owns or supports AI security before sending.",
    },
  ],
  page: {
    headline: "A starting point for securing AI work at Target account",
    body:
      "Illustrative sample. Zscaler is expanding Zero Trust Exchange to secure AI applications, agents, and workflows. Confirm the target workflow and owner in discovery.",
  },
  drafts: [
    {
      channel: "LinkedIn",
      to: "Target contact",
      body:
        "Hi. I am researching how Target account is approaching security for AI applications, agents, and workflows. If this is in your scope, would a short discovery conversation be useful? This is an illustrative draft. Verify the contact and account context before sending.",
    },
    {
      channel: "Email",
      to: "Target contact",
      subject: "AI security at Target account",
      body:
        "Hi,\n\nZscaler is expanding Zero Trust Exchange to secure AI applications, agents, and workflows. I would like to understand which AI workflows matter at Target account and who owns the security path.\n\nThis is an illustrative draft. Add a verified account trigger before sending.\n\nBest,",
    },
  ],
};

export const JOBS: SalesJob[] = [
  {
    id: "discovery-brief",
    number: 1,
    title: "Turn discovery into the next-meeting brief",
    trigger: "A discovery call starts",
    backgroundAction: "Capturing approved notes and building the follow-up deck",
    problem:
      "Live discovery creates notes, open questions, and follow-up work. A new seller can lose the thread while moving it into a deck.",
    botJob:
      "Grok Bot captures approved notes, keeps unknowns marked TBD, and drafts the next-meeting brief. It does not invent a quote.",
    storyboard: [
      {
        when: "During discovery",
        label: "Grok Bot opens the note and follows the live conversation.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Illustrative discovery",
          people: [
            { initials: "AE", name: "Seller" },
            { initials: "TC", name: "Target contact" },
            { initials: "SE", name: "Specialist" },
          ],
        },
      },
      {
        when: "As notes arrive",
        label: "It separates approved context from points that are still TBD.",
        scene: "notes",
        visual: {
          kind: "discovery-notes",
          title: "Illustrative notes",
          notes: [
            "AI security is the discovery topic.",
            "Current workflow and owner are TBD.",
            "No customer quote is attributed.",
          ],
          status: "Notes organized",
        },
      },
      {
        when: "Before the next meeting",
        label: "It turns the clean note into a short follow-up deck.",
        scene: "deck",
        visual: {
          kind: "deck-update",
          eyebrow: "Illustrative sample",
          headline: "Next-meeting brief",
          product: "Secure AI apps, agents, and workflows",
          status: "Draft finished",
        },
      },
      {
        when: "Finished artifact",
        label: "The seller gets a complete brief with unknowns left as TBD.",
        scene: "deck",
        slides: DISCOVERY_DECK,
      },
    ],
    unlock:
      "A clean brief is ready for review without an invented quote or account fact.",
    outcome:
      "The call becomes a short next-meeting brief that a new seller can use.",
    clips: [],
    demo: {
      title: "Discovery Brief",
      subtitle: "Live notes to a finished deck",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "brief",
          name: "Discovery Brief",
          role: "bot",
          persona: "Turns approved discovery notes into the next-meeting brief",
          color: "#0065A8",
        },
        {
          id: "deck",
          name: "Deck Builder",
          role: "bot",
          persona: "Builds a short deck and leaves unknowns marked TBD",
          color: "#F47B20",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "brief",
          kind: "routine",
          body:
            "Illustrative discovery started. I am capturing approved notes and marking unknowns as TBD.",
        },
        {
          id: "m2",
          from: "brief",
          kind: "text",
          body:
            "The approved theme is AI security. The workflow, owner, priority, and value are still TBD. I did not attribute a customer quote.",
        },
        {
          id: "m3",
          from: "deck",
          kind: "draft",
          draftLabel: "Next-meeting deck",
          artifact: {
            kind: "slides",
            title: "Target account next-meeting brief",
            cards: DISCOVERY_DECK,
          },
        },
        {
          id: "m4",
          from: "brief",
          kind: "draft",
          draftLabel: "Meeting checklist",
          artifact: {
            kind: "packet",
            title: "Questions to confirm",
            fields: [
              {
                label: "Workflow",
                value: "Which AI application, agent, or workflow is in scope?",
              },
              {
                label: "Owner",
                value: "Who owns the security path?",
              },
              {
                label: "Value",
                value: "What outcome matters to the account?",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "brief",
          kind: "system",
          body: "Nothing sent. The deck and checklist wait for seller review.",
        },
      ],
    },
  },
  {
    id: "approved-answers",
    number: 2,
    title: "Find approved answers and draft the reply",
    trigger: "A customer question arrives",
    backgroundAction: "Checking approved product and internal sources",
    problem:
      "A seller can spend too long searching for a safe answer. The risk is sending a claim that the source does not support.",
    botJob:
      "Grok Bot checks approved product and internal sources, marks missing account context as TBD, and drafts a response for review.",
    storyboard: [
      {
        when: "Question received",
        label: "A generic AI security question reaches the seller.",
        scene: "notes",
        visual: {
          kind: "request-email",
          sender: "Customer contact (illustrative)",
          subject: "Question about securing AI workflows",
          status: "Needs a sourced response",
        },
      },
      {
        when: "Source check",
        label: "Grok Bot finds the approved positioning and keeps gaps visible.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            {
              name: "Approved product material",
              answer: "AI applications, agents, and workflows",
            },
            {
              name: "Approved account plan",
              answer: "Other discovery and value fields are TBD",
            },
            {
              name: "Internal review",
              answer: "No unsupported product claim included",
            },
          ],
          status: "Source check complete",
        },
      },
      {
        when: "Draft ready",
        label: "A short answer is ready for the seller to check.",
        scene: "send",
        visual: {
          kind: "reply-ready",
          to: "Customer contact",
          subject: "Follow-up on AI security",
          status: "Ready for review",
        },
      },
      {
        when: "Finished artifact",
        label: "The answer pack shows every source and every remaining TBD.",
        scene: "send",
        artifact: APPROVED_ANSWER,
      },
    ],
    unlock:
      "The seller gets a sourced draft and can see exactly which claims remain TBD.",
    outcome:
      "Approved answers become a clear response without a long internal search.",
    clips: [],
    demo: {
      title: "Answer Desk",
      subtitle: "Approved sources to a reviewed response",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "answers",
          name: "Answer Desk",
          role: "bot",
          persona: "Finds approved answers and keeps unsupported claims out",
          color: "#0B3B66",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "answers",
          kind: "routine",
          body:
            "Generic sample question received. I am checking approved product material and the account plan.",
        },
        {
          id: "m2",
          from: "answers",
          kind: "text",
          body:
            "I found the approved AI security positioning. Account-specific workflow, owner, and value are still TBD.",
        },
        {
          id: "m3",
          from: "answers",
          kind: "draft",
          draftLabel: "Approved answer pack",
          artifact: APPROVED_ANSWER,
        },
        {
          id: "m4",
          from: "answers",
          kind: "draft",
          draftLabel: "Email response",
          artifact: {
            kind: "gmail",
            title: "AI security follow-up",
            to: APPROVED_ANSWER.reply.to,
            subject: APPROVED_ANSWER.reply.subject,
            body: APPROVED_ANSWER.reply.body,
          },
        },
        {
          id: "m5",
          from: "answers",
          kind: "system",
          body: "Nothing sent. The response waits for seller review.",
        },
      ],
    },
  },
  {
    id: "account-outreach",
    number: 3,
    title: "Research an account and draft personal outreach",
    trigger: "A target account enters the list",
    backgroundAction: "Researching approved public signals and drafting outreach",
    problem:
      "Generic outreach gives the buyer no reason to respond. A new seller needs verified account context before making the message personal.",
    botJob:
      "Grok Bot researches the target account, keeps missing evidence as a placeholder, and drafts outreach that the seller must review.",
    storyboard: [
      {
        when: "Account added",
        label: "Target account enters the list and research starts.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Target account",
          sources: ["Public site", "Public filings", "Approved CRM"],
          signal: "Generic sample. Verify before use.",
        },
      },
      {
        when: "Research organized",
        label: "The account hypothesis separates evidence from open fields.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            {
              label: "Why this account",
              answer: "TBD, add one verified priority",
            },
            {
              label: "Why now",
              answer: "TBD, add one current public trigger",
            },
            {
              label: "Why Zscaler",
              answer: "Secure AI apps, agents, workflows",
            },
          ],
        },
      },
      {
        when: "Drafts ready",
        label: "The seller gets channel-ready drafts with generic placeholders.",
        scene: "send",
        visual: {
          kind: "outreach-ready",
          person: "Target contact (illustrative)",
          channels: ["LinkedIn", "Email", "Account page"],
          status: "Drafts ready. Nothing sent.",
        },
      },
      {
        when: "Finished artifact",
        label: "The final pack includes the hypothesis, sources, contact, and drafts.",
        scene: "send",
        artifact: OUTREACH_PACK,
      },
    ],
    unlock:
      "The seller gets a reviewable outreach pack without a fake company, person, or trigger.",
    outcome:
      "Target account research becomes personal outreach with every placeholder marked.",
    clips: [],
    demo: {
      title: "Account Research",
      subtitle: "Verified context to outreach drafts",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "research",
          name: "Account Research",
          role: "bot",
          persona: "Researches the account and drafts reviewed outreach",
          color: "#F47B20",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "research",
          kind: "routine",
          body:
            "Target account entered the list. I am checking public sources and the approved account record. Drafts only.",
        },
        {
          id: "m2",
          from: "research",
          kind: "text",
          body:
            "No verified account trigger is included in this generic sample. I left the account priority and timing as TBD.",
        },
        {
          id: "m3",
          from: "research",
          kind: "draft",
          draftLabel: "Account hypothesis",
          artifact: {
            kind: "packet",
            title: "Target account hypothesis",
            fields: OUTREACH_PACK.hypothesis.map((item) => ({
              label: item.k,
              value: item.body,
            })),
          },
        },
        {
          id: "m4",
          from: "research",
          kind: "draft",
          draftLabel: "Evidence and target role",
          artifact: {
            kind: "packet",
            title: "Research checklist",
            fields: [
              ...OUTREACH_PACK.evidence.map((item) => ({
                label: item.source,
                value: item.finding,
              })),
              ...OUTREACH_PACK.targets.map((target) => ({
                label: `${target.name}, ${target.role}`,
                value: target.why,
              })),
            ],
          },
        },
        {
          id: "m5",
          from: "research",
          kind: "draft",
          draftLabel: "LinkedIn message",
          artifact: {
            kind: "linkedin",
            title: "LinkedIn draft",
            to: OUTREACH_PACK.drafts[0].to,
            role: "Target role",
            body: OUTREACH_PACK.drafts[0].body,
          },
        },
        {
          id: "m6",
          from: "research",
          kind: "draft",
          draftLabel: "Email",
          artifact: {
            kind: "gmail",
            title: "Email draft",
            to: OUTREACH_PACK.drafts[1].to,
            subject: OUTREACH_PACK.drafts[1].subject || "AI security",
            body: OUTREACH_PACK.drafts[1].body,
          },
        },
        {
          id: "m7",
          from: "research",
          kind: "draft",
          draftLabel: "Account page",
          artifact: {
            kind: "one-pager",
            title: OUTREACH_PACK.page.headline,
            eyebrow: "Illustrative sample",
            sections: [
              {
                heading: "Approved direction",
                body: OUTREACH_PACK.page.body,
              },
              {
                heading: "Before sharing",
                body:
                  "Add a verified account priority, current trigger, and confirmed contact.",
              },
            ],
          },
        },
        {
          id: "m8",
          from: "research",
          kind: "system",
          body:
            "Nothing sent. LinkedIn, email, and the account page wait for seller review.",
        },
      ],
    },
  },
];

export function getJob(id: string): SalesJob | undefined {
  return JOBS.find((job) => job.id === id);
}
