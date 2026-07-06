// src/App.jsx

import "./styles/home.css";
import "./styles/cards.css";

import hero from "./assets/images/hero.jpg";
import volume1 from "./assets/images/volume1.png";

import GuideSection from "./components/GuideSection";

import {
  legalGuides,
  offTheRecord,
  activityBooks,
} from "./data/guides";

export default function App() {
  return (
    <>
      {/* ========================= */}
      {/* Banner                    */}
      {/* ========================= */}

      <section
        className="banner"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      ></section>

      {/* ========================= */}
      {/* Navigation                */}
      {/* ========================= */}

      <nav className="nav">

        <div className="logo">
          INSIDE LINE
        </div>

        <div className="links">

          <a href="/">Home</a>

          <a href="/guides">Guides</a>

          <a href="/resources">Resources</a>

          <a href="/blog">Blog</a>

          <a href="/about">About</a>

        </div>

      </nav>

      {/* ========================= */}
      {/* Hero                      */}
      {/* ========================= */}

      <section className="hero">

        <div className="left">

          <h1>INSIDE LINE</h1>

          <p>
            Practical self-advocacy guides designed to help
            incarcerated individuals and their families
            better understand the justice system.
          </p>

          <h3>
            KNOWLEDGE. RIGHTS. ACTION.
          </h3>

          <div className="buttons">

            <button>
              Browse Library
            </button>

            <button>
              Start Here
            </button>

          </div>

        </div>

        <div className="right">

          <img
            src={volume1}
            alt="Inside Line Volume 1"
          />

        </div>

      </section>

      {/* ========================= */}
      {/* Guides                    */}
      {/* ========================= */}

      <GuideSection
        title="Legal Guide Series"
        guides={legalGuides}
      />

      <GuideSection
        title="Off the Record"
        guides={offTheRecord}
      />

      <GuideSection
        title="Activity Books"
        guides={activityBooks}
      />

      {/* ========================= */}
      {/* Footer                    */}
      {/* ========================= */}

      <footer>

        <p>
          © 2026 Inside Line
        </p>

      </footer>

    </>
  );
}