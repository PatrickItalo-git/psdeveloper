import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-fade', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="container">
      <div style={{ borderTop: '1px solid var(--border-strong)', paddingTop: 'clamp(4rem, 8vw, 7rem)', textAlign: 'center' }}>
        <span className="eyebrow cta-fade" style={{ marginBottom: '2rem' }}>Próximo passo</span>
        <h2 className="cta-fade" style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)', maxWidth: '16ch', margin: '0 auto 2rem' }}>
          Vamos construir algo <em>que dure</em>?
        </h2>
        <p className="lead cta-fade" style={{ maxWidth: '50ch', margin: '0 auto 3rem' }}>
          Conte sobre o seu projeto. Respondo pessoalmente, com uma proposta clara e sem enrolação.
        </p>
        <div className="cta-fade" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/5546999011726" target="_blank" rel="noreferrer" className="btn-primary">
            Iniciar projeto <ArrowRight size={16} />
          </a>
          <a href="mailto:patrick.souza.dev@gmail.com" className="btn-outline">
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
