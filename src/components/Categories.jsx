import { useState, useEffect, useRef } from "react";
import product1 from "../assets/images/product1.webp";
import product2 from "../assets/images/product2.webp";
import product3 from "../assets/images/product3.webp";
import product4 from "../assets/images/product4.webp";
import product5 from "../assets/images/product5.jpg";
import "../css/Categories.css";
import "../css/images.css";

const categories = [
  { name: "Date Bites", image: product1 },
  { name: "Premium Dates", image: product2 },
  { name: "Dry Fruits", image: product3 },
  { name: "Gift Boxes", image: product4 },
  { name: "Healthy Snacks", image: product5 },
];

function Categories() {
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
        { threshold: 0.15 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="categories" id="shop">
      <div className="categories-inner">
        <h2 className="categories-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`category-card ${visibleCards.has(i) ? "category-card--visible" : ""}`}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div className="img-frame">
                <div className="img-1x1">
                  <img src={cat.image} alt={cat.name} />
                </div>
              </div>
              <span className="category-card-name">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
