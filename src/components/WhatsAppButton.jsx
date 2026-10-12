import { IconWhatsapp } from './Icons.jsx';
import { whatsappLink } from '../data/site.js';

const WhatsAppButton = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar no WhatsApp"
    className="wa-float"
  >
    <IconWhatsapp />
    <style>{`
      .wa-float {
        position: fixed;
        right: 30px;
        bottom: 30px;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: #fff;
        color: var(--night);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 28px rgba(11, 18, 32, 0.22);
        z-index: 90;
        transition: transform 0.3s ease, color 0.3s ease;
      }
      .wa-float:hover { transform: translateY(-3px); color: var(--blue); }
      @media (max-width: 600px) { .wa-float { right: 18px; bottom: 18px; width: 52px; height: 52px; } }
    `}</style>
  </a>
);

export default WhatsAppButton;
