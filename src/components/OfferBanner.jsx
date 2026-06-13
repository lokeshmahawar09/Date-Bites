import { useState, useEffect, useRef } from "react";
import "../css/OfferBanner.css";

function OfferBanner() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`offer-banner ${visible ? "offer-banner--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="offer-banner-bg" />
      <div className="offer-banner-inner">
        <span className="offer-banner-tag">Limited Time</span>
        <h2 className="offer-banner-title">
          <span className="offer-banner-discount">20% Off</span>{" "}
          on Premium Date Bites
        </h2>
        <p className="offer-banner-desc">
          Handpicked medjool dates, artisan crafted.
        </p>
        <button className="offer-banner-btn btn-shine">Shop the Offer</button>
      </div>
    </section>
  );
}

export default OfferBanner;
