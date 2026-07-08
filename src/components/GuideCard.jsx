import { useState } from "react";
import { Link } from "react-router-dom";

export default function GuideCard({ guide }) {
  const [expanded, setExpanded] = useState(false);
  const isAvailable = guide.status === "Available";
  const canBuy = isAvailable && guide.buyLink;

  function handleCardClick(event) {
    if (event.target.closest("a")) return;
    setExpanded((open) => !open);
  }

  return (
    <article
      className={`guide-card${expanded ? " is-expanded" : ""}`}
      onClick={handleCardClick}
      onKeyDown={(event) => {
        if (event.target.closest("a")) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setExpanded((open) => !open);
        }
      }}
      tabIndex={0}
      aria-expanded={expanded}
    >
      <div className="guide-cover">
        {guide.cover ? (
          <img src={guide.cover} alt={guide.title} />
        ) : (
          <div className="coming-cover">
            <span>COMING SOON</span>
          </div>
        )}
      </div>

      <div className="guide-body">
        {guide.volume && (
          <span className="guide-volume">Volume {guide.volume}</span>
        )}

        <h3>{guide.title}</h3>
        <p className="card-status">{guide.status}</p>

        <div className="guide-card-details">
          <div className="guide-card-details-inner">
            {guide.description && (
              <p className="guide-card-description">{guide.description}</p>
            )}

            <div className="guide-card-actions">
              {canBuy ? (
                <a
                  className="guide-buy-btn"
                  href={guide.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  Buy Now
                </a>
              ) : (
                <button className="guide-buy-btn" disabled>
                  {isAvailable ? "Buy Now" : "Coming Soon"}
                </button>
              )}

              <Link
                className="guide-learn-btn"
                to={guide.link}
                onClick={(event) => event.stopPropagation()}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}