import FaqTopicRow from "../components/FaqTopicRow";
import { faqGettingStarted, faqNavTopics } from "../data/faq";

export default function Faq() {
  return (
    <div className="page-fade">
      <section className="faq-hero container">
        <h1>Knowledge Base</h1>
        <p>
          Plain-language answers for individuals and families. Pick one topic —
          you don&apos;t need to read everything at once.
        </p>
      </section>

      <section className="faq-nav-list container">
        <FaqTopicRow
          slug={faqGettingStarted.slug}
          title={faqGettingStarted.title}
          description={faqGettingStarted.description}
          featured
        />

        <FaqTopicRow
          slug="find-your-path"
          title="Find Your Path"
          description="Answer a few questions and get a personalized learning plan."
          featured
          to="/pathway"
        />

        {faqNavTopics.map((topic) => (
          <FaqTopicRow
            key={topic.slug}
            slug={topic.slug}
            title={topic.title}
          />
        ))}
      </section>
    </div>
  );
}