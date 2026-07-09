export const NEWSLETTER_FORM_ACTION = "https://formspree.io/f/xgojjzwp";

const queueArticles = [
  { slug: "what-is-habeas-corpus", label: "What Is Habeas Corpus? (Sunday)" },
  {
    slug: "sentence-modification-vs-habeas",
    label: "Sentence Modification vs. Habeas Corpus",
    icon: "⚖",
  },
  { slug: "return-of-service", label: "Understanding Return of Service" },
  { slug: "legal-binder", label: "Building Your Legal Binder" },
  {
    slug: "modification-hearing",
    label: "What Happens at a Sentence Modification Hearing?",
    icon: "⚖",
  },
  { slug: "legal-terms", label: "Connecticut Legal Terms Explained" },
  { slug: "preparing-for-court", label: "Preparing for Court" },
  { slug: "organizing-evidence", label: "Organizing Evidence" },
  {
    slug: "staying-connected-child",
    label: "Staying Connected with Your Child During Incarceration",
    icon: "👨‍👩‍👧",
  },
  { slug: "preparing-for-reentry", label: "Preparing for Reentry" },
];

const promos = [
  { slug: "promo-new-guide", label: "New Guide Coming Soon", icon: "⭐", to: "/guides" },
  {
    slug: "promo-habeas-v2",
    label: "Volume 2: Habeas Corpus",
    to: "/guides/habeas-corpus",
  },
  {
    slug: "promo-weekly-articles",
    label: "New Articles Published Weekly",
    to: "/blog",
  },
];

function interleavePromos(articles, promoItems, every = 3) {
  const track = [];
  let promoIndex = 0;

  articles.forEach((article, index) => {
    track.push({ type: "article", ...article });

    if ((index + 1) % every === 0 && promoIndex < promoItems.length) {
      track.push({ type: "promo", ...promoItems[promoIndex] });
      promoIndex += 1;
    }
  });

  while (promoIndex < promoItems.length) {
    track.push({ type: "promo", ...promoItems[promoIndex] });
    promoIndex += 1;
  }

  return track;
}

export function buildTickerTrack() {
  return interleavePromos(queueArticles, promos);
}

export function getUpcomingArticle(slug) {
  return queueArticles.find((article) => article.slug === slug);
}