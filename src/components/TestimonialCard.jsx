export default function TestimonialCard({ testimonial }) {
  return (
    <blockquote className="testimonial-card">
      <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="testimonial-attribution">
        — {testimonial.attribution}
      </footer>
    </blockquote>
  );
}