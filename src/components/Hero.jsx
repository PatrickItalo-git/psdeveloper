import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const lineRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([subtitleRef.current, textRef.current, buttonsRef.current, scrollRef.current], { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.9,
        delay: 0.2,
        ease: 'power4.inOut',
      })
      .from('.hero-line .reveal-text', {
        y: '110%',
        stagger: 0.1,
        duration: 1.4,
      }, '-=0.5')
      .to(subtitleRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.9')
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.5')
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.5')
      .to(scrollRef.current, {
        opacity: 0.4,
        duration: 0.5,
      }, '-=0.2');

      // Floating word parallax
      gsap.to('.hero-parallax', {
        y: -18,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: 'sine.inOut',
      });

      // Mouse parallax on "PG"
      const onMouseMove = (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 55;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 55;
        gsap.to('.mouse-parallax', { x: xPos, y: yPos, duration: 1.8, ease: 'power2.out' });
      };
      window.addEventListener('mousemove', onMouseMove);
      return () => window.removeEventListener('mousemove', onMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '1000px' }}>

          <div ref={subtitleRef} style={{
            fontSize: 'clamp(0.65rem, 2vw, 0.72rem)',
            fontWeight: 600,
            letterSpacing: '0.32em',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            textTransform: 'uppercase',
          }}>
            Desenvolvedor Full-Stack &amp; Estrategista Digital
          </div>


          <div ref={lineRef} style={{
            width: '56px',
            height: '2px',
            backgroundColor: 'var(--accent-color)',
            marginBottom: '2.5rem',
          }} />

          <h1 style={{
            fontSize: 'clamp(1.6rem, 10vw, 9.5rem)',
            lineHeight: 1,
            marginBottom: '3rem',
            color: 'var(--text-primary)',
            fontWeight: 700,
            letterSpacing: '-0.06em',
          }}>
            <div className="hero-line" style={{ overflow: 'hidden' }}>
              <span className="reveal-text" style={{ display: 'inline-block' }}>CRIANDO</span>
            </div>
            <div className="hero-line" style={{ overflow: 'hidden' }}>
              <span className="reveal-text hero-parallax" style={{ display: 'inline-block', color: 'var(--gray-medium)' }}>
                EXPERIÊNCIAS
              </span>
            </div>
            <div className="hero-line" style={{ overflow: 'hidden' }}>
              <span className="reveal-text" style={{ display: 'inline-block', color: 'var(--text-secondary)' }}>
                DIGITAIS.
              </span>
            </div>
          </h1>


          <p ref={textRef} style={{
            maxWidth: '520px',
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            marginBottom: '3.5rem',
            lineHeight: 1.75,
            transform: 'translateY(16px)',
          }}>
            Transformando ideias em interfaces impactantes e sistemas robustos. Especialista em construir o futuro da sua presença online.
          </p>

          <div ref={buttonsRef} className="hero-btns" style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            transform: 'translateY(16px)',
          }}>
            <a href="#portfolio" className="btn-primary">
              Ver Projetos <ArrowRight size={16} />
            </a>
            <a href="#contato" className="btn-outline">
              Vamos Conversar
            </a>
          </div>

        </div>
      </div>

      {/* Background PG text */}
      <div className="mouse-parallax" style={{
        position: 'absolute',
        top: '10%',
        right: '0',
        fontSize: 'clamp(8rem, 25vw, 24rem)',
        fontWeight: 900,
        color: 'var(--text-primary)',
        zIndex: -1,
        opacity: 0.025,
        userSelect: 'none',
        pointerEvents: 'none',
        fontFamily: 'var(--font-heading)',
        letterSpacing: '-0.1em',
        lineHeight: 1,
        overflow: 'hidden',
        maxWidth: '100vw',
      }}>
        PG
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} style={{
        position: 'absolute',
        bottom: '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--gray-medium)',
      }}>
        <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.22em' }}>SCROLL</span>
        <ChevronDown size={14} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          #inicio .container > div { text-align: center; margin: 0 auto; }
          #inicio .hero-btns { justify-content: center; flex-direction: column; width: 100%; }
          #inicio .hero-btns a { width: 100%; }
          #inicio .hero-line { text-align: center; }
          #inicio p { margin-left: auto; margin-right: auto; max-width: 100%; }
          #inicio div[ref="lineRef"] { margin: 0 auto 2.5rem !important; }
        }


      ` }} />
    </section>
  );
};

export default Hero;
