import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img1 from "../assets/images/product1.webp";
import img2 from "../assets/images/product2.webp";
import img3 from "../assets/images/product3.webp";
import img4 from "../assets/images/product4.webp";
import img5 from "../assets/images/product5.jpg";
import img6 from "../assets/images/product6.webp";
import img7 from "../assets/images/product7.webp";
import img8 from "../assets/images/product8.webp";
import "../css/ProductSlider.css";
import "../css/images.css";

const products = [
  { id: 1, src: img1, name: "Classic Date Bites" },
  { id: 2, src: img2, name: "Almond Date Delight" },
  { id: 3, src: img3, name: "Cocoa Date Truffles" },
  { id: 4, src: img4, name: "Coconut Date Rolls" },
  { id: 5, src: img5, name: "Sesame Date Bites" },
  { id: 6, src: img6, name: "Walnut Date Treats" },
  { id: 7, src: img7, name: "Cashew Date Crunch" },
  { id: 8, src: img8, name: "Premium Date Mix" },
];

function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState(null);

  const prev = () => {
    setAnimDir("prev");
    setTimeout(() => {
      setCurrent((p) => (p === 0 ? products.length - 1 : p - 1));
      setAnimDir(null);
    }, 200);
  };

  const next = () => {
    setAnimDir("next");
    setTimeout(() => {
      setCurrent((p) => (p === products.length - 1 ? 0 : p + 1));
      setAnimDir(null);
    }, 200);
  };

  return (
    <section className="pslider" id="products">
      <div className="pslider-bg-glow pslider-bg-glow--1" />
      <div className="pslider-bg-glow pslider-bg-glow--2" />

      <div className="pslider-inner">
        <h2 className="pslider-title">
          Explore <span className="pslider-title-accent">Our Products</span>
        </h2>
        <p className="pslider-subtitle">Handcrafted Date Bites — discover your favourite</p>

        <div className="pslider-frame">
          <button className="pslider-btn pslider-btn--left" onClick={prev} aria-label="Previous product">
            <FiChevronLeft />
          </button>

          <div className="pslider-stage">
            <div className="pslider-count">
              <span className="pslider-count-current">0{current + 1}</span>
              <span className="pslider-count-sep">/</span>
              <span className="pslider-count-total">0{products.length}</span>
            </div>

            <div className={`pslider-image-wrap ${animDir === "prev" ? "pslider-image-wrap--out-prev" : ""} ${animDir === "next" ? "pslider-image-wrap--out-next" : ""}`}>
              <div className="img-frame img-w-480">
                <div className="img-1x1">
                  <img src={products[current].src} alt={products[current].name} />
                </div>
              </div>
            </div>

            <p className="pslider-name">{products[current].name}</p>
          </div>

          <button className="pslider-btn pslider-btn--right" onClick={next} aria-label="Next product">
            <FiChevronRight />
          </button>
        </div>

        <div className="pslider-dots">
          {products.map((_, i) => (
            <button
              key={i}
              className={`pslider-dot ${i === current ? "pslider-dot--active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to product ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSlider;
