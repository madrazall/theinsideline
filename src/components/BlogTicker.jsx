import { Link } from "react-router-dom";
import { buildTickerTrack } from "../data/blogTicker";

function TickerItem({ item, showSeparator }) {
  const label = (
    <>
      {item.icon && <span className="blog-ticker-icon">{item.icon}</span>}
      {item.label}
    </>
  );

  const content = (
    <span className="blog-ticker-item">
      {label}
      {showSeparator && <span className="blog-ticker-sep" aria-hidden="true"> • </span>}
    </span>
  );

  if (item.type === "promo") {
    return (
      <Link className="blog-ticker-link" to={item.to}>
        {content}
      </Link>
    );
  }

  return (
    <Link className="blog-ticker-link" to={`/blog/upcoming/${item.slug}`}>
      {content}
    </Link>
  );
}

function TickerStrip({ items }) {
  return (
    <div className="blog-ticker-strip">
      {items.map((item, index) => (
        <TickerItem
          key={`${item.slug}-${index}`}
          item={item}
          showSeparator={index < items.length - 1}
        />
      ))}
    </div>
  );
}

export default function BlogTicker() {
  const track = buildTickerTrack();

  return (
    <div className="blog-ticker-wrap">
      <div className="blog-ticker" aria-label="Upcoming articles">
        <span className="blog-ticker-badge">Coming Soon</span>

        <div className="blog-ticker-viewport">
          <div className="blog-ticker-track">
            <TickerStrip items={track} />
            <TickerStrip items={track} />
          </div>
        </div>
      </div>
    </div>
  );
}