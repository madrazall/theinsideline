import { Link } from "react-router-dom";
import BlogTicker from "../components/BlogTicker";
import {
  getBlogListArticles,
  isArticleLive,
  isArticleScheduled,
} from "../data/blog";

function getCardCta(article) {
  if (isArticleLive(article)) return "Read More →";
  if (isArticleScheduled(article)) {
    return `Publishing ${article.date} →`;
  }
  return "Coming Soon";
}

function BlogCard({ article }) {
  const live = isArticleLive(article);

  const content = (
    <>
      <div className="blog-meta">
        <span>{article.date}</span>
        <span>{article.category}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <span className="blog-card-cta">{getCardCta(article)}</span>
    </>
  );

  if (live) {
    return (
      <Link
        className="blog-card blog-card-link"
        to={`/blog/${article.slug}`}
        aria-label={`Read article: ${article.title}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="blog-card blog-card-unpublished" aria-disabled="true">
      {content}
    </article>
  );
}

export default function Blog() {
  return (
    <div className="page-fade">
      <section className="page-header container">
        <h1>Blog</h1>
        <p>Articles on self-advocacy, legal navigation, and practical guidance.</p>
      </section>

      <BlogTicker />

      <div className="blog-grid">
        {getBlogListArticles().map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}