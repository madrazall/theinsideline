import { Link } from "react-router-dom";
import { getFaqQuestionCount } from "../data/faq";

export default function FaqCategoryCard({ category }) {
  const count = getFaqQuestionCount(category);

  return (
    <Link
      className="faq-category-card"
      to={`/faq/${category.slug}`}
    >
      {category.comingSoon && (
        <span className="status-badge coming-soon">Expanding</span>
      )}

      <h3>{category.title}</h3>
      <p>{category.description}</p>

      <span className="faq-category-count">
        {count} {count === 1 ? "entry" : "entries"}
      </span>
    </Link>
  );
}