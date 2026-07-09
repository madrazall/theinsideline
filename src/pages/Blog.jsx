import { Link } from "react-router-dom";
import { articles } from "../data/blog";

function BlogCard({ article }) {
  const content = (
    <>
      <div className="blog-meta">
        <span>{article.date}</span>
        <span>{article.category}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <span className="blog-card-cta">
        {article.published ? "Read More →" : "Coming Soon"}
      </span>
    </>
  );

  if (article.published) {
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

      <div className="blog-search">
        <input
          type="search"
          placeholder="Search articles — coming soon"
          disabled
          aria-label="Search articles"
        />
      </div>

      <div className="blog-grid">
        {articles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}