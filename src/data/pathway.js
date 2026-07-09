export const resources = {
  whatIsMod: {
    id: "whatIsMod",
    label: "What Is a Sentence Modification?",
    type: "article",
    url: "/blog/what-is-sentence-modification-connecticut",
    readMinutes: 5,
  },
  whoEligible: {
    id: "whoEligible",
    label: "Who Is Eligible?",
    type: "article",
    url: "/blog/who-is-eligible-sentence-modification-connecticut",
    readMinutes: 5,
  },
  howPrepare: {
    id: "howPrepare",
    label: "How to Prepare a Strong Request",
    type: "article",
    url: "/blog/how-to-prepare-strong-sentence-modification-request",
    readMinutes: 6,
  },
  commonMistakes: {
    id: "commonMistakes",
    label: "Common Mistakes",
    type: "article",
    url: "/blog/7-common-mistakes-sentence-modification-request",
    readMinutes: 5,
  },
  whatIsHabeas: {
    id: "whatIsHabeas",
    label: "What Is Habeas Corpus?",
    type: "article",
    url: "/blog/what-is-habeas-corpus-plain-english-guide",
    readMinutes: 5,
  },
  modVsHabeas: {
    id: "modVsHabeas",
    label: "Sentence Modification vs. Habeas Corpus",
    type: "article",
    url: "/blog/upcoming/sentence-modification-vs-habeas",
    readMinutes: 4,
  },
  courtProcess: {
    id: "courtProcess",
    label: "Connecticut Court Process",
    type: "kb",
    url: "/faq/court-process",
    readMinutes: 4,
  },
  connecticutForms: {
    id: "connecticutForms",
    label: "Connecticut Forms",
    type: "kb",
    url: "/faq/connecticut-forms",
    readMinutes: 3,
  },
  sentenceModKb: {
    id: "sentenceModKb",
    label: "Sentence Modification Knowledge Base",
    type: "kb",
    url: "/faq/sentence-modification",
    readMinutes: 6,
  },
  habeasKb: {
    id: "habeasKb",
    label: "Habeas Corpus Knowledge Base",
    type: "kb",
    url: "/faq/habeas-corpus",
    readMinutes: 6,
  },
  sentenceModGuide: {
    id: "sentenceModGuide",
    label: "Sentence Modification Guide",
    type: "guide",
    url: "/guides/sentence-modification",
    readMinutes: 0,
  },
  habeasGuide: {
    id: "habeasGuide",
    label: "Habeas Corpus Guide",
    type: "guide",
    url: "/guides/habeas-corpus",
    readMinutes: 0,
  },
  prepChecklist: {
    id: "prepChecklist",
    label: "Preparation Checklist",
    type: "download",
    url: null,
    readMinutes: 0,
  },
  timelineTemplate: {
    id: "timelineTemplate",
    label: "Timeline Template",
    type: "download",
    url: null,
    readMinutes: 0,
  },
  documentChecklist: {
    id: "documentChecklist",
    label: "Document Checklist",
    type: "download",
    url: null,
    readMinutes: 0,
  },
  reentryWorksheet: {
    id: "reentryWorksheet",
    label: "Reentry Planning Worksheet",
    type: "download",
    url: null,
    readMinutes: 0,
  },
  legalBinder: {
    id: "legalBinder",
    label: "Building Your Legal Binder",
    type: "article",
    url: "/blog/upcoming/legal-binder",
    readMinutes: 4,
  },
};

export const outcomes = {
  greatStart: {
    id: "greatStart",
    headline: "You've got a solid place to begin.",
    message:
      "Based on your answers, you're asking the right questions and appear to be at the beginning of the research process. The next step is understanding the legal process and gathering information before taking action.",
    resources: ["whatIsMod", "whoEligible", "sentenceModGuide", "prepChecklist"],
  },
  gatherInfo: {
    id: "gatherInfo",
    headline: "Build your foundation first.",
    message:
      "Before thinking about paperwork, spend some time learning how the process works. Understanding the requirements now can save time and frustration later.",
    resources: ["whatIsMod", "commonMistakes", "courtProcess"],
  },
  getOrganized: {
    id: "getOrganized",
    headline: "Organization may be your biggest opportunity.",
    message:
      "Your answers suggest you're preparing to move forward. Creating a timeline, organizing your records, and gathering supporting documents can help you better understand your case.",
    resources: ["timelineTemplate", "legalBinder", "documentChecklist"],
  },
  rehabFocus: {
    id: "rehabFocus",
    headline: "Document your progress.",
    message:
      "If you've completed programs, earned certificates, maintained employment, or participated in treatment, make sure those accomplishments are organized and easy to present.",
    resources: ["howPrepare", "legalBinder", "documentChecklist"],
  },
  exploreOptions: {
    id: "exploreOptions",
    headline: "There may be more than one path to consider.",
    message:
      "Based on your responses, it may be helpful to learn about other post-conviction remedies in addition to sentence modification.",
    resources: ["whatIsHabeas", "modVsHabeas", "habeasKb"],
  },
  legalProfessional: {
    id: "legalProfessional",
    headline: "Your situation may benefit from professional legal guidance.",
    message:
      "Some situations involve legal questions that require individualized advice. This educational tool cannot determine legal rights or eligibility.",
    resources: ["sentenceModKb", "habeasKb", "courtProcess"],
  },
  justBeginning: {
    id: "justBeginning",
    headline: "Everyone starts somewhere.",
    message:
      "If you're new to the legal process, don't worry. Start with the basics and build your understanding one step at a time.",
    resources: ["whatIsMod", "whoEligible", "howPrepare", "commonMistakes"],
  },
};

