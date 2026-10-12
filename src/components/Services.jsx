import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'Desenvolvimento Web', desc: 'Sites institucionais, landing pages e aplicações web rápidas, responsivas e fáceis de manter.' },
  { title: 'Sistemas sob medida', desc: 'Ferramentas internas e plataformas pensadas para o fluxo real do seu negócio.' },
  { title: 'Integração de APIs', desc: 'Conexão entre sistemas, ERPs e serviços externos para eliminar retrabalho.' },
  { title: 'Dados & Performance', desc: 'Otimização de bancos PostgreSQL, consultas e relatórios que respondem rápido.' },
  { title: 'Automação', desc: 'Scripts e rotinas que tiram tarefas repetitivas da mão da sua equipe.' },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services .section-head > *', {
        scrollTrigger: { trigger: '.services .section-head', start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.service-row', {
        scrollTrigger: { trigger: '.services-list', start: 'top 82%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicos" ref={containerRef} className="services container">
      <div className="section-head">
        <span className="eyebrow"><span className="num">03</span> Serviços</span>
        <div>
          <h2>O que eu <em>faço</em></h2>
          <p>Da primeira conversa ao sistema em produção, com atenção a cada detalhe técnico.</p>
        </div>
      </div>

      <div className="services-list" style={{ borderTop: '1px solid var(--border-color)' }}>
        {services.map((service, idx) => (
          <a
            href="#contato"
            key={service.title}
            className="service-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr 1.1fr auto',
              gap: '2rem',
              alignItems: 'baseline',
              padding: '2.25rem 0',
              borderBottom: '1px solid var(--border-color)',
              color: 'inherit',
            }}
          >
            <span className="eyebrow"><span className="num">{String(idx + 1).padStart(2, '0')}</span></span>
            <h3 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '44ch' }}>{service.desc}</p>
            <ArrowUpRight size={20} className="service-arrow" style={{ color: 'var(--text-secondary)' }} />
          </a>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .service-row h3, .service-arrow { transition: color 0.3s ease, transform 0.3s ease; }
        .service-row:hover h3 { color: var(--accent-light); }
        .service-row:hover .service-arrow { color: var(--accent-light) !important; transform: translate(3px, -3px); }
        @media (max-width: 860px) {
          .service-row { grid-template-columns: 1fr auto !important; gap: 0.75rem 1rem !important; }
          .service-row .eyebrow { grid-column: 1 / -1; }
          .service-row p { grid-column: 1 / -1; grid-row: 3; }
          .service-row .service-arrow { grid-column: 2; grid-row: 2; }
        }
      ` }} />
    </section>
  );
};

export default Services;
