import heroImage from "../assets/images/hero.jpg";
import volume1 from "../assets/images/volume1.png";


export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(12,15,20,.82), rgba(12,15,20,.90)), url(${heroImage})`,
      }}
    >
      <div className="container hero-container">

        <div className="hero-left">

          <p className="hero-kicker">
            KNOWLEDGE. RIGHTS. ACTION.
          </p>

          <h1>
            INSIDE LINE
          </h1>

          <p className="hero-description">
            A self-advocacy resource library dedicated to helping
            incarcerated individuals and their families understand
            the criminal justice system through practical, easy to
            understand guides.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Browse Guides
            </button>

            <button className="btn-secondary">
              Free Resources
            </button>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={volume1}
            alt="Inside Line Volume 1"
          />

        </div>

      </div>
    </section>
  );
}