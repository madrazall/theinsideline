export const testimonials = [
  // Add approved quotes here, e.g.:
  // {
  //   id: "t1",
  //   quote: "This explained more than months of searching.",
  //   attribution: "Family member, Connecticut",
  //   guide: "sentence-modification",
  //   featured: true,
  // },
];

export function getFeaturedTestimonials(limit = 3) {
  return testimonials.filter((t) => t.featured).slice(0, limit);
}

export function getTestimonialsForGuide(slug) {
  return testimonials.filter((t) => t.guide === slug);
}