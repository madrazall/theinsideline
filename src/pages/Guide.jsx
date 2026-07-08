import { useParams, Link } from "react-router-dom";
import {
  getProduct,
  getRelatedProducts,
  productToCardGuide,
} from "../data/products";
import GuideSection from "../components/GuideSection";

export default function Guide() {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) {
    return (
      <div className="guide-not-found page-fade">
        <h1>Guide Not Found</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
          This guide does not exist or has not been published yet.
        </p>
        <Link className="neon-btn" to="/guides">
          Back to Library
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.relatedSlugs);
  const isAvailable = product.status === "available";
  const relatedCards = related.map(productToCardGuide);

  return (
    <div className="page-fade">
      <section className="guide-detail">
        <div className="guide-detail-hero">
          <div className="guide-detail-cover">
            {product.cover ? (
              <img src={product.cover} alt={product.title} />
            ) : (
              <div className="coming-cover">
                <span>COMING SOON</span>
              </div>
            )}
          </div>

          <div className="guide-detail-info">
            <span
              className={`status-badge ${isAvailable ? "available" : "coming-soon"}`}
            >
              {isAvailable ? "Available" : "Coming Soon"}
            </span>

            {product.volume && (
              <p className="guide-detail-volume">Volume {product.volume}</p>
            )}

            <h1>{product.title}</h1>
            <p>{product.longDescription}</p>

            {product.features?.length > 0 && (
              <div className="guide-features">
                <h3>What&apos;s Inside</h3>
                <ul>
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="faq-guide-link">
              Questions? Browse the{" "}
              <Link to="/faq">Knowledge Base →</Link>
            </p>

            <div className="purchase-options">
              {isAvailable && product.variants?.length > 0 ? (
                product.variants.map((variant) => (
                  <div className="purchase-option" key={variant.sku}>
                    <div className="purchase-option-info">
                      <span className="purchase-version">{variant.version}</span>
                      <span className="purchase-price">
                        ${variant.price.toFixed(2)}
                      </span>
                    </div>
                    <a
                      className="purchase-btn"
                      href={variant.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Purchase
                    </a>
                  </div>
                ))
              ) : (
                <div className="purchase-option">
                  <div className="purchase-option-info">
                    <span className="purchase-version">Purchase</span>
                    <span className="purchase-price" style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                      Not yet available
                    </span>
                  </div>
                  <button className="purchase-btn" disabled>
                    Coming Soon
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {relatedCards.length > 0 && (
        <GuideSection title="Related Guides" guides={relatedCards} />
      )}
    </div>
  );
}