import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const IconLinkedin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const IconGithub = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-h2-line', {
        scrollTrigger: { trigger: '.footer-headline', start: 'top 88%', once: true },
        y: '105%',
        stagger: 0.12,
        duration: 1.2,
        ease: 'expo.out',
      });

      gsap.from('.footer-sub', {
        scrollTrigger: { trigger: '.footer-headline', start: 'top 82%', once: true },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.footer-contact-item', {
        scrollTrigger: { trigger: '.footer-contact-col', start: 'top 85%', once: true },
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.from('.footer-social-icon', {
        scrollTrigger: { trigger: '.footer-social-col', start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
      });

      gsap.from('.footer-bottom', {
        scrollTrigger: { trigger: '.footer-bottom', start: 'top 95%', once: true },
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contato" ref={footerRef} style={{
      padding: '140px 0 80px',
      backgroundColor: 'var(--bg-color)',
      borderTop: '1px solid var(--border-color)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(2.5rem, 5vw, 5rem)',
          marginBottom: 'clamp(4rem, 8vw, 8rem)',
        }}>
          {/* Headline */}
          <div className="footer-headline">
            <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.05em', lineHeight: 1.05 }}>
                <span className="footer-h2-line" style={{ display: 'block' }}>VAMOS CRIAR</span>
                <span className="footer-h2-line" style={{ display: 'block', color: 'var(--text-secondary)' }}>ALGO EXCEPCIONAL.</span>
              </h2>
            </div>
            <p className="footer-sub" style={{ color: 'var(--text-secondary)', maxWidth: '380px', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Sempre aberto a novos projetos e parcerias estratégicas.
            </p>
          </div>

          {/* Contact */}
          <div className="footer-contact-col">
            <h4 style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.28em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
              Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'E-mail', href: 'mailto:patrick.souza.dev@gmail.com' },
                { label: 'WhatsApp', href: 'https://wa.me/5546999011726' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-contact-item footer-link"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', transition: 'color 0.3s' }}
                >
                  {label} <ArrowUpRight size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="footer-social-col">
            <h4 style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.28em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
              Redes Sociais
            </h4>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {[
                { Icon: IconLinkedin, href: 'https://www.linkedin.com/in/patricksouzadev/', label: 'LinkedIn' },
                { Icon: IconInstagram, href: 'https://www.instagram.com/_patrick.edueu_', label: 'Instagram' },
                { Icon: IconGithub, href: 'https://github.com/PatrickItalo-git', label: 'GitHub' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-icon social-link"
                  title={label}
                  style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '3.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          color: 'var(--gray-medium)',
          fontSize: '0.72rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          <p>© {new Date().getFullYear()} Patrick Gattini. Todos os direitos reservados.</p>
          <p>Desenvolvido com paixão e precisão.</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-link:hover, .social-link:hover { color: var(--text-primary) !important; }
      ` }} />
    </footer>
  );
};

export default Footer;
