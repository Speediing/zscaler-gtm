import type { StoryBeat, StoryScene, StoryVisual } from "@/data/types";

function Screen({ scene }: { scene: StoryScene }) {
  if (scene === "call") {
    return (
      <>
        <rect x="18" y="14" width="22" height="14" rx="1.4" fill="currentColor" opacity="0.28" />
        <rect x="44" y="14" width="22" height="14" rx="1.4" fill="currentColor" opacity="0.14" />
        <rect x="18" y="31" width="22" height="14" rx="1.4" fill="currentColor" opacity="0.14" />
        <rect x="44" y="31" width="22" height="14" rx="1.4" fill="currentColor" opacity="0.08" />
      </>
    );
  }
  if (scene === "notes") {
    return (
      <path
        d="M20 18h44M20 26h44M20 34h30M20 42h22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.45"
      />
    );
  }
  if (scene === "inspect" || scene === "deck") {
    return (
      <>
        <rect x="22" y="13" width="40" height="28" rx="1.4" fill="currentColor" opacity="0.1" />
        <path
          d="M28 22h28M28 28h22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.45"
        />
      </>
    );
  }
  return (
    <path
      d="M24 36 60 16 48 42l-6-12z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      opacity="0.45"
    />
  );
}

function Laptop({ scene }: { scene: StoryScene }) {
  return (
    <svg className="story-laptop" viewBox="0 0 88 58" aria-hidden>
      <rect
        x="10"
        y="4"
        width="68"
        height="44"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect x="14" y="8" width="60" height="36" rx="1.2" fill="currentColor" opacity="0.06" />
      <Screen scene={scene} />
      <path
        d="M4 50h80l3 5H1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LiveVisual({ visual }: { visual: StoryVisual }) {
  switch (visual.kind) {
    case "live-call":
      return (
        <div className="story-ui story-call-ui" aria-hidden>
          <header className="story-ui-bar">
            <span className="story-ui-dots">
              <i />
              <i />
              <i />
            </span>
            <strong>{visual.title}</strong>
            <span className="story-live">Live</span>
          </header>
          <div className="story-call-people">
            {visual.people.map((person, index) => (
              <div
                key={person.initials}
                className={index === 1 ? "is-speaking" : undefined}
              >
                <span>{person.initials}</span>
                <small>{person.name}</small>
              </div>
            ))}
          </div>
          <footer>
            <span className="story-wave">||||||||||||</span>
            Granola is listening
          </footer>
        </div>
      );
    case "discovery-notes":
      return (
        <div className="story-ui story-transcript-ui" aria-hidden>
          <header className="story-ui-bar">
            <strong>{visual.title}</strong>
            <span>{visual.status}</span>
          </header>
          <ul className="story-note-list">
            {visual.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      );
    case "deck-update":
      return (
        <div className="story-ui story-deck-ui" aria-hidden>
          <header className="story-ui-bar">
            <strong>Open deck</strong>
            <span>Editing now</span>
          </header>
          <div className="story-mini-slide">
            <small>{visual.eyebrow}</small>
            <strong>{visual.headline}</strong>
            <span>{visual.product}</span>
          </div>
          <footer>✓ {visual.status}</footer>
        </div>
      );
    case "request-email":
      return (
        <div className="story-ui story-email-ui" aria-hidden>
          <header className="story-ui-bar">
            <strong>Inbox</strong>
            <span>{visual.status}</span>
          </header>
          <div className="story-email-body">
            <span className="story-avatar">TC</span>
            <p>
              <strong>{visual.sender}</strong>
              <small>{visual.subject}</small>
            </p>
          </div>
          <footer>Approved sources required</footer>
        </div>
      );
    case "answers-found":
      return (
        <div className="story-ui story-answers-ui" aria-hidden>
          <header className="story-ui-bar">
            <strong>Grok checked the sources</strong>
            <span>{visual.status}</span>
          </header>
          <ul>
            {visual.sources.map((source) => (
              <li key={source.name}>
                <span>✓</span>
                <p>
                  <strong>{source.name}</strong>
                  <small>{source.answer}</small>
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "reply-ready":
      return (
        <div className="story-ui story-reply-ui" aria-hidden>
          <header className="story-ui-bar">
            <strong>Reply draft</strong>
            <span>Not sent</span>
          </header>
          <div className="story-reply-fields">
            <p>
              <span>To</span>
              {visual.to}
            </p>
            <p>
              <span>Re</span>
              {visual.subject}
            </p>
            <i />
            <i />
            <i />
          </div>
          <footer>✓ {visual.status}</footer>
        </div>
      );
    case "account-research":
      return (
        <div className="story-ui story-research-ui" aria-hidden>
          <header className="story-ui-bar">
            <strong>{visual.account}</strong>
            <span>Researching</span>
          </header>
          <div className="story-source-orbit">
            <strong>{visual.signal}</strong>
            {visual.sources.map((source) => (
              <span key={source}>{source}</span>
            ))}
          </div>
          <footer>Public evidence found</footer>
        </div>
      );
    case "three-why":
      return (
        <div className="story-ui story-why-ui" aria-hidden>
          <header className="story-ui-bar">
            <strong>Account hypothesis</strong>
            <span>Built from evidence</span>
          </header>
          <ol>
            {visual.items.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <strong>{item.answer}</strong>
              </li>
            ))}
          </ol>
        </div>
      );
    case "outreach-ready":
      return (
        <div className="story-ui story-outreach-ui" aria-hidden>
          <header className="story-ui-bar">
            <strong>{visual.person}</strong>
          </header>
          <div>
            {visual.channels.map((channel, index) => (
              <p key={channel}>
                <span>{index + 1}</span>
                <strong>{channel}</strong>
                <small>Review draft</small>
              </p>
            ))}
          </div>
          <footer>{visual.status}</footer>
        </div>
      );
    default: {
      const exhaustiveVisual: never = visual;
      return exhaustiveVisual;
    }
  }
}

export function Storyboard({ beats }: { beats: StoryBeat[] }) {
  const hasLiveFlow = beats.some((beat) => beat.visual);

  return (
    <ol className={`storyboard${hasLiveFlow ? " is-live-flow" : ""}`}>
      {beats.map((beat) => (
        <li
          key={`${beat.when}-${beat.label}`}
          className={`story-beat${beat.visual ? " has-visual" : ""}`}
        >
          {beat.visual ? (
            <LiveVisual visual={beat.visual} />
          ) : (
            <Laptop scene={beat.scene} />
          )}
          {beat.when ? <p className="story-when">{beat.when}</p> : null}
          <p className="story-line">{beat.label}</p>
        </li>
      ))}
    </ol>
  );
}
