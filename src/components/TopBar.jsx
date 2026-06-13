import { useEffect, useState, useRef } from "react";
import { FiTruck, FiPercent, FiHeart } from "react-icons/fi";
import "../css/TopBar.css";

const offers = [
  {
    icon: FiTruck,
    text: "Free shipping on orders above ₹499",
  },
  {
    icon: FiPercent,
    text: "10% off on your first order — Use code FIRST10",
  },
  {
    icon: FiHeart,
    text: "100% Organic & Naturally Sweetened",
  },
];

function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const OfferIcon = offers[currentIndex].icon;

  return (
    <div className="topbar">
      <div className="topbar-content">
        <OfferIcon className="topbar-icon" />
        <span className="topbar-text">{offers[currentIndex].text}</span>
      </div>
      <div className="topbar-pagination">
        {offers.map((_, idx) => (
          <span
            key={idx}
            className={`topbar-dot ${idx === currentIndex ? "topbar-dot--active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TopBar;
