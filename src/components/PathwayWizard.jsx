import { questions } from "../data/pathway";

export default function PathwayWizard({ step, answers, onAnswer, onBack }) {
  const current = questions[step];
  const selected = answers[current.id];

  return (
    <div className="pathway-wizard">
      <div className="pathway-progress">
        {questions.map((q, index) => (
          <span
            key={q.id}
            className={`pathway-dot${index === step ? " active" : ""}${index < step ? " done" : ""}`}
          />
        ))}
      </div>

      <p className="pathway-step-label">
        Question {step + 1} of {questions.length}
      </p>

      <h2 className="pathway-question">{current.question}</h2>

      <div className="pathway-options">
        {current.options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`pathway-option${selected === option.id ? " selected" : ""}`}
            onClick={() => onAnswer(current.id, option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {step > 0 && (
        <button type="button" className="pathway-back-btn" onClick={onBack}>
          ← Back
        </button>
      )}
    </div>
  );
}