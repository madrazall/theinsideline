import { articles } from "../data/blog";

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
          <article className="blog-card" key={article.slug}>
            <div className="blog-meta">
              <span>{article.date}</span>
              <span>{article.category}</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <a href="#" className="neon-btn" style={{ fontSize: "1.4rem" }}>
              Read More
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}