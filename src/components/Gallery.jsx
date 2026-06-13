import { useState, useEffect, useRef } from "react";
import product1 from "../assets/images/product1.webp";
import product2 from "../assets/images/product2.webp";
import product3 from "../assets/images/product3.webp";
import product4 from "../assets/images/product4.webp";
import product5 from "../assets/images/product5.jpg";
import product6 from "../assets/images/product6.webp";
import product7 from "../assets/images/product7.webp";
import product8 from "../assets/images/product8.webp";
import "../css/Gallery.css";
import "../css/images.css";

const images = [
  { src: product1, name: "Classic Date Bites" },
  { src: product2, name: "Almond Date Delight" },
  { src: product3, name: "Coconut Date Rolls" },
  { src: product4, name: "Premium Gift Pack" },
  { src: product5, name: "Date & Nut Mix" },
  { src: product6, name: "Fig & Walnut Bites" },
  { src: product7, name: "Honey Glazed Dates" },
  { src: product8, name: "Assorted Date Hamper" },
];

function Gallery() {
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
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-header">
          <h2 className="gallery-title">Our Collection</h2>
          <p className="gallery-subtitle">Explore our range of handcrafted treats</p>
        </div>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item ${visibleCards.has(i) ? "gallery-item--visible" : ""}`}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="gallery-item-image-wrap">
                <div className="img-frame">
                  <div className="img-1x1">
                    <img src={img.src} alt={img.name} />
                  </div>
                </div>
                <div className="gallery-item-overlay">
                  <span className="gallery-item-name">{img.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
