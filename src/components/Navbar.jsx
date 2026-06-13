import { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import "../css/Navbar.css";

const navLinks = ["Home", "Shop", "About", "Contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={logo} alt="Date Bites" className="navbar-logo-img" />
          <span className="navbar-logo-text">Date Bites</span>
        </div>

        <ul className={`navbar-links ${menuOpen ? "navbar-links--open" : ""}`}>
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
          <button className="navbar-icon-btn" aria-label="Wishlist">
            <FiHeart />
          </button>
          <button className="navbar-icon-btn navbar-icon-btn--cart" aria-label="Cart">
            <FiShoppingCart />
            <span className="navbar-cart-badge">3</span>
          </button>
          <button className="navbar-icon-btn" aria-label="Account">
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

      {menuOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="navbar-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
