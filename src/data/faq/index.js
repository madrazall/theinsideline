import { aboutInsideLine } from "./about";
import { gettingStarted } from "./getting-started";
import { sentenceModification } from "./sentence-modification";
import { habeasCorpus } from "./habeas-corpus";
import { courtProcess, connecticutForms } from "./court-and-forms";
import {
  legalDefinitions,
  selfAdvocacy,
  familyParenting,
  reentryResources,
  prisonResources,
} from "./topics";
import {
  ordersShipping,
  resourcesCategory,
  contact,
  learn,
} from "./orders-and-more";

export const faqCategories = [
  aboutInsideLine,
  gettingStarted,
  sentenceModification,
  habeasCorpus,
  courtProcess,
  connecticutForms,
  legalDefinitions,
  selfAdvocacy,
  familyParenting,
  reentryResources,
  prisonResources,
  ordersShipping,
  resourcesCategory,
  contact,
  learn,
];

export function getFaqCategory(slug) {
  return faqCategories.find((c) => c.slug === slug);
}

export function getFaqQuestionCount(category) {
  return category.subsections.reduce(
    (sum, section) => sum + section.items.length,
    0
  );
}

export function getTotalFaqQuestionCount() {
  return faqCategories.reduce(
    (sum, cat) => sum + getFaqQuestionCount(cat),
    0
  );
}

export const faqGettingStarted = {
  slug: "getting-started",
  title: "Getting Started",
  description:
    "New here or not sure what you need? Start with the basics — no legal background required.",
};

export const faqNavTopics = [
  { slug: "about-inside-line" },
  { slug: "sentence-modification" },
  { slug: "habeas-corpus" },
  { slug: "court-process" },
  { slug: "connecticut-forms" },
  { slug: "legal-definitions" },
  { slug: "self-advocacy" },
  { slug: "family-parenting" },
  { slug: "orders-shipping" },
].map(({ slug }) => {
  const category = faqCategories.find((c) => c.slug === slug);
  return {
    slug,
    title: category.title,
    description: category.description,
  };
});

export const starterQuestions = [
  {
    id: "starter-legal-advice",
    question: "Is this legal advice?",
    answer:
      "No. Inside Line guides are educational resources and practical workbooks. They do not replace an attorney. They help you understand processes, organize information, and know what steps come next.",
  },
  {
    id: "starter-where-begin",
    question: "Where do I begin?",
    answer:
      "Start by identifying your goal. If you want to ask the court to reconsider a sentence, look at Volume 1: Sentence Modification. If you believe a constitutional error affected your case, see Volume 2: Habeas Corpus. Visit the Guide Library to browse every publication.",
  },
  {
    id: "starter-who-for",
    question: "Who are these guides for?",
    answer:
      "Incarcerated individuals, family members, friends, advocates, and mentors. No legal background is required. The guides are written in plain language for people who need practical steps.",
  },
  {
    id: "starter-family",
    question: "Can my family help me use these guides?",
    answer:
      "Yes. Many tasks can be completed by family members or supporters on the outside. Each guide explains which steps can be done from inside a facility and which need someone on the outside.",
  },
  {
    id: "starter-receive",
    question: "How do I receive a guide after I purchase?",
    answer:
      "Digital editions are delivered immediately by email with a download link. Print editions ship to the address you provide at checkout. Bundle purchases include both.",
  },
];

export const faqMoreTopics = [
  { slug: "reentry-resources" },
  { slug: "prison-resources" },
  { slug: "resources" },
  { slug: "contact" },
  { slug: "learn" },
].map(({ slug }) => {
  const category = faqCategories.find((c) => c.slug === slug);
  return { slug, title: category.title };
});