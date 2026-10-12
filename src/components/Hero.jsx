import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const facts = [
  { label: 'Baseado em', value: 'Francisco Beltrão, PR' },
  { label: 'Atuação', value: 'Desenvolvimento Full-Stack' },
  { label: 'Também', value: 'Professor de ADS — UNIPAR' },
];

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-eyebrow', { y: 12, opacity: 0, duration: 0.8, delay: 0.2 })
        .from('.hero-title-line', { y: '100%', opacity: 0, stagger: 0.1, duration: 1.1 }, '-=0.5')
        .from('.hero-rule', { scaleX: 0, transformOrigin: 'left center', duration: 1, ease: 'power2.inOut' }, '-=0.7')
        .from('.hero-fade', { y: 14, opacity: 0, stagger: 0.08, duration: 0.8 }, '-=0.6');
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
        justifyContent: 'flex-end',
        paddingTop: '160px',
        paddingBottom: '64px',
      }}
    >
      <div className="container">
        <span className="eyebrow hero-eyebrow" style={{ marginBottom: '2.5rem' }}>
          <span className="num">—</span> Patrick Gattini, desenvolvedor web
        </span>

        <h1 style={{ fontSize: 'clamp(3rem, 9vw, 8.25rem)', lineHeight: 0.98, letterSpacing: '-0.02em', maxWidth: '14ch' }}>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="hero-title-line" style={{ display: 'block' }}>Sites e sistemas</span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="hero-title-line" style={{ display: 'block' }}>feitos com <em>precisão</em></span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="hero-title-line" style={{ display: 'block' }}>&amp; cuidado.</span>
          </span>
        </h1>

        <div className="hero-rule" style={{ height: '1px', backgroundColor: 'var(--border-strong)', margin: 'clamp(3rem, 6vw, 5rem) 0 2.5rem' }} />

        <div className="hero-bottom" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'end' }}>
          <div>
            <p className="lead hero-fade" style={{ maxWidth: '46ch', marginBottom: '2rem' }}>
              Transformo ideias em produtos digitais claros, rápidos e bem construídos — do site institucional ao sistema sob medida.
            </p>
            <div className="hero-fade hero-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#portfolio" className="btn-primary">
                Ver trabalhos <ArrowRight size={16} />
              </a>
              <a href="#contato" className="btn-outline">
                Vamos conversar
              </a>
            </div>
          </div>

          <dl className="hero-facts" style={{ display: 'grid', gap: '1rem' }}>
            {facts.map(({ label, value }) => (
              <div
                key={label}
                className="hero-fade"
                style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)', fontSize: '0.9rem' }}
              >
                <dt style={{ color: 'var(--text-secondary)' }}>{label}</dt>
                <dd style={{ textAlign: 'right' }}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 860px) {
          #inicio .hero-bottom { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </section>
  );
};

export default Hero;
