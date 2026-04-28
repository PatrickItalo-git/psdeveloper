import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = ['Alta Performance', 'Arquitetura Escalável', 'Design Premium'];

const CallToAction = () => {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background line expand
      gsap.from('.cta-border-line', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1,
        ease: 'power4.inOut',
      });

      // Heading lines reveal
      gsap.from('.cta-heading-line', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true },
        y: '105%',
        stagger: 0.12,
        duration: 1.2,
        ease: 'expo.out',
      });

      // Sub paragraph + features
      gsap.from('.cta-sub', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.cta-feature', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 76%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.from(btnRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 74%', once: true },
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Magnetic button
      const btn = btnRef.current;
      if (!btn) return;

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
        gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      style={{ padding: '140px 0', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="container">
        <div style={{
          backgroundColor: 'var(--gray-dark)',
          padding: 'clamp(3rem, 8vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--border-color)',
          borderRadius: '2px',
        }}>
          {/* Top decorative line */}
          <div className="cta-border-line" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: 'var(--text-primary)',
            opacity: 0.12,
          }} />

          <div style={{ overflow: 'hidden', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.05em' }}>
              <span className="cta-heading-line" style={{ display: 'block' }}>PRONTO PARA ESCALAR</span>
              <span className="cta-heading-line" style={{ display: 'block', color: 'var(--text-secondary)' }}>SUA PRESENÇA DIGITAL?</span>
            </h2>
          </div>

          <p className="cta-sub" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '640px', margin: '0 auto 3.5rem', lineHeight: 1.7 }}>
            Vamos construir uma solução que combine excelência técnica com os objetivos estratégicos do seu negócio.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '4.5rem' }}>
            {features.map(f => (
              <div key={f} className="cta-feature" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--text-primary)', display: 'inline-block', flexShrink: 0 }} />
                {f}
              </div>
            ))}
          </div>

          <a
            ref={btnRef}
            href="https://wa.me/5546999011726"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: '1.4rem 4rem', fontSize: '0.9rem', display: 'inline-flex' }}
          >
            Iniciar Projeto <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
