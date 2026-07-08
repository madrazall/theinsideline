import { Link } from "react-router-dom";

export default function FaqTopicRow({ slug, title, description, featured }) {
  return (
    <Link
      className={`faq-topic-row${featured ? " featured" : ""}`}
      to={`/faq/${slug}`}
    >
      <div className="faq-topic-row-text">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <span className="faq-topic-row-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}