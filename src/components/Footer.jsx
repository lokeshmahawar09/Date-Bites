import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand Column */}
        <div className="footer-col footer-col--brand">
          <div className="footer-logo">
            <img src={logo} alt="Date Bites" className="footer-logo-img" />
            <span className="footer-logo-text">Date Bites</span>
          </div>
          <p className="footer-brand-text">
            Naturally sweet, deliciously healthy. Crafted with premium dates and
            wholesome ingredients for the perfect guilt-free indulgence.
          </p>
          <div className="footer-social">
            <a href="#!" className="footer-social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#!" className="footer-social-link" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#!" className="footer-social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#!" className="footer-social-link" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#!">About Us</a></li>
            <li><a href="#!">Shop All</a></li>
            <li><a href="#!">Gift Boxes</a></li>
            <li><a href="#!">Blog</a></li>
            <li><a href="#!">Careers</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4 className="footer-col-title">Support</h4>
          <ul className="footer-links">
            <li><a href="#!">FAQ</a></li>
            <li><a href="#!">Shipping & Returns</a></li>
            <li><a href="#!">Track Order</a></li>
            <li><a href="#!">Privacy Policy</a></li>
            <li><a href="#!">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Get in Touch</h4>
          <ul className="footer-contact">
            <li>
              <FiMail className="footer-contact-icon" />
              <span>hello@datebites.com</span>
            </li>
            <li>
              <FiPhone className="footer-contact-icon" />
              <span>+91 1800-123-4567</span>
            </li>
            <li>
              <FiMapPin className="footer-contact-icon" />
              <span>Mumbai, Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Date Bites. All rights reserved. Made with love.</p>
      </div>
    </footer>
  );
}

export default Footer;
