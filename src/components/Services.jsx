import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, BarChart, Settings, Globe, Database, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'Identidade Visual', desc: 'Criando identidades digitais únicas e memoráveis que se destacam no mercado.', icon: Layout },
  { title: 'Desenvolvimento Web', desc: 'Aplicações web de alta performance e escaláveis com as tecnologias mais modernas.', icon: Globe },
  { title: 'Soluções de Dados', desc: 'Transformando dados complexos em insights claros e acionáveis para o seu negócio.', icon: BarChart },
  { title: 'Automação', desc: 'Otimizando fluxos de trabalho com scripts e ferramentas inteligentes sob medida.', icon: Settings },
  { title: 'Integração de APIs', desc: 'Conectando sistemas de forma transparente para uma experiência unificada.', icon: Database },
];

const Services = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header line expand + text reveal
      gsap.from('.services-header-line', {
        scrollTrigger: { trigger: headerRef.current, start: 'top 88%', once: true },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.8,
        ease: 'power4.inOut',
      });

      gsap.from('.services-h2-line', {
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true },
        y: '105%',
        stagger: 0.1,
        duration: 1.2,
        ease: 'expo.out',
      });

      gsap.from('.services-subtitle', {
        scrollTrigger: { trigger: headerRef.current, start: 'top 82%', once: true },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Cards stagger in
      gsap.from('.service-card', {
        scrollTrigger: { trigger: '.services-grid', start: 'top 80%', once: true },
        y: 80,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: 'expo.out',
      });

      // Card number reveal
      gsap.from('.service-num', {
        scrollTrigger: { trigger: '.services-grid', start: 'top 78%', once: true },
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Magnetic icon on hover
      const cards = containerRef.current.querySelectorAll('.service-card');
      cards.forEach(card => {
        const icon = card.querySelector('.icon-container');
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
          gsap.to(icon, { x, y, duration: 0.4, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(icon, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicos" ref={containerRef} className="container" style={{ borderTop: '1px solid var(--border-color)', width: '100%' }}>
      <div ref={headerRef} style={{ marginBottom: '6rem' }}>
        <div className="services-header-line" style={{ width: '40px', height: '2px', backgroundColor: 'var(--text-primary)', marginBottom: '2.5rem' }} />

        <div style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
            <span className="services-h2-line" style={{ display: 'block' }}>SOLUÇÕES <span className="text-accent">ESPECIALIZADAS</span></span>
            <span className="services-h2-line" style={{ display: 'block', color: 'var(--text-secondary)' }}>PARA NEGÓCIOS MODERNOS</span>
          </h2>
        </div>

        <p className="services-subtitle" style={{ color: 'var(--text-secondary)', maxWidth: '520px', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Excelência através de design estratégico e engenharia de software avançada.
        </p>
      </div>

      <div className="services-grid" style={{
        display: 'grid',
        gap: '1px',
        backgroundColor: 'var(--border-color)',
        border: '1px solid var(--border-color)',
        width: '100%',
      }}>
        {services.map((service, idx) => (
          <div
            key={idx}
            className="service-card"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              backgroundColor: 'var(--bg-color)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '380px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'none',
            }}
          >
            {/* Number */}
            <span className="service-num" style={{
              position: 'absolute',
              top: 'clamp(1.5rem, 3vw, 2.5rem)',
              right: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--gray-medium)',
            }}>
              {String(idx + 1).padStart(2, '0')}
            </span>

            <div className="icon-container" style={{ color: 'var(--text-secondary)', marginBottom: '3rem', width: 'max-content' }}>
              <service.icon size={36} strokeWidth={1.2} />
            </div>

            <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '1.25rem', color: 'var(--text-primary)', fontWeight: 600, letterSpacing: '-0.02em' }}>
              {service.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '3rem' }}>
              {service.desc}
            </p>

            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                Saiba Mais
              </span>
              <ArrowUpRight size={20} className="arrow-icon" style={{ color: 'var(--text-secondary)' }} />
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .services-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
          .service-card { min-height: 280px !important; }
        }

        .service-card { transition: background-color 0.4s ease; }
        .service-card:hover { background-color: var(--gray-light) !important; }
        .service-card:hover .arrow-icon { transform: translate(4px, -4px); color: var(--text-primary) !important; }
        .service-card:hover .service-num { color: var(--text-primary) !important; }
        .arrow-icon { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), color 0.3s; }
        .service-num { transition: color 0.3s; }
      ` }} />
    </section>
  );
};

export default Services;
