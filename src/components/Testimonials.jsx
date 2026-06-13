import { useState, useEffect, useRef } from "react";
import "../css/Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Verified Buyer",
    text: "These date bites are incredible! I've been searching for a healthy snack that actually tastes good. My whole family loves them.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Verified Buyer",
    text: "The quality is unmatched. You can really taste the difference when ingredients are this fresh. The gift packs make perfect presents too.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Verified Buyer",
    text: "Finally, a snack that satisfies my sweet tooth without the guilt. The delivery was fast and packaging was beautiful. Highly recommend!",
    rating: 5,
  },
];

function Testimonials() {
  const sectionRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`testimonials-section ${sectionVisible ? "testimonials-section--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="testimonials-inner">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-desc">
            Real reviews from real people who made the switch to natural snacking.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="testimonial-star">&#9733;</span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar testimonial-avatar--initials">
                  {t.name.charAt(0)}
                </div>
                <div className="testimonial-author-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
