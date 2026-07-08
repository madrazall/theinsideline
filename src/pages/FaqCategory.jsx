import { Link, useParams } from "react-router-dom";
import FaqAccordion from "../components/FaqAccordion";
import { getFaqCategory } from "../data/faq";

export default function FaqCategory() {
  const { category } = useParams();
  const data = getFaqCategory(category);

  if (!data) {
    return (
      <div className="guide-not-found page-fade">
        <h1>Category Not Found</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
          This FAQ category does not exist.
        </p>
        <Link className="neon-btn" to="/faq">
          Back to Knowledge Base
        </Link>
      </div>
    );
  }

  return (
    <div className="page-fade">
      <section className="page-header container">
        <Link className="faq-back-link" to="/faq">
          ← Knowledge Base
        </Link>

        {data.comingSoon && (
          <span className="status-badge coming-soon">Expanding</span>
        )}

        <h1>{data.title}</h1>
        <p>{data.description}</p>

        {data.guideLink && (
          <p className="faq-guide-link">
            Related guide:{" "}
            <Link to={data.guideLink}>View the full guide →</Link>
          </p>
        )}
      </section>

      <section className="faq-category-content container">
        {data.subsections.map((section) => (
          <div className="faq-subsection" key={section.title}>
            <div className="section-title">
              <h2>{section.title}</h2>
              <div className="title-line" />
            </div>

            <FaqAccordion items={section.items} />
          </div>
        ))}

        {data.guideLink ? (
          <div className="faq-guides-cta">
            This Knowledge Base explains the process in general terms. For
            step-by-step instructions, templates, and forms, the full guide
            walks you through every step.{" "}
            <Link to={data.guideLink}>View the guide →</Link>
          </div>
        ) : (
          <div className="faq-guides-cta">
            Need a complete workbook with templates and filing instructions?{" "}
            <Link to="/guides">Browse the Guide Library →</Link>
          </div>
        )}
      </section>
    </div>
  );
}