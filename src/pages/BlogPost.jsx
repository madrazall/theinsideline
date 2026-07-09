import { Link, useParams } from "react-router-dom";
import { getArticle, isArticleLive } from "../data/blog";

function renderBlock(block, index) {
  switch (block.type) {
    case "p":
      if (block.link) {
        const parts = block.text.split(block.link.text);
        return (
          <p key={index}>
            {parts[0]}
            <Link to={block.link.to}>{block.link.text}</Link>
            {parts[1]}
          </p>
        );
      }
      return (
        <p key={index} className={block.emphasis ? "blog-emphasis" : undefined}>
          {block.text}
        </p>
      );
    case "h2":
      return <h2 key={index}>{block.text}</h2>;
    case "h3":
      return <h3 key={index}>{block.text}</h3>;
    case "ul":
      return (
        <ul key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "blockquote":
      return (
        <blockquote key={index}>
          {block.label && <strong>{block.label} </strong>}
          {block.text}
        </blockquote>
      );
    case "hr":
      return <hr key={index} className="blog-divider" />;
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article || !isArticleLive(article)) {
    return (
      <div className="blog-not-found page-fade">
        <h1>Article Not Found</h1>
        <p>This article does not exist or has not been published yet.</p>
        <Link className="neon-btn" to="/blog">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="page-fade">
      <article className="blog-article container">
        <Link className="blog-back-link" to="/blog">
          ← Blog
        </Link>

        <div className="blog-meta">
          <span>{article.date}</span>
          <span>{article.category}</span>
          {article.author && <span>{article.author}</span>}
        </div>

        <h1>{article.title}</h1>

        <div className="blog-article-body">
          {article.blocks.map((block, index) => renderBlock(block, index))}
        </div>

        <p className="blog-article-footer">
          Questions? Browse the{" "}
          <Link to="/faq/getting-started">Knowledge Base →</Link>
        </p>
      </article>
    </div>
  );
}