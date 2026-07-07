import Hero from "../components/Hero";
import GuideSection from "../components/GuideSection";
import MissionSection from "../components/MissionSection";
import { legalGuides, offTheRecord, activityBooks } from "../data/guides";

export default function Home() {
  return (
    <div className="page-fade">
      <Hero />

      <GuideSection title="Legal Guide Series" guides={legalGuides} />

      <GuideSection
        title="Off the Record"
        id="off-the-record"
        guides={offTheRecord}
      />

      <GuideSection
        title="Activity Books"
        id="activity-books"
        guides={activityBooks}
      />

      <MissionSection />
    </div>
  );
}