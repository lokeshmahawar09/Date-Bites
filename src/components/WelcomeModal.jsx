import { FiX } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import "../css/WelcomeModal.css";

function WelcomeModal({ onClose, onSubmit }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <FiX />
        </button>

        <div className="modal-body">
          <img src={logo} alt="Date Bites" className="modal-logo" />

          <span className="modal-badge">Welcome to Date Bites</span>

          <h2 className="modal-heading">
            Healthy Snacks Delivered <span className="modal-heading-accent">With Love</span> ❤️
          </h2>

          <p className="modal-desc">
            Enter your phone number and get exciting offers, exclusive discounts and updates on our latest Date Bites products.
          </p>

          <div className="modal-input-group">
            <span className="modal-input-prefix">+91</span>
            <input
              type="tel"
              className="modal-input"
              placeholder="Enter phone number"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>

          <button className="modal-btn btn-shine" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;
