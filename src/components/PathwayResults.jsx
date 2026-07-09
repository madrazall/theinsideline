import { Link } from "react-router-dom";
import {
  getResource,
  scoreCategories,
} from "../data/pathway";

function ResourceLink({ resourceId }) {
  const resource = getResource(resourceId);
  if (!resource) return null;

  if (resource.type === "download" && !resource.url) {
    return (
      <span className="pathway-resource-coming">
        {resource.label} <em>(coming soon)</em>
      </span>
    );
  }

  const isExternal = resource.url?.startsWith("http");

  if (isExternal || resource.type === "download") {
    return (
      <a href={resource.url} target="_blank" rel="noopener noreferrer">
        {resource.label}
      </a>
    );
  }

  return <Link to={resource.url}>{resource.label}</Link>;
}

export default function PathwayResults({ result, onRestart }) {
  const { primaryOutcome, scores, roadmapSteps, stats, overallScore } = result;

  return (
    <div className="pathway-results">
      <div className="pathway-disclaimer">
        <strong>Disclaimer:</strong> This tool is for educational purposes only
        and is not legal advice. It does not determine legal eligibility or
        rights.
      </div>

      <div className="pathway-outcome">
        <h2>{primaryOutcome.headline}</h2>
        <p>{primaryOutcome.message}</p>

        <ul className="pathway-outcome-resources">
          {primaryOutcome.resources.map((resourceId) => (
            <li key={resourceId}>
              <ResourceLink resourceId={resourceId} />
            </li>
          ))}
        </ul>
      </div>

      <section className="pathway-roadmap">
        <h3>Your Recommended Path</h3>
        <ol className="pathway-roadmap-steps">
          {roadmapSteps.map(({ resourceId, verb }, index) => {
            const resource = getResource(resourceId);
            return (
              <li key={`${resourceId}-${index}`}>
                <span className="pathway-roadmap-verb">{verb}:</span>
                <ResourceLink resourceId={resourceId} />
                {index < roadmapSteps.length - 1 && (
                  <span className="pathway-roadmap-arrow" aria-hidden="true">
                    ↓
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <div className="pathway-stats">
          <div>
            <span className="pathway-stat-value">{stats.readMinutes} min</span>
            <span className="pathway-stat-label">Estimated reading</span>
          </div>
          <div>
            <span className="pathway-stat-value">{stats.resourceCount}</span>
            <span className="pathway-stat-label">Resources</span>
          </div>
          <div>
            <span className="pathway-stat-value">{stats.downloadCount}</span>
            <span className="pathway-stat-label">Downloads</span>
          </div>
        </div>
      </section>

      <section className="pathway-scores">
        <div className="pathway-scores-header">
          <h3>Case Preparation Score</h3>
          <span className="pathway-overall-score">{overallScore}%</span>
        </div>

        <div className="pathway-overall-bar" aria-hidden="true">
          <div
            className="pathway-overall-fill"
            style={{ width: `${overallScore}%` }}
          />
        </div>

        {scoreCategories.map((category) => (
          <div className="pathway-score-row" key={category.id}>
            <div className="pathway-score-label">
              <span>{category.label}</span>
              <span>{scores[category.id]}%</span>
            </div>
            <div className="pathway-score-bar">
              <div
                className="pathway-score-fill"
                style={{ width: `${scores[category.id]}%` }}
              />
            </div>
            {scores[category.id] < 60 && (
              <p className="pathway-score-tip">
                Strengthen this area:{" "}
                <ResourceLink resourceId={category.weakResource} />
              </p>
            )}
          </div>
        ))}
      </section>

      <div className="pathway-actions">
        <button type="button" className="pathway-back-btn" onClick={onRestart}>
          Start over
        </button>
        <Link className="neon-btn" to="/guides/sentence-modification">
          Explore Guides
        </Link>
      </div>
    </div>
  );
}