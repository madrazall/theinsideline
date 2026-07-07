import GuideSection from "../components/GuideSection";
import { legalGuides, offTheRecord, activityBooks } from "../data/guides";

export default function Guides() {
  return (
    <div className="page-fade">
      <section className="page-header container">
        <h1>Guide Library</h1>
        <p>
          Browse every publication currently available through Inside Line.
        </p>
      </section>

      <GuideSection title="Legal Guide Series" guides={legalGuides} />

      <GuideSection title="Off the Record" guides={offTheRecord} />

      <GuideSection
        title="Activity Books"
        id="activity-books"
        guides={activityBooks}
      />
    </div>
  );
}