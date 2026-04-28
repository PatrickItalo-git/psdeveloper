import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

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
    gsap.fromTo(
      navRef.current,
      { autoAlpha: 0, y: -12 },
      { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    );
    // Keep mobile menu hidden initially
    gsap.set(mobileMenuRef.current, { autoAlpha: 0 });
  }, []);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
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
    gsap.to(mobileMenuRef.current, { autoAlpha: 1, duration: 0.35, ease: 'power3.out' });
    gsap.from('.mobile-nav-link', {
      y: 28,
      opacity: 0,
      stagger: 0.07,
      duration: 0.55,
      delay: 0.08,
      ease: 'expo.out',
    });
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
          padding: isScrolled ? '1rem 0' : '2rem 0',
          transition: 'padding 0.5s cubic-bezier(0.16,1,0.3,1), background-color 0.5s ease, border-bottom 0.5s ease',
          backgroundColor: isScrolled ? 'rgba(8,8,8,0.94)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(24px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.05em', color: 'var(--text-primary)', zIndex: 1002, position: 'relative' }}
          >
            PATRICK<span style={{ color: 'var(--accent-color)' }}>.DEV</span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: '2.5rem' }} className="nav-menu">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: isActive(link.href) ? 'var(--text-primary)' : 'var(--text-secondary)',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
                className="nav-link"
              >
                {link.name}
                {isActive(link.href) && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '3px',
                    height: '3px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-color)',
                    display: 'block',
                  }} />
                )}
              </Link>
            ))}
          </div>

          {/* Right side: WhatsApp (desktop) + Hamburger (mobile) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://wa.me/5546999011726"
              target="_blank"
              rel="noreferrer"
              className="btn-primary nav-whatsapp"
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.72rem' }}
            >
              WhatsApp
            </a>

            <button
              onClick={isMenuOpen ? closeMenu : openMenu}
              className="hamburger-btn"
              aria-label="Menu"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                color: 'var(--text-primary)',
                zIndex: 1002,
                position: 'relative',
              }}
            >
              {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .nav-link:hover { color: var(--text-primary) !important; }
          @media (max-width: 900px) {
            .nav-menu { display: none !important; }
            .nav-whatsapp { display: none !important; }
            .hamburger-btn { display: flex !important; }
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
          padding: '0 2rem',
          visibility: 'hidden',
          opacity: 0,
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={handleLinkClick}
              className="mobile-nav-link"
              style={{
                fontSize: 'clamp(1.8rem, 8vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: isActive(link.href) ? 'var(--accent-color)' : 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.1,

                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '0.75rem',
                paddingTop: i === 0 ? 0 : '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'color 0.2s',
              }}
            >
              {link.name}
              <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, letterSpacing: '0.02em' }}>
                0{i + 1}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile contact */}
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem' }}>
          <a
            href="https://wa.me/5546999011726"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ fontSize: '0.78rem', padding: '0.9rem 2rem' }}
            onClick={handleLinkClick}
          >
            WhatsApp
          </a>
          <a
            href="mailto:patrick.souza.dev@gmail.com"
            className="btn-outline"
            style={{ fontSize: '0.78rem', padding: '0.9rem 2rem' }}
            onClick={handleLinkClick}
          >
            E-mail
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
