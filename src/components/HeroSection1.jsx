import { useState, useEffect } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import packetImg from "../assets/images/date bite packet.avif";
import canImg from "../assets/images/date bite can.jpg";
import productImg from "../assets/images/ander product.webp";
import "../css/HeroSection1.css";
import "../css/images.css";

const stageLabels = ["Premium Packaging", "Eco-Friendly Can", "Handcrafted Pieces"];

function HeroSection1() {
  const [stage, setStage] = useState(0);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`hero1 ${entered ? "hero1--entered" : ""}`} id="hero-top">
      <div className="hero1-bg-layer" />
      <div className="hero1-bg-glow hero1-bg-glow--1" />
      <div className="hero1-bg-glow hero1-bg-glow--2" />

      <div className="hero1-particle hero1-particle--1" />
      <div className="hero1-particle hero1-particle--2" />
      <div className="hero1-particle hero1-particle--3" />
      <div className="hero1-particle hero1-particle--4" />
      <div className="hero1-particle hero1-particle--5" />

      <div className="hero1-inner">
        <div className="hero1-content">
          <div className="hero1-badges">
            <span className="hero1-badge hero1-badge--stock">In Stock</span>
            <span className="hero1-badge hero1-badge--bestseller">Bestseller</span>
          </div>

          <h1 className="hero1-heading">
            Premium<br />
            <span className="hero1-heading-accent">Date Bites</span>
          </h1>

          <p className="hero1-desc">
            Handcrafted with premium medjool dates — rich, chewy &amp; naturally sweet.
          </p>

          <div className="hero1-rating">
            <div className="hero1-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="hero1-star">&#9733;</span>
              ))}
            </div>
            <span className="hero1-rating-text">4.8</span>
            <span className="hero1-rating-count">(1,200 reviews)</span>
          </div>

          <div className="hero1-pricing">
            <span className="hero1-price-current">₹449</span>
            <span className="hero1-price-old">₹599</span>
            <span className="hero1-price-badge">25% OFF</span>
          </div>

          <div className="hero1-actions">
            <button className="hero1-btn hero1-btn--primary btn-shine">
              <FiShoppingCart /> Buy Now
            </button>
            <button className="hero1-btn hero1-btn--secondary btn-shine">
              <FiHeart /> Add to Cart
            </button>
          </div>

          <div className="hero1-trust">
            <span className="hero1-trust-item">✓ Free Shipping</span>
            <span className="hero1-trust-item">✓ 100% Natural</span>
            <span className="hero1-trust-item">✓ Secure Checkout</span>
          </div>
        </div>

        <div className="hero1-showcase">
          <div className="hero1-showcase-glow" />

          <div
            className={`hero1-showcase-stage hero1-showcase-stage--0 ${stage === 0 ? "hero1-showcase-stage--active" : ""}`}
          >
            <div className="img-frame img-w-380">
              <div className="img-1x1">
                <img src={packetImg} alt="Date Bite Packet" />
              </div>
            </div>
            <span className="hero1-showcase-label">{stageLabels[0]}</span>
          </div>

          <div
            className={`hero1-showcase-stage hero1-showcase-stage--1 ${stage === 1 ? "hero1-showcase-stage--active" : ""}`}
          >
            <div className="img-frame img-w-380">
              <div className="img-1x1">
                <img src={canImg} alt="Date Bite Can" />
              </div>
            </div>
            <span className="hero1-showcase-label">{stageLabels[1]}</span>
          </div>

          <div
            className={`hero1-showcase-stage hero1-showcase-stage--2 ${stage === 2 ? "hero1-showcase-stage--active" : ""}`}
          >
            <div className="img-frame img-w-380">
              <div className="img-1x1">
                <img src={productImg} alt="Handcrafted Date Bites" />
              </div>
            </div>
            <span className="hero1-showcase-label">{stageLabels[2]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
