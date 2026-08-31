import type { Artifact, StoryBeat } from "@/data/types";
import { FinishedDeck } from "./FinishedDeck";

function AnswerPack({
  artifact,
}: {
  artifact: Extract<Artifact, { kind: "answers" }>;
}) {
  return (
    <div className="leave leave-paper">
      <header className="leave-paper-top">
        <div>
          <p className="leave-kicker">{artifact.label}</p>
          <h3>{artifact.title}</h3>
        </div>
        <p className="leave-paper-from">Approved sources and visible gaps</p>
      </header>
      <div className="leave-paper-split">
        <section className="leave-marks">
          <p className="leave-kicker">Source checks</p>
          <ol>
            {artifact.checks.map((check) => (
              <li
                key={check.question}
                className={
                  check.status === "approved" ? "is-take" : "is-hold"
                }
              >
                <p className="leave-mark-line">{check.question}</p>
                <p className="leave-mark-note">
                  <b>
                    {check.status === "approved" ? "Approved" : "TBD"}.
                  </b>{" "}
                  {check.answer}
                </p>
                <p className="answer-source">Source: {check.source}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="leave-reply">
          <p className="leave-kicker">Draft reply, not sent</p>
          <p className="leave-reply-meta">
            <span>To</span>
            {artifact.reply.to}
          </p>
          <p className="leave-reply-meta">
            <span>Subject</span>
            {artifact.reply.subject}
          </p>
          <p className="leave-reply-body">{artifact.reply.body}</p>
        </section>
      </div>
    </div>
  );
}

function OutboundPack({
  artifact,
}: {
  artifact: Extract<Artifact, { kind: "outbound" }>;
}) {
  return (
    <div className="leave leave-map leave-out">
      <header className="leave-plan-top">
        <p className="leave-kicker">Illustrative sample</p>
        <h3>{artifact.title}</h3>
        <p className="leave-plan-dek">
          Generic data only. Verify every account field before sending.
        </p>
      </header>

      <ol className="leave-plan-arc">
        {artifact.hypothesis.map((item) => (
          <li key={item.k}>
            <p>{item.k}</p>
            <strong>{item.body}</strong>
          </li>
        ))}
      </ol>

      <div className="leave-out-split">
        <section>
          <p className="leave-kicker">Evidence and target</p>
          <ul className="leave-out-list">
            {artifact.evidence.map((item) => (
              <li key={item.source}>
                <strong>{item.source}</strong>
                <span>{item.finding}</span>
              </li>
            ))}
            {artifact.targets.map((target) => (
              <li key={target.name}>
                <strong>
                  {target.name} <em>{target.role}</em>
                </strong>
                <span>{target.why}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="leave-kicker">Outreach drafts</p>
          <ul className="leave-out-list">
            {artifact.drafts.map((draft) => (
              <li key={draft.channel}>
                <strong>
                  {draft.channel} <em>{draft.to}</em>
                </strong>
                {draft.subject ? <span>{draft.subject}</span> : null}
                <span>{draft.body}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="leave-out-page">
        <p className="leave-kicker">Account page draft</p>
        <h4>{artifact.page.headline}</h4>
        <p>{artifact.page.body}</p>
      </section>
    </div>
  );
}

export function ChapterPayoff({
  beat,
}: {
  beat: StoryBeat;
}) {
  const artifact = beat.artifact;

  let body = null;
  if (beat.slides?.length) {
    body = <FinishedDeck slides={beat.slides} />;
  } else if (artifact?.kind === "answers") {
    body = <AnswerPack artifact={artifact} />;
  } else if (artifact?.kind === "outbound") {
    body = <OutboundPack artifact={artifact} />;
  }

  if (!body) return null;

  return (
    <div className="chapter-payoff">
      <p className="payoff-label">
        {beat.when ? <span>{beat.when}</span> : null}
        {beat.label}
      </p>
      {body}
    </div>
  );
}
