import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Typewriter = ({ phrases }) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (displayText.length === currentPhrase.length) {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return (
    <span style={{ position: 'relative' }}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ marginLeft: '2px', display: 'inline-block', width: '2px', background: 'var(--primary-color)' }}
      >
        &nbsp;
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(useTransform(mouseX, [0, window.innerWidth], [-20, 20]), springConfig);
  const dy = useSpring(useTransform(mouseY, [0, window.innerHeight], [-20, 20]), springConfig);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="inicio"
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        paddingTop: '100px',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic Nebula Glows */}
      <motion.div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
        top: '10%',
        left: '20%',
        zIndex: -1,
        filter: 'blur(80px)',
        x: dx,
        y: dy
      }}></motion.div>

      <motion.div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 7, 100, 0.2) 0%, transparent 70%)',
        bottom: '10%',
        right: '15%',
        zIndex: -1,
        filter: 'blur(100px)',
        x: useTransform(dx, (v) => -v),
        y: useTransform(dy, (v) => -v)
      }}></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(124, 58, 237, 0.1)',
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            color: 'var(--accent-color)',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1.5rem'
          }}
        >
          <Sparkles size={14} /> sistemas feitos pra você
        </motion.div>

        <h1 className="hero-title" style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          lineHeight: 0.9,
          marginBottom: '1rem',
          color: '#fff',
          fontWeight: 900,
          perspective: '1000px'
        }}>
          Patrick <span className="text-gradient" style={{ display: 'block' }}>Souza</span>
        </h1>

        <span style={{
          color: 'var(--primary-color)',
          fontWeight: 600,
          letterSpacing: '3px',
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
          display: 'block',
          minHeight: '2.5rem',
          textShadow: '0 0 20px rgba(124, 58, 237, 0.3)'
        }}>
          <Typewriter phrases={['Desenvolvedor Web', 'Professor Universitário', 'Arquiteto de Soluções']} />
        </span>

        <p style={{
          maxWidth: '650px',
          color: 'var(--text-secondary)',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          marginBottom: '3rem',
          lineHeight: 1.6,
          margin: '0 auto 3rem'
        }}>
          Desenvolvedor de Software focado em construir soluções robustas e experiências digitais imersivas para o próximo nível.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a
            href="#servicos"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--primary-glow)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
              color: '#fff',
              borderRadius: '12px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 30px -10px var(--primary-color)'
            }}
          >
            Explorar Órbita <ArrowRight size={20} />
          </motion.a>

          <motion.a
            href="#contato"
            whileHover={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.3)' }}
            style={{
              padding: '1rem 2.5rem',
              background: 'rgba(15, 15, 20, 0.5)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              borderRadius: '12px',
              fontWeight: 700,
              backdropFilter: 'blur(10px)'
            }}
          >
            Frequência de Contato
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '40px',
          color: 'var(--primary-color)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.6
        }}
      >
        <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>Descida Interna</span>
        <ChevronDown size={24} />
      </motion.div>

      {/* Subtle Spatial Accents */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '4px',
          height: '4px',
          background: '#fff',
          borderRadius: '50%',
          boxShadow: '0 0 10px #fff'
        }}
      />
    </section>
  );
};

export default Hero;
