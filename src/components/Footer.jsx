import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  { label: 'E-mail', value: 'patrick.souza.dev@gmail.com', href: 'mailto:patrick.souza.dev@gmail.com' },
  { label: 'WhatsApp', value: '(46) 99901-1726', href: 'https://wa.me/5546999011726' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/patricksouzadev/' },
  { label: 'Instagram', href: 'https://www.instagram.com/_patrick.edueu_' },
  { label: 'GitHub', href: 'https://github.com/PatrickItalo-git' },
];

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-fade', {
        scrollTrigger: { trigger: footerRef.current, start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contato" ref={footerRef} style={{ padding: '120px 0 48px' }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '220px 1.4fr 1fr 1fr',
          gap: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-strong)',
          marginBottom: 'clamp(5rem, 10vw, 8rem)',
        }}>
          <span className="eyebrow footer-fade"><span className="num">06</span> Contato</span>

          <h2 className="footer-fade" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', maxWidth: '12ch' }}>
            Vamos criar algo <em>excepcional</em>.
          </h2>

          <div className="footer-fade">
            <span className="eyebrow" style={{ marginBottom: '1.25rem' }}>Fale comigo</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contacts.map(({ label, value, href }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="footer-link" style={{ display: 'block' }}>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{label}</span>
                  <span style={{ fontSize: '1rem', wordBreak: 'break-word' }}>{value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-fade">
            <span className="eyebrow" style={{ marginBottom: '1.25rem' }}>Redes</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {socials.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  {label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-wordmark footer-fade" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(3.5rem, 15vw, 13rem)',
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          marginBottom: '2.5rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}>
          Patrick <em style={{ color: 'var(--accent-light)' }}>Gattini</em>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-color)',
          color: 'var(--text-secondary)',
          fontSize: '0.82rem',
        }}>
          <p>© {new Date().getFullYear()} Patrick Gattini. Todos os direitos reservados.</p>
          <p>Francisco Beltrão, PR — Brasil</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-link:hover, .footer-link:hover span { color: var(--accent-light) !important; }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; row-gap: 3rem !important; }
          .footer-grid > .eyebrow { grid-column: 1 / -1; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </footer>
  );
};

export default Footer;
