import { useState, useEffect, useRef } from "react";
import brandImg from "../assets/images/hero-product.png";
import "../css/BrandStory.css";
import "../css/images.css";

function BrandStory() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`story ${visible ? "story--visible" : ""}`} id="about" ref={ref}>
      <div className="story-bg" />
      <div className="story-inner">
        <div className="story-content">
          <span className="story-tag">Our Story</span>
          <h2 className="story-title">Crafted by Nature,<br />Perfected by Us</h2>
          <div className="story-text">
            <p>
              Every Date Bite begins with premium medjool dates sourced from trusted farms.
              We believe the best snacks come from nature — no preservatives, no additives, just pure goodness.
            </p>
            <p>
              From our kitchen to your doorstep, each batch is handcrafted with care.
              We combine time-honored recipes with modern nutrition to create snacks that
              taste incredible and nourish your body.
            </p>
          </div>
        </div>
        <div className="story-image-wrap">
          <div className="story-image-glow" />
          <div className="img-frame img-w-320">
            <div className="img-1x1">
              <img src={brandImg} alt="Date Bites" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
