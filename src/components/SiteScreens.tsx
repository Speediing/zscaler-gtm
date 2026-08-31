import type { Artifact, DemoMessage } from "@/data/types";
import type { ComputerBeat } from "@/data/screens";
import { DISCOVERY_DECK } from "@/data/jobs";
import { FinishedDeck } from "./FinishedDeck";

function asArtifact<K extends Artifact["kind"]>(
  artifact: Artifact | undefined,
  kind: K,
): Extract<Artifact, { kind: K }> | undefined {
  return artifact?.kind === kind
    ? (artifact as Extract<Artifact, { kind: K }>)
    : undefined;
}

export function SiteScreen({
  beat,
  message,
  account,
  sent,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
  account: string;
  sent: boolean;
}) {
  const artifact = message?.artifact;

  switch (beat.site) {
    case "granola":
      return <GranolaScreen account={account} />;
    case "figma":
      return (
        <FigmaScreen
          account={account}
          slides={asArtifact(artifact, "slides")}
        />
      );
    case "gmail":
      return (
        <GmailScreen
          account={account}
          artifact={asArtifact(artifact, "gmail")}
          sent={sent}
        />
      );
    case "gdoc":
      return <GdocScreen account={account} artifact={artifact} />;
    case "linkedin":
      return (
        <LinkedInScreen
          account={account}
          artifact={asArtifact(artifact, "linkedin")}
          sent={sent}
        />
      );
    case "research":
      return <ResearchScreen account={account} />;
    case "page":
      return (
        <PageScreen
          account={account}
          artifact={asArtifact(artifact, "one-pager")}
        />
      );
    default: {
      const exhaustiveSite: never = beat.site;
      return exhaustiveSite;
    }
  }
}

function GranolaScreen({ account }: { account: string }) {
  return (
    <div className="site site-granola">
      <header>
        <strong>Granola</strong>
        <span>Illustrative live note</span>
      </header>
      <p className="site-time">{account} discovery</p>
      <ul>
        <li>
          <span>Topic</span> Cybersecurity for the AI era
        </li>
        <li>
          <span>Scope</span> AI applications, agents, and workflows
        </li>
        <li>
          <span>Process</span> TBD
        </li>
        <li>
          <span>Owner</span> TBD
        </li>
        <li>
          <span>Value</span> TBD
        </li>
        <li>
          <span>Quotes</span> No attributed customer quote
        </li>
      </ul>
    </div>
  );
}

function FigmaScreen({
  account,
  slides,
}: {
  account: string;
  slides?: Extract<Artifact, { kind: "slides" }>;
}) {
  return (
    <div className="site site-figma">
      <header>
        <span className="figma-logo">F</span>
        <strong>{slides?.title || `${account} next-meeting brief`}</strong>
        <em>Draft</em>
      </header>
      <div className="figma-board">
        <FinishedDeck
          slides={slides?.cards || DISCOVERY_DECK}
          title={slides?.title}
          size="sm"
        />
      </div>
    </div>
  );
}

function GmailScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact?: Extract<Artifact, { kind: "gmail" }>;
  sent: boolean;
}) {
  return (
    <div className="site site-gmail">
      <header>
        <strong>Gmail</strong>
        <em>{sent ? "Sent" : "Draft, not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || "Customer contact (illustrative)"}
      </p>
      <p>
        <span>Subject</span>
        {artifact?.subject || `AI security at ${account}`}
      </p>
      <div>
        {artifact?.body ||
          "Generic sample request. The sourced response is being drafted."}
      </div>
    </div>
  );
}

function GdocScreen({
  account,
  artifact,
}: {
  account: string;
  artifact?: Artifact;
}) {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Docs</strong>
        <span>{artifact?.title || `${account} working note`}</span>
      </header>
      <article>
        {artifact?.kind === "packet"
          ? artifact.fields.map((field) => (
              <p key={field.label}>
                <b>{field.label}.</b> {field.value}
              </p>
            ))
          : null}
        {artifact?.kind === "answers"
          ? artifact.checks.map((check) => (
              <p key={check.question}>
                <b>
                  {check.status === "approved" ? "Approved" : "TBD"}.{" "}
                  {check.question}
                </b>{" "}
                {check.answer} Source: {check.source}.
              </p>
            ))
          : null}
        {artifact?.kind === "one-pager"
          ? artifact.sections.map((section) => (
              <p key={section.heading}>
                <b>{section.heading}.</b> {section.body}
              </p>
            ))
          : null}
        {!artifact ? (
          <>
            <p>
              <b>Approved positioning.</b> Cybersecurity for the AI era.
            </p>
            <p>
              <b>Approved direction.</b> Secure AI applications, agents, and
              workflows through Zero Trust Exchange.
            </p>
            <p>
              <b>Account context.</b> Workflow, owner, and value are TBD.
            </p>
          </>
        ) : null}
      </article>
    </div>
  );
}

function ResearchScreen({ account }: { account: string }) {
  return (
    <div className="site site-research">
      <header>
        <strong>{account}</strong>
        <span>Generic research workspace</span>
      </header>
      <p className="site-time">Verify every item before use</p>
      <ul>
        <li>
          <span>Public site</span> Add one verified business priority.
        </li>
        <li>
          <span>Public source</span> Add one current, sourced trigger.
        </li>
        <li>
          <span>CRM</span> Confirm the target role and account owner.
        </li>
        <li>
          <span>Status</span> No account-specific fact is included in this
          sample.
        </li>
      </ul>
    </div>
  );
}

function LinkedInScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact?: Extract<Artifact, { kind: "linkedin" }>;
  sent: boolean;
}) {
  return (
    <div className="site site-linkedin">
      <header>
        <strong>LinkedIn</strong>
        <em>{sent ? "Sent" : "Draft, not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || "Target contact"}
        {artifact?.role ? `, ${artifact.role}` : ""}
      </p>
      <div>
        {artifact?.body ||
          `Illustrative outreach for ${account}. Verify the contact and account context before sending.`}
      </div>
    </div>
  );
}

function PageScreen({
  account,
  artifact,
}: {
  account: string;
  artifact?: Extract<Artifact, { kind: "one-pager" }>;
}) {
  return (
    <div className="site site-page">
      <header>
        <strong>Account page</strong>
        <em>Not live</em>
      </header>
      <h4>{artifact?.title || `AI security at ${account}`}</h4>
      {artifact ? (
        artifact.sections.map((section) => (
          <p key={section.heading}>
            <b>{section.heading}.</b> {section.body}
          </p>
        ))
      ) : (
        <p>
          Illustrative sample. Add verified account context before sharing.
        </p>
      )}
    </div>
  );
}
