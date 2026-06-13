import { useState, useEffect, useRef } from "react";
import { FiTruck, FiShield, FiAward, FiSun } from "react-icons/fi";
import "../css/WhyChooseUs.css";

const reasons = [
  {
    icon: FiSun,
    title: "100% Natural",
    desc: "No preservatives, no additives — just pure, wholesome ingredients nature intended.",
  },
  {
    icon: FiTruck,
    title: "Fast Delivery",
    desc: "Carefully packed and shipped within 24 hours. Delivered fresh to your doorstep.",
  },
  {
    icon: FiShield,
    title: "Quality Guarantee",
    desc: "Every batch is handpicked and tested. If you don't love it, we'll replace it.",
  },
  {
    icon: FiAward,
    title: "Premium Sourcing",
    desc: "We source directly from trusted farms, ensuring the highest quality ingredients.",
  },
];

function WhyChooseUs() {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`why-section ${sectionVisible ? "why-section--visible" : ""}`}
      id="about"
      ref={sectionRef}
    >
      <div className="why-inner">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Made With Love & Nature</h2>
          <p className="section-desc">
            We believe snacks should be delicious, healthy, and completely
            natural — never a compromise.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="why-card"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="why-card-icon-wrap">
                  <Icon className="why-card-icon" />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
