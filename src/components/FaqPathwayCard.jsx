import { Link } from "react-router-dom";

export default function FaqPathwayCard({ pathway }) {
  return (
    <Link className="faq-pathway-card" to={`/faq/${pathway.slug}`}>
      <h3>{pathway.title}</h3>
      <p>{pathway.description}</p>
      <span className="faq-pathway-cta">{pathway.cta} →</span>
    </Link>
  );
}