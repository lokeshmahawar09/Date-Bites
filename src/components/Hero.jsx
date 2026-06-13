import { useState, useEffect } from "react";
import { FiShoppingCart, FiHeart, FiCheck } from "react-icons/fi";
import heroProduct from "../assets/images/hero-product.png";
import "../css/Hero.css";
import "../css/images.css";

function Hero() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(true);
  }, []);

  return (
    <section className={`hero2 ${entered ? "hero2--entered" : ""}`} id="featured">
      <div className="hero2-bg" />

      <div className="hero2-inner">
        <div className="hero2-card">
          <div className="hero2-card-image-wrap">
            <div className="hero2-image-glow" />
            <span className="hero2-badge-top">Featured</span>
            <div className="img-frame img-w-320">
              <div className="img-1x1">
                <img src={heroProduct} alt="Signature Date Bites" />
              </div>
            </div>
          </div>

          <div className="hero2-card-body">
            <span className="hero2-suptitle">Today's Pick</span>

            <h2 className="hero2-title">Signature Date Bites</h2>

            <div className="hero2-rating">
              <div className="hero2-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="hero2-star">&#9733;</span>
                ))}
              </div>
              <span className="hero2-rating-text">4.8</span>
              <span className="hero2-rating-count">(1,200 reviews)</span>
            </div>

            <p className="hero2-desc">
              Handcrafted with premium medjool dates. Rich, chewy &amp; naturally sweet — the perfect guilt-free indulgence.
            </p>

            <div className="hero2-pricing">
              <span className="hero2-price-current">₹449</span>
              <span className="hero2-price-old">₹599</span>
              <span className="hero2-price-badge">25% OFF</span>
            </div>

            <div className="hero2-actions">
              <button className="hero2-btn hero2-btn--primary btn-shine">
                <FiShoppingCart /> Buy Now
              </button>
              <button className="hero2-btn hero2-btn--secondary btn-shine">
                <FiHeart /> Add to Cart
              </button>
            </div>

            <div className="hero2-features">
              <span className="hero2-feature"><FiCheck /> Free Shipping</span>
              <span className="hero2-feature"><FiCheck /> 100% Natural</span>
              <span className="hero2-feature"><FiCheck /> Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
