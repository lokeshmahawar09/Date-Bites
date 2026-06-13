import { useState, useEffect, useRef } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import product1 from "../assets/images/product1.webp";
import product2 from "../assets/images/product2.webp";
import product3 from "../assets/images/product3.webp";
import product4 from "../assets/images/product4.webp";
import product5 from "../assets/images/product5.jpg";
import product6 from "../assets/images/product6.webp";
import product7 from "../assets/images/product7.webp";
import product8 from "../assets/images/product8.webp";
import "../css/FeaturedProducts.css";
import "../css/images.css";

const products = [
  {
    id: 1,
    name: "Classic Date Bites",
    image: product1,
    rating: 4.5,
    reviews: 342,
    price: 249,
    originalPrice: 299,
  },
  {
    id: 2,
    name: "Almond Date Delight",
    image: product2,
    rating: 4.7,
    reviews: 218,
    price: 349,
    originalPrice: 429,
  },
  {
    id: 3,
    name: "Coconut Date Rolls",
    image: product3,
    rating: 4.6,
    reviews: 189,
    price: 279,
  },
  {
    id: 4,
    name: "Premium Gift Pack",
    image: product4,
    rating: 4.9,
    reviews: 512,
    price: 899,
    originalPrice: 1099,
  },
  {
    id: 5,
    name: "Date & Nut Mix",
    image: product5,
    rating: 4.4,
    reviews: 156,
    price: 199,
  },
  {
    id: 6,
    name: "Fig & Walnut Bites",
    image: product6,
    rating: 4.8,
    reviews: 274,
    price: 399,
    originalPrice: 479,
  },
  {
    id: 7,
    name: "Honey Glazed Dates",
    image: product7,
    rating: 4.6,
    reviews: 201,
    price: 319,
  },
  {
    id: 8,
    name: "Assorted Date Hamper",
    image: product8,
    rating: 4.7,
    reviews: 98,
    price: 1299,
    originalPrice: 1599,
  },
];

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < full) {
      stars.push(<span key={i} className="fp-star fp-star--full">&#9733;</span>);
    } else if (i === full && hasHalf) {
      stars.push(<span key={i} className="fp-star fp-star--half">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="fp-star fp-star--empty">&#9733;</span>);
    }
  }

  return <div className="fp-stars">{stars}</div>;
}

function FeaturedProducts() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(i));
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="fp" id="shop">
      <div className="fp-inner">
        <div className="fp-header">
          <h2 className="fp-title">Featured Products</h2>
          <p className="fp-subtitle">Handpicked just for you</p>
        </div>

        <div className="fp-grid">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`fp-card ${visibleCards.has(i) ? "fp-card--visible" : ""}`}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="fp-card-image-wrap">
                <span className="fp-card-badge">New</span>
                <div className="img-frame">
                  <div className="img-1x1">
                    <img src={product.image} alt={product.name} />
                  </div>
                </div>
                <div className="fp-card-overlay">
                  <button className="fp-overlay-btn fp-overlay-btn--cart">
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <button className="fp-overlay-btn fp-overlay-btn--wishlist">
                    <FiHeart />
                  </button>
                </div>
              </div>

              <div className="fp-card-body">
                <h3 className="fp-card-name">{product.name}</h3>

                <div className="fp-card-rating">
                  <StarRating rating={product.rating} />
                  <span className="fp-card-rating-text">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="fp-card-pricing">
                  <span className="fp-card-price">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="fp-card-price-old">₹{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