export const scoreCategories = [
  {
    id: "processUnderstanding",
    label: "Process Understanding",
    weakResource: "whatIsMod",
  },
  {
    id: "documentOrganization",
    label: "Document Organization",
    weakResource: "documentChecklist",
  },
  {
    id: "rehabilitationRecords",
    label: "Rehabilitation Records",
    weakResource: "howPrepare",
  },
  {
    id: "reentryPlanning",
    label: "Reentry Planning",
    weakResource: "reentryWorksheet",
  },
];

export const questions = [
  {
    id: "goal",
    question: "What are you trying to accomplish?",
    options: [
      { id: "learn", label: "Learn the basics — I'm just starting", scores: { processUnderstanding: 10 }, tags: ["justBeginning"] },
      { id: "sentenceMod", label: "Ask the court to reconsider my sentence", scores: { processUnderstanding: 20 }, tags: ["sentenceMod"] },
      { id: "challenge", label: "Challenge my conviction or raise a constitutional issue", scores: { processUnderstanding: 15 }, tags: ["habeas", "exploreAlternatives"] },
      { id: "support", label: "Help a family member navigate the process", scores: { processUnderstanding: 15 }, tags: ["sentenceMod"] },
    ],
  },
  {
    id: "processFamiliarity",
    question: "How familiar are you with Connecticut court process?",
    options: [
      { id: "none", label: "Not familiar at all", scores: { processUnderstanding: 5 }, tags: ["gatherInfo"] },
      { id: "some", label: "I've read a little but still learning", scores: { processUnderstanding: 35 } },
      { id: "moderate", label: "I understand the general steps", scores: { processUnderstanding: 65 } },
      { id: "strong", label: "I'm comfortable with how filings work", scores: { processUnderstanding: 90 } },
    ],
  },
  {
    id: "documents",
    question: "Do you have key case information organized?",
    options: [
      { id: "none", label: "Not yet — still locating records", scores: { documentOrganization: 10 }, tags: ["getOrganized"] },
      { id: "partial", label: "Some documents, but not organized", scores: { documentOrganization: 40 }, tags: ["getOrganized"] },
      { id: "mostly", label: "Most records gathered in one place", scores: { documentOrganization: 70 } },
      { id: "complete", label: "Fully organized with labeled sections", scores: { documentOrganization: 95 } },
    ],
  },
  {
    id: "rehabilitation",
    question: "Have you documented rehabilitation or personal progress?",
    options: [
      { id: "none", label: "Not applicable or not yet", scores: { rehabilitationRecords: 20 } },
      { id: "some", label: "Some programs or certificates", scores: { rehabilitationRecords: 50 } },
      { id: "documented", label: "Certificates and records gathered", scores: { rehabilitationRecords: 75 }, tags: ["rehabFocus"] },
      { id: "strong", label: "Well-documented with support letters", scores: { rehabilitationRecords: 95 }, tags: ["rehabFocus"] },
    ],
  },
  {
    id: "reentry",
    question: "Do you have reentry planning started?",
    options: [
      { id: "none", label: "Haven't thought about it yet", scores: { reentryPlanning: 15 } },
      { id: "ideas", label: "Some ideas but nothing written down", scores: { reentryPlanning: 40 } },
      { id: "draft", label: "A draft plan for housing or employment", scores: { reentryPlanning: 70 } },
      { id: "solid", label: "A realistic plan with support in place", scores: { reentryPlanning: 95 } },
    ],
  },
  {
    id: "priorFilings",
    question: "Have you already filed an appeal or prior modification request?",
    options: [
      { id: "none", label: "No prior filings", scores: {} },
      { id: "appeal", label: "Yes — I filed an appeal", scores: {}, tags: ["exploreAlternatives", "habeas"] },
      { id: "modification", label: "Yes — a prior sentence modification", scores: {}, tags: ["exploreAlternatives"] },
      { id: "both", label: "Both appeal and modification", scores: {}, tags: ["exploreAlternatives", "needsAttorney"] },
    ],
  },
  {
    id: "complexity",
    question: "How would you describe your situation?",
    options: [
      { id: "straightforward", label: "Straightforward — one case, clear goal", scores: {} },
      { id: "moderate", label: "Somewhat complex — multiple factors", scores: {} },
      { id: "complex", label: "Complex — multiple cases or federal involvement", scores: {}, tags: ["needsAttorney"] },
      { id: "veryComplex", label: "Very complex — recent denial or unusual circumstances", scores: {}, tags: ["needsAttorney", "legalProfessional"] },
    ],
  },
  {
    id: "stage",
    question: "Where are you in the process?",
    options: [
      { id: "researching", label: "Just researching — not ready to file", scores: {}, tags: ["greatStart", "justBeginning"] },
      { id: "learning", label: "Learning how the process works", scores: {}, tags: ["gatherInfo"] },
      { id: "gathering", label: "Gathering documents and organizing", scores: {}, tags: ["getOrganized"] },
      { id: "ready", label: "Preparing to file soon", scores: {}, tags: ["getOrganized", "rehabFocus"] },
    ],
  },
];

