import GuideCard from "./GuideCard";

export default function GuideSection({ title, guides, id }) {
  return (
    <section className="guide-section" id={id}>
      <div className="section-title">
        <h2>{title}</h2>
        <div className="title-line" />
      </div>

      <div className="guide-grid">
        {guides.map((guide) => (
          <GuideCard key={guide.title} guide={guide} />
        ))}
      </div>
    </section>
  );
}