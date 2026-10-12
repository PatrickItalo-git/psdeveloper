import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Serviços', href: '/#servicos' },
  { name: 'Trabalhos', href: '/#portfolio' },
  { name: 'Contato', href: '/#contato' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Entry animation on mount
  useEffect(() => {
    gsap.fromTo(navRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8, delay: 0.1, ease: 'power2.out' });
    gsap.set(mobileMenuRef.current, { autoAlpha: 0 });
  }, []);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hash scroll when navigating from another page
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
    gsap.to(mobileMenuRef.current, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' });
    gsap.from('.mobile-nav-link', { y: 16, opacity: 0, stagger: 0.05, duration: 0.5, delay: 0.05, ease: 'power3.out' });
  };

  const closeMenu = () => {
    document.body.style.overflow = '';
    gsap.to(mobileMenuRef.current, {
      autoAlpha: 0,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => setIsMenuOpen(false),
    });
  };

  const handleLinkClick = () => {
    if (isMenuOpen) closeMenu();
  };

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/' && !location.hash;
    if (href.startsWith('/#')) return location.hash === href.substring(1);
    return location.pathname === href;
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1001,
          padding: isScrolled ? '1rem 0' : '1.75rem 0',
          transition: 'padding 0.4s ease, background-color 0.4s ease, border-color 0.4s ease',
          backgroundColor: isScrolled ? 'rgba(5,8,15,0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${isScrolled ? 'var(--border-color)' : 'transparent'}`,
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', lineHeight: 1, color: 'var(--text-primary)', zIndex: 1002, position: 'relative' }}
          >
            Patrick <em style={{ color: 'var(--accent-light)' }}>Gattini</em>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }} className="nav-menu">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="nav-link"
                style={{
                  fontSize: '0.88rem',
                  color: isActive(link.href) ? 'var(--text-primary)' : 'var(--text-secondary)',
                  borderBottom: `1px solid ${isActive(link.href) ? 'var(--accent-light)' : 'transparent'}`,
                  paddingBottom: '2px',
                }}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/5546999011726"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
            >
              Fale comigo
            </a>
          </div>

          <button
            onClick={isMenuOpen ? closeMenu : openMenu}
            className="hamburger-btn"
            aria-label="Menu"
            style={{
              display: 'none',
              fontSize: '0.88rem',
              color: 'var(--text-primary)',
              zIndex: 1002,
              position: 'relative',
              borderBottom: '1px solid var(--border-strong)',
              paddingBottom: '2px',
            }}
          >
            {isMenuOpen ? 'Fechar' : 'Menu'}
          </button>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .nav-link:hover { color: var(--text-primary) !important; }
          @media (max-width: 900px) {
            .nav-menu { display: none !important; }
            .hamburger-btn { display: inline-block !important; }
          }
        ` }} />
      </nav>

      {/* Mobile menu overlay */}
      <div
        ref={mobileMenuRef}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'var(--bg-color)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 1.5rem',
          visibility: 'hidden',
          opacity: 0,
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-color)' }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={handleLinkClick}
              className="mobile-nav-link"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 9vw, 3.2rem)',
                lineHeight: 1.1,
                color: isActive(link.href) ? 'var(--accent-light)' : 'var(--text-primary)',
                borderBottom: '1px solid var(--border-color)',
                padding: '0.9rem 0',
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
              }}
            >
              {link.name}
              <span style={{ fontFamily: 'var(--font-main)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                0{i + 1}
              </span>
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://wa.me/5546999011726" target="_blank" rel="noreferrer" className="btn-primary" onClick={handleLinkClick}>
            WhatsApp
          </a>
          <a href="mailto:patrick.souza.dev@gmail.com" className="btn-outline" onClick={handleLinkClick}>
            E-mail
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
