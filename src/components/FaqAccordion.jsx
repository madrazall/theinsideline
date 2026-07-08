import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="faq-accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={`faq-item${isOpen ? " open" : ""}`}
          >
            <button
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span className="faq-chevron" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}