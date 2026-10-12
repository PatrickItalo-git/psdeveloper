import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo.jsx';
import { IconInstagram, IconLinkedin, IconGithub } from './Icons.jsx';
import { contact, whatsappLink } from '../data/site.js';

const items = [
  { icon: <IconInstagram />, label: contact.instagram.handle, href: contact.instagram.url },
  { icon: <Phone size={18} strokeWidth={1.5} />, label: contact.phoneLabel, href: whatsappLink() },
  { icon: <Mail size={18} strokeWidth={1.5} />, label: contact.email.toUpperCase(), href: `mailto:${contact.email}` },
  { icon: <IconLinkedin />, label: 'LINKEDIN', href: contact.linkedin },
  { icon: <IconGithub />, label: 'GITHUB', href: contact.github },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="container site-footer__grid">
      <div>
        <div className="site-footer__logo">
          <Logo size="lg" />
        </div>
        <p className="site-footer__tagline">Sites e sistemas que comunicam sem precisar de excessos.</p>
      </div>

      <div>
        <h4 className="site-footer__title">Contatos</h4>
        <ul className="site-footer__list">
          {items.map(({ icon, label, href }) => (
            <li key={label}>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {icon}
                <span>{label}</span>
              </a>
            </li>
          ))}
          <li className="site-footer__place">
            <MapPin size={18} strokeWidth={1.5} />
            <span>
              <strong>Base:</strong><br />
              {contact.city}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="site-footer__bottom">
      © {new Date().getFullYear()} Patrick Gattini. Todos os direitos reservados.
    </div>

    <style>{`
      .site-footer { background: #000; color: #fff; padding-top: 80px; }
      .site-footer__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; padding-bottom: 60px; }
      .site-footer__logo { display: inline-block; padding: 0 2.25rem; }
      .site-footer__tagline { margin-top: 2.5rem; max-width: 260px; color: rgba(255,255,255,0.8); font-size: 0.95rem; }
      .site-footer__title { font-size: 0.95rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.75rem; }
      .site-footer__list { list-style: none; display: flex; flex-direction: column; gap: 1.1rem; }
      .site-footer__list a, .site-footer__place { display: flex; align-items: flex-start; gap: 0.9rem; color: rgba(255,255,255,0.7); font-size: 0.95rem; }
      .site-footer__list a:hover { color: var(--blue-light); }
      .site-footer__list svg { flex-shrink: 0; margin-top: 3px; color: #fff; }
      .site-footer__place strong { color: #fff; font-weight: 500; }
      .site-footer__bottom { border-top: 1px solid var(--line-dark); padding: 1.5rem; text-align: center; font-size: 0.85rem; color: rgba(255,255,255,0.4); }
      @media (max-width: 760px) {
        .site-footer__grid { grid-template-columns: 1fr; }
        .site-footer__logo { padding: 0; }
      }
    `}</style>
  </footer>
);

export default Footer;
