import { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import "../css/Navbar.css";

const navLinks = ["Home", "Shop", "About", "Contact"];

const mobileLinks = [
  "Home", "Shop", "Categories", "Offers",
  "Best Sellers", "About Us", "Contact Us",
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={logo} alt="Date Bites" className="navbar-logo-img" />
        </div>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="navbar-link">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="navbar-icon-btn" aria-label="Search">
            <FiSearch />
          </button>
          <button className="navbar-icon-btn navbar-icon-btn--heart" aria-label="Wishlist">
            <FiHeart />
          </button>
          <button className="navbar-icon-btn navbar-icon-btn--cart" aria-label="Cart">
            <FiShoppingCart />
            <span className="navbar-cart-badge">3</span>
          </button>
          <button className="navbar-icon-btn navbar-icon-btn--user" aria-label="Account">
            <FiUser />
          </button>
          <button
            className="navbar-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="navbar-mobile-overlay" onClick={closeMenu} />}

      <div className={`navbar-mobile-menu ${menuOpen ? "navbar-mobile-menu--open" : ""}`}>
        {mobileLinks.map((item) => {
          const href = "#" + item.toLowerCase().replace(/\s+/g, "");
          return (
            <a key={item} href={href} className="navbar-mobile-link" onClick={closeMenu}>
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
