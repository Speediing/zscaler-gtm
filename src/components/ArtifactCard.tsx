import type { Artifact } from "@/data/types";
import { FinishedDeck } from "./FinishedDeck";

export function ArtifactCard({ artifact }: { artifact: Artifact }) {
  switch (artifact.kind) {
    case "slides":
      return (
        <FinishedDeck
          slides={artifact.cards}
          title={artifact.title}
          size="sm"
        />
      );
    case "one-pager":
      return (
        <div className="art art-doc">
          <p className="art-kicker">{artifact.eyebrow || "One-pager"}</p>
          <h3 className="art-title">{artifact.title}</h3>
          {artifact.sections.map((section) => (
            <div key={section.heading} className="art-block">
              <p className="art-label">{section.heading}</p>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      );
    case "packet":
      return (
        <div className="art art-doc">
          <p className="art-kicker">Working brief</p>
          <h3 className="art-title">{artifact.title}</h3>
          {artifact.fields.map((field) => (
            <div key={field.label} className="art-block">
              <p className="art-label">{field.label}</p>
              <p>{field.value}</p>
            </div>
          ))}
        </div>
      );
    case "answers":
      return (
        <div className="art art-doc">
          <p className="art-kicker">{artifact.label}</p>
          <h3 className="art-title">{artifact.title}</h3>
          {artifact.checks.map((check) => (
            <div key={check.question} className="art-block">
              <p className="art-label">
                {check.status === "approved" ? "Approved" : "TBD"} ·{" "}
                {check.source}
              </p>
              <p>
                <strong>{check.question}</strong> {check.answer}
              </p>
            </div>
          ))}
          <p className="art-caption">{artifact.reply.subject}</p>
        </div>
      );
    case "outbound":
      return (
        <div className="art art-doc">
          <p className="art-kicker">Illustrative sample</p>
          <h3 className="art-title">{artifact.title}</h3>
          {artifact.hypothesis.map((item) => (
            <div key={item.k} className="art-block">
              <p className="art-label">{item.k}</p>
              <p>{item.body}</p>
            </div>
          ))}
          {artifact.drafts.map((draft) => (
            <div key={draft.channel} className="art-block">
              <p className="art-label">
                {draft.channel} draft · {draft.to}
              </p>
              <p>{draft.body}</p>
            </div>
          ))}
        </div>
      );
    case "linkedin":
      return (
        <div className="art art-gmail">
          <p className="art-kicker">LinkedIn draft</p>
          <p className="mail-row">
            <span>To</span>
            {artifact.to}
            {artifact.role ? `, ${artifact.role}` : ""}
          </p>
          <p className="mail-body">{artifact.body}</p>
        </div>
      );
    case "gmail":
      return (
        <div className="art art-gmail">
          <p className="art-kicker">Gmail draft</p>
          <p className="mail-row">
            <span>To</span>
            {artifact.to}
          </p>
          <p className="mail-row">
            <span>Subject</span>
            {artifact.subject}
          </p>
          <p className="mail-body">{artifact.body}</p>
        </div>
      );
    default: {
      const exhaustiveArtifact: never = artifact;
      return exhaustiveArtifact;
    }
  }
}
