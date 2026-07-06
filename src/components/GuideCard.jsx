import coverV1 from "../assets/images/cover-v1.png";
import coverV2 from "../assets/images/cover-v2.png";
import coverV3 from "../assets/images/cover-v3.png";
import coverV4 from "../assets/images/cover-v4.png";

import growthReflection from "../assets/images/growth-reflection.png";
import lifestyle from "../assets/images/lifestyle.png";

import activity1 from "../assets/images/cover-activity1.png";

const covers = {
  "Sentence Modification": coverV1,
  "Habeas Corpus": coverV2,
  "Long Distance Parenting": coverV3,
  "Reentry": coverV4,
  "Growth & Reflection": growthReflection,
  Lifestyle: lifestyle,
  "Activity Book 1": activity1,
};

export default function GuideCard({ guide }) {
  const image = covers[guide.title];

  return (
    <article className="guide-card">

      <div className="guide-cover">

        {image ? (
          <img src={image} alt={guide.title} />
        ) : (
          <div className="coming-cover">
            Coming Soon
          </div>
        )}

      </div>

      <div className="guide-body">

        {guide.volume && (
          <span className="volume">
            Volume {guide.volume}
          </span>
        )}

        <h3>{guide.title}</h3>

        <p>{guide.status}</p>

        <button
          disabled={guide.status === "Coming Soon"}
        >
          {guide.status === "Coming Soon"
            ? "Coming Soon"
            : "View Guide"}
        </button>

      </div>

    </article>
  );
}