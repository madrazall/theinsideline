import { useState } from "react";
import PathwayWizard from "../components/PathwayWizard";
import PathwayResults from "../components/PathwayResults";
import { calculatePathway, questions } from "../data/pathway";

export default function Pathway() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  function handleAnswer(questionId, optionId) {
    const nextAnswers = { ...answers, [questionId]: optionId };
    setAnswers(nextAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    setResult(calculatePathway(nextAnswers));
  }

  function handleBack() {
    setStep(Math.max(0, step - 1));
  }

  function handleRestart() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  return (
    <div className="page-fade">
      <section className="pathway-page container">
        <div className="pathway-header">
          <h1>Find Your Path</h1>
          <p>
            Answer a few questions to get a personalized learning plan — not a
            legal eligibility decision.
          </p>
        </div>

        {!result ? (
          <PathwayWizard
            step={step}
            answers={answers}
            onAnswer={handleAnswer}
            onBack={handleBack}
          />
        ) : (
          <PathwayResults result={result} onRestart={handleRestart} />
        )}
      </section>
    </div>
  );
}