import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, User, CheckCircle, Mail, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    const scrollUnsubscribe = scrollY.on("change", (latest) => {
      // Throttled scroll check
      if (Math.abs(latest - (isScrolled ? 51 : 0)) > 20) {
        setIsScrolled(latest > 50);
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      scrollUnsubscribe();
    };
  }, [scrollY]);

  const isMobile = windowWidth < 768;

  const navLinks = [
    { name: 'Início', href: '#inicio', icon: Home },
    { name: 'Sobre', href: '#sobre', icon: User },
    { name: 'Entrega', href: '#servicos', icon: CheckCircle },
    { name: 'Contato', href: '#contato', icon: Mail },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: isScrolled ? '10px' : (isMobile ? '10px' : '20px'),
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '0 10px',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        style={{
          background: isScrolled ? 'rgba(10, 10, 15, 0.7)' : 'rgba(15, 15, 25, 0.4)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: isMobile ? '0.5rem 1rem' : '0.6rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '0.5rem' : '2rem',
          boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 15px rgba(124, 58, 237, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.3)',
          maxWidth: '800px',
          width: 'calc(100% - 20px)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated Scanline Effect */}
        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent)',
            zIndex: -1
          }}
        />

        {/* Background Glow Pulse */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
            zIndex: -1
          }}
        />

        <motion.div 
          whileHover={{ scale: 1.05 }}
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: 900, 
            color: '#fff', 
            fontFamily: 'Outfit', 
            display: 'flex', 
            alignItems: 'center',
            letterSpacing: '-1px'
          }}
        >
          <Zap size={20} style={{ color: 'var(--primary-color)', marginRight: '8px' }} />
          <span style={{ position: 'relative' }}>
            P<span style={{ color: 'var(--primary-color)' }}>S</span>
            <motion.div 
              style={{
                position: 'absolute',
                bottom: -2,
                left: 0,
                width: '100%',
                height: '2px',
                background: 'var(--primary-color)',
                borderRadius: '2px'
              }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </span>
        </motion.div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', position: 'relative' }}>
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                color: hoveredLink === link.name ? '#fff' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 0.8rem',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: 1
              }}
            >
              <link.icon size={16} style={{ 
                color: hoveredLink === link.name ? 'var(--primary-color)' : 'inherit',
                transition: 'color 0.3s'
              }} />
              <span className="nav-text">{link.name}</span>
              
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="nav-bg"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    zIndex: -1,
                    border: '1px solid rgba(124, 58, 237, 0.2)'
                  }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
