import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getUpcomingArticle,
  NEWSLETTER_FORM_ACTION,
} from "../data/blogTicker";

export default function BlogUpcoming() {
  const { slug } = useParams();
  const article = getUpcomingArticle(slug);
  const [status, setStatus] = useState("idle");

  if (!article) {
    return (
      <div className="blog-upcoming page-fade">
        <div className="blog-upcoming-inner container">
          <Link className="blog-back-link" to="/blog">
            ← Blog
          </Link>
          <h1>Article Not Found</h1>
          <p>This upcoming article is not in the queue.</p>
          <Link className="neon-btn" to="/blog">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(NEWSLETTER_FORM_ACTION, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        event.currentTarget.reset();
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="blog-upcoming page-fade">
      <div className="blog-upcoming-inner container">
        <Link className="blog-back-link" to="/blog">
          ← Blog
        </Link>

        <p className="blog-upcoming-article-title">{article.label}</p>

        <h1>Coming Soon</h1>
        <p className="blog-upcoming-lead">
          This article is currently being written.
        </p>

        <section className="blog-upcoming-signup">
          <h2>Want to know when it&apos;s published?</h2>

          {status === "success" ? (
            <p className="blog-upcoming-success">You&apos;re on the list.</p>
          ) : (
            <form className="blog-upcoming-form" onSubmit={handleSubmit}>
              <input type="hidden" name="article" value={article.label} />
              <input type="hidden" name="_subject" value={`Notify: ${article.label}`} />
              <label className="visually-hidden" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                autoComplete="email"
              />
              <button
                type="submit"
                className="neon-btn"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Joining..." : "Join the newsletter"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="blog-upcoming-error">
              Something went wrong. Please try again.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}