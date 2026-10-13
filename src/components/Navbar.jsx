import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projetos', href: '/projetos' },
  { name: 'Autorais', href: '/autorais' },
  { name: 'Clientes', href: '/clientes' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Contato', href: '/contato' },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  // Every page opens with a dark blue banner, so the header starts transparent over it.
  const transparent = !scrolled && !open;

  return (
    <header className={`site-header ${transparent ? 'is-transparent' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" aria-label="Patrick Gattini — início">
          <Logo />
        </Link>

        <nav className="site-nav" aria-label="Principal">
          {navLinks.map((l) => (
            <NavLink key={l.href} to={l.href} end={l.href === '/'} className="site-nav__link">
              {l.name}
            </NavLink>
          ))}
        </nav>

        <button className="site-header__toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Abrir menu">
          <span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        {navLinks.map((l) => (
          <NavLink key={l.href} to={l.href} end={l.href === '/'} className="mobile-menu__link">
            {l.name}
          </NavLink>
        ))}
      </div>

      <style>{`
        .site-header {
          position: fixed;
          inset: 0 0 auto 0;
          height: var(--header-h);
          z-index: 100;
          background: rgba(7, 14, 32, 0.94);
          backdrop-filter: blur(10px);
          color: #fff;
          box-shadow: 0 4px 24px rgba(5, 8, 15, 0.35);
          border-bottom: 1px solid rgba(122, 166, 255, 0.15);
          transition: background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease;
        }
        .site-header.is-transparent {
          background: transparent;
          backdrop-filter: none;
          box-shadow: none;
          border-color: transparent;
        }
        .site-header__inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .site-nav { display: flex; gap: 3rem; }
        .site-nav__link {
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 0;
          border-bottom: 1px solid transparent;
        }
        .site-nav__link:hover { color: var(--blue-light); }
        .site-nav__link.active { border-color: var(--blue-light); }
        .site-header__toggle { display: none; width: 32px; height: 32px; flex-direction: column; justify-content: center; gap: 7px; }
        .site-header__toggle span { display: block; height: 1px; background: currentColor; transition: transform 0.3s ease; }
        .site-header__toggle[aria-expanded='true'] span:first-child { transform: translateY(4px) rotate(45deg); }
        .site-header__toggle[aria-expanded='true'] span:last-child { transform: translateY(-4px) rotate(-45deg); }
        .mobile-menu {
          position: fixed;
          top: var(--header-h);
          left: 0; right: 0; bottom: 0;
          background: var(--night);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s;
        }
        .mobile-menu.is-open { opacity: 1; visibility: visible; }
        .mobile-menu__link { font-size: 1.1rem; font-weight: 300; letter-spacing: 0.35em; text-transform: uppercase; padding-left: 0.35em; }
        .mobile-menu__link.active { color: var(--blue-light); }
        @media (max-width: 1100px) { .site-nav { gap: 1.75rem; } }
        @media (max-width: 960px) {
          .site-nav { display: none; }
          .site-header__toggle { display: flex; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
