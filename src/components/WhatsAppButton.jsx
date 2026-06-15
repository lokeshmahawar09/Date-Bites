import { FaWhatsapp } from "react-icons/fa";
import "../css/WhatsAppButton.css";

function WhatsAppButton({ onOpen }) {
  return (
    <button
      className="wa-btn"
      onClick={onOpen}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="wa-icon" />
    </button>
  );
}

export default WhatsAppButton;
