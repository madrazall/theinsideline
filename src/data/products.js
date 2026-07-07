import coverV1 from "../assets/images/cover-v1.png";
import coverV2 from "../assets/images/cover-v2.png";
import coverV3 from "../assets/images/cover-v3.png";
import coverV4 from "../assets/images/cover-v4.png";
import growthReflection from "../assets/images/growth-reflection.png";
import lifestyle from "../assets/images/lifestyle.png";
import activity1 from "../assets/images/cover-activity1.png";

const sheetProducts = [
  {
    siteSlug: "sentence-modification",
    sheetSlug: "sentence-modification-guide",
    title: "Sentence Modification",
    volume: 1,
    series: "legal",
    status: "available",
    cover: coverV1,
    description:
      "Learn how to prepare and file a Connecticut sentence modification petition with confidence.",
    longDescription:
      "A comprehensive self-advocacy guide covering eligibility, timelines, court procedures, forms, templates, sample letters, and practical strategies for pursuing a sentence modification in Connecticut.",
    features: [
      "Eligibility requirements and timelines",
      "Court procedures and filing steps",
      "Forms, templates, and sample letters",
      "Practical strategies for self-advocacy",
    ],
    pageCount: 60,
    seoTitle: "Volume One - Inside Line: Sentence Modification Guide",
    seoDescription:
      "Connecticut sentence modification guide with forms, templates, and practical self-advocacy resources.",
    relatedSlugs: ["habeas-corpus", "growth-reflection"],
    variants: [
      { sku: "IN-GD-0001", version: "Digital", price: 14.99, paymentLink: "https://buy.stripe.com/aFa00i3ZH0OLaUacmx4ko0b" },
      { sku: "IN-GD-0002", version: "Print", price: 29.99, paymentLink: "https://buy.stripe.com/fZu00i53L7d93rI0DP4ko0c" },
      { sku: "IN-GD-0003", version: "Bundle", price: 39.99, paymentLink: "https://buy.stripe.com/bJe9ASao57d90fwdqB4ko0d" },
    ],
  },
  {
    siteSlug: "habeas-corpus",
    sheetSlug: "habeas-corpus-guide",
    title: "Habeas Corpus",
    volume: 2,
    series: "legal",
    status: "available",
    cover: coverV2,
    description:
      "Understand habeas corpus and determine whether it's the right legal option for your case.",
    longDescription:
      "Explains Connecticut habeas corpus proceedings in plain language, including eligibility, common claims, filing procedures, supporting documentation, and legal resources.",
    features: [
      "Eligibility and common constitutional claims",
      "Filing procedures and documentation",
      "Plain-language explanation of the process",
      "Practical preparation strategies",
    ],
    pageCount: 60,
    seoTitle: "Volume Two - Inside Line: Habeas Corpus",
    seoDescription: "Plain-language Connecticut habeas corpus guide.",
    relatedSlugs: ["sentence-modification", "reentry"],
    variants: [
      { sku: "IN-GD-0004", version: "Digital", price: 14.99, paymentLink: "https://buy.stripe.com/3cIbJ0bs97d98M2bit4ko0e" },
      { sku: "IN-GD-0005", version: "Print", price: 29.99, paymentLink: "https://buy.stripe.com/14A7sK53L695e6m72d4ko0f" },
      { sku: "IN-GD-0006", version: "Bundle", price: 39.99, paymentLink: "https://buy.stripe.com/dRm14mao5fJF5zQbit4ko0g" },
    ],
  },
  {
    siteSlug: "long-distance-parenting",
    sheetSlug: "child-support-parenting",
    title: "Long Distance Parenting",
    volume: 3,
    series: "legal",
    status: "coming-soon",
    cover: coverV3,
    description:
      "Navigate parenting and family relationships while incarcerated, from a distance.",
    longDescription:
      "Practical guidance for incarcerated parents addressing child support modifications, parenting plans, visitation, communication, and maintaining family relationships.",
    features: [
      "Parenting plans and visitation guidance",
      "Communication strategies from inside",
      "Family relationship maintenance",
      "Practical resources for supporters",
    ],
    pageCount: 60,
    seoTitle: "Volume Three - Inside Line: Long Distance Parenting",
    seoDescription: "Guide for incarcerated parents navigating family relationships.",
    relatedSlugs: ["sentence-modification", "reentry"],
    variants: [],
  },
  {
    siteSlug: "reentry",
    sheetSlug: "successful-reentry",
    title: "Reentry",
    volume: 4,
    series: "legal",
    status: "coming-soon",
    cover: coverV4,
    description: "Prepare for release with confidence and a practical plan.",
    longDescription:
      "Covers housing, employment, identification, finances, transportation, community resources, and rebuilding life after incarceration.",
    features: [
      "Housing and employment preparation",
      "Identification and financial planning",
      "Community resources and transportation",
      "First 48 hours after release",
    ],
    pageCount: 60,
    seoTitle: "Volume Four - Inside Line: Reentry",
    seoDescription: "Reentry planning guide for successful transition.",
    relatedSlugs: ["habeas-corpus", "long-distance-parenting"],
    variants: [],
  },
  {
    siteSlug: "growth-reflection",
    sheetSlug: "the-conclave",
    title: "Growth & Reflection",
    series: "off-the-record",
    status: "available",
    cover: growthReflection,
    description:
      "A guided journal for personal growth, reflection, and intentional change.",
    longDescription:
      "A structured journal featuring prompts, exercises, goal setting, and reflection pages designed to help readers develop resilience, self-awareness, and healthier thinking patterns.",
    features: [
      "Guided reflection prompts",
      "Goal setting exercises",
      "Self-awareness practices",
      "Resilience-building activities",
    ],
    pageCount: 60,
    seoTitle: "Foundation: Growth & Reflection",
    seoDescription: "Guided journal for personal growth and reflection.",
    relatedSlugs: ["lifestyle", "activity-book-1"],
    variants: [
      { sku: "IN-EX-0001", version: "Digital", price: 19.99, paymentLink: "https://buy.stripe.com/7sYbJ0ao5aplfaq1HT4ko0n" },
      { sku: "IN-EX-0002", version: "Print", price: 34.99, paymentLink: "https://buy.stripe.com/9B64gygMt1SP7HY2LX4ko0o" },
      { sku: "IN-EX-0003", version: "Bundle", price: 45.99, paymentLink: "https://buy.stripe.com/3cI4gy53L5514vMeuF4ko0p" },
    ],
  },
  {
    siteSlug: "lifestyle",
    title: "Lifestyle",
    series: "off-the-record",
    status: "coming-soon",
    cover: lifestyle,
    description: "Practical lifestyle guidance for life inside and beyond.",
    longDescription:
      "A forthcoming Off the Record guide focused on daily living, routines, and practical choices that support stability and growth.",
    features: ["Daily routines", "Practical living strategies", "Mindset and habits"],
    pageCount: null,
    relatedSlugs: ["growth-reflection"],
    variants: [],
  },
  {
    siteSlug: "activity-book-1",
    title: "Activity Book 1",
    series: "activity",
    status: "available",
    cover: activity1,
    description: "Engaging activities designed for reflection and creative expression.",
    longDescription:
      "An activity book with exercises, prompts, and creative tasks designed to support personal growth and mental engagement.",
    features: ["Creative exercises", "Reflection prompts", "Engaging activities"],
    pageCount: null,
    relatedSlugs: ["growth-reflection", "activity-book-2"],
    variants: [],
  },
  {
    siteSlug: "activity-book-2",
    title: "Activity Book 2",
    series: "activity",
    status: "coming-soon",
    cover: null,
    description: "The next activity book in the Inside Line collection.",
    longDescription: "Coming soon.",
    features: [],
    pageCount: null,
    relatedSlugs: ["activity-book-1"],
    variants: [],
  },
];

export const allProducts = sheetProducts;

export function getProduct(slug) {
  return allProducts.find((p) => p.siteSlug === slug);
}

export function getRelatedProducts(slugs = []) {
  return slugs.map((slug) => getProduct(slug)).filter(Boolean);
}

export const legalGuides = allProducts
  .filter((p) => p.series === "legal")
  .map(toCardGuide);

export const offTheRecord = allProducts
  .filter((p) => p.series === "off-the-record")
  .map(toCardGuide);

export const activityBooks = allProducts
  .filter((p) => p.series === "activity")
  .map(toCardGuide);

function toCardGuide(product) {
  return {
    title: product.title,
    volume: product.volume,
    status: product.status === "available" ? "Available" : "Coming Soon",
    link: product.status === "available" ? `/guides/${product.siteSlug}` : "#",
    siteSlug: product.siteSlug,
  };
}