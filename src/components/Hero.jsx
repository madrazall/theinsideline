import { Link } from "react-router-dom";
import coverV1 from "../assets/images/cover-v1.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>INSIDE LINE</h1>

        <p>
          A self-advocacy publishing platform dedicated to helping
          incarcerated individuals and their families navigate the
          criminal justice system through practical guides and
          accessible legal information.
        </p>

        <p className="hero-tagline">Knowledge. Rights. Action.</p>

        <div className="hero-buttons">
          <Link className="neon-btn" to="/guides">
            Browse Guides
          </Link>
          <a className="neon-btn" href="/#off-the-record">
            Off the Record
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={coverV1} alt="Inside Line Volume 1" />
      </div>
    </section>
  );
}