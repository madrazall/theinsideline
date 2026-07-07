import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>INSIDE LINE</h2>
          <p>
            A curated library of practical self-advocacy guides designed to
            help incarcerated individuals and their families navigate the
            justice system.
          </p>
        </div>

        <div className="footer-col">
          <h4>Library</h4>
          <Link to="/guides">Guides</Link>
          <Link to="/#off-the-record">Off the Record</Link>
          <Link to="/guides#activity-books">Activity Books</Link>
        </div>

        <div className="footer-col">
          <h4>Information</h4>
          <Link to="/resources">Resources</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-col">
          <h4>Mission</h4>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Knowledge. Rights. Action. Practical information that empowers
            self-advocacy at every step.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Inside Line · Knowledge. Rights. Action.
      </div>
    </footer>
  );
}