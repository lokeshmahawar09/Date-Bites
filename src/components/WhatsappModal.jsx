import { useState } from "react";
import { FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "../css/WhatsappModal.css";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";
const DEFAULT_MSG = "Hello Date Bites Team,%0AI would like to know more about your products.";

function WhatsappModal({ onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submit = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MSG}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="wam-overlay" onClick={onClose}>
      <div className="wam" onClick={(e) => e.stopPropagation()}>
        <button className="wam-close" onClick={onClose} aria-label="Close">
          <FiX />
        </button>

        <div className="wam-body">
          <div className="wam-icon-wrap">
            <FaWhatsapp className="wam-icon" />
          </div>

          <h2 className="wam-heading">
            Chat With Date Bites <span className="wam-heart">❤️</span>
          </h2>

          <p className="wam-desc">
            Enter your details and connect with us on WhatsApp for offers, product information and support.
          </p>

          <div className="wam-field">
            <label className="wam-label">Name</label>
            <input
              type="text"
              className="wam-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="wam-field">
            <label className="wam-label">Phone Number</label>
            <div className="wam-input-group">
              <span className="wam-input-prefix">+91</span>
              <input
                type="tel"
                className="wam-input wam-input--phone"
                placeholder="Enter phone number"
                inputMode="numeric"
                pattern="[0-9]*"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              />
            </div>
          </div>

          <button className="wam-btn" onClick={submit}>
            <FaWhatsapp /> Continue to WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatsappModal;