const defaultRoadmap = [
  { resourceId: "whatIsMod", verb: "Read" },
  { resourceId: "whoEligible", verb: "Learn" },
  { resourceId: "sentenceModGuide", verb: "Explore" },
  { resourceId: "timelineTemplate", verb: "Organize" },
  { resourceId: "commonMistakes", verb: "Continue" },
];

function collectTags(answers) {
  const tags = new Set();
  questions.forEach((q) => {
    const option = q.options.find((o) => o.id === answers[q.id]);
    option?.tags?.forEach((tag) => tags.add(tag));
  });
  return tags;
}

function collectScores(answers) {
  const scores = {
    processUnderstanding: 25,
    documentOrganization: 25,
    rehabilitationRecords: 25,
    reentryPlanning: 25,
  };

  questions.forEach((q) => {
    const option = q.options.find((o) => o.id === answers[q.id]);
    if (!option?.scores) return;
    Object.entries(option.scores).forEach(([key, value]) => {
      scores[key] = Math.max(scores[key], value);
    });
  });

  return scores;
}

function pickPrimaryOutcome(tags, scores) {
  if (tags.has("legalProfessional") || tags.has("needsAttorney")) {
    return outcomes.legalProfessional;
  }
  if (tags.has("exploreAlternatives") || tags.has("habeas")) {
    return outcomes.exploreOptions;
  }
  if (tags.has("rehabFocus") && scores.rehabilitationRecords >= 50) {
    return outcomes.rehabFocus;
  }
  if (tags.has("getOrganized") || tags.has("ready")) {
    return outcomes.getOrganized;
  }
  if (tags.has("gatherInfo") || scores.processUnderstanding < 35) {
    return outcomes.gatherInfo;
  }
  if (tags.has("greatStart")) {
    return outcomes.greatStart;
  }
  if (tags.has("justBeginning")) {
    return outcomes.justBeginning;
  }
  if (scores.processUnderstanding >= 50 && scores.documentOrganization < 50) {
    return outcomes.getOrganized;
  }
  return outcomes.greatStart;
}

function buildRoadmap(tags, scores) {
  const steps = [];
  const used = new Set();

  function addStep(resourceId, verb) {
    if (used.has(resourceId) || !resources[resourceId]) return;
    used.add(resourceId);
    steps.push({ resourceId, verb });
  }

  addStep("whatIsMod", "Read");

  if (tags.has("habeas") || tags.has("exploreAlternatives")) {
    addStep("whatIsHabeas", "Learn");
    addStep("modVsHabeas", "Compare");
    addStep("habeasKb", "Explore");
    addStep("habeasGuide", "Continue");
  } else {
    addStep("whoEligible", "Learn");
    addStep("sentenceModGuide", "Explore");
  }

  if (scores.documentOrganization < 60) {
    addStep("timelineTemplate", "Organize");
    addStep("documentChecklist", "Download");
  }

  if (scores.rehabilitationRecords >= 50) {
    addStep("howPrepare", "Strengthen");
  }

  addStep("commonMistakes", "Continue");

  if (tags.has("habeas")) {
    addStep("whatIsHabeas", "Next topic");
  } else if (tags.has("exploreAlternatives")) {
    addStep("whatIsHabeas", "Next topic");
  }

  if (steps.length < 4) {
    defaultRoadmap.forEach(({ resourceId, verb }) => addStep(resourceId, verb));
  }

  return steps.slice(0, 7);
}

function computeStats(roadmapSteps) {
  let readMinutes = 0;
  let resourceCount = 0;
  let downloadCount = 0;

  roadmapSteps.forEach(({ resourceId }) => {
    const resource = resources[resourceId];
    if (!resource) return;
    resourceCount += 1;
    readMinutes += resource.readMinutes || 0;
    if (resource.type === "download" && resource.url) downloadCount += 1;
  });

  return {
    readMinutes: Math.max(readMinutes, 12),
    resourceCount,
    downloadCount,
  };
}

export function calculatePathway(answers) {
  const tags = collectTags(answers);
  const scores = collectScores(answers);
  const primaryOutcome = pickPrimaryOutcome(tags, scores);
  const roadmapSteps = buildRoadmap(tags, scores);
  const stats = computeStats(roadmapSteps);
  const overallScore = Math.round(
    Object.values(scores).reduce((sum, v) => sum + v, 0) / 4
  );

  return {
    primaryOutcome,
    scores,
    roadmapSteps,
    stats,
    overallScore,
  };
}

export function getResource(id) {
  return resources[id];
}