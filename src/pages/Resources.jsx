const resources = [
  { title: "Court Forms", description: "Official forms organized by jurisdiction and case type." },
  { title: "Directories", description: "Agencies, courts, and contact information in one place." },
  { title: "Statutes", description: "Relevant laws explained in plain language." },
  { title: "Organizations", description: "Legal aid, advocacy groups, and support networks." },
  { title: "Downloads", description: "Printable worksheets, templates, and checklists." },
  { title: "Videos", description: "Guided walkthroughs and educational content." },
];

export default function Resources() {
  return (
    <div className="page-fade">
      <section className="page-header container">
        <h1>Resources</h1>
        <p>
          A growing library of court forms, directories, statutes, and
          practical tools. This section is under development.
        </p>
      </section>

      <div className="resources-grid">
        {resources.map((item) => (
          <article className="resource-card" key={item.title}>
            <span className="status-badge coming-soon">Coming Soon</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}