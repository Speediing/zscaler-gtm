import type { SlideCard } from "@/data/types";

export function FinishedDeck({
  slides,
  title = "Next-meeting brief",
  size = "lg",
}: {
  slides: SlideCard[];
  title?: string;
  size?: "sm" | "lg";
}) {
  return (
    <div className={`leave leave-deck finished-deck size-${size}`}>
      <header className="leave-deck-top">
        <span>Illustrative sample</span>
        <strong>{title}</strong>
      </header>
      <div className={`deck-slides size-${size}`}>
        {slides.map((slide) => (
          <article className="deck-tile" key={slide.n}>
            <div className="deck-tile-bar">
              <span className="deck-kicker">
                {slide.kicker || "Next meeting"}
              </span>
              <span className="deck-n">{String(slide.n).padStart(2, "0")}</span>
            </div>
            <h3 className="deck-tile-title">{slide.title}</h3>
            <p className="deck-map">{slide.body}</p>
            <footer className="deck-tile-foot">
              <span>Zscaler x SpaceXAI</span>
              <span>Draft</span>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
