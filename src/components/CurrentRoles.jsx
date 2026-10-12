import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import uniparImg from '../images/image.png';
import italoImg from '../images/image2.png';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    tag: 'Ensino',
    name: 'UNIPAR',
    role: 'Professor de ADS',
    desc: 'Leciono Desenvolvimento Web e DevOps, formando profissionais com as melhores práticas do mercado.',
    image: uniparImg,
  },
  {
    tag: 'Mercado',
    name: 'Grupo Ítalo',
    role: 'Analista de Desenvolvimento',
    desc: 'Ferramentas de performance, otimização PostgreSQL e arquitetura de APIs críticas para o grupo.',
    image: italoImg,
  },
];

const CurrentRoles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.roles .section-head > *', {
        scrollTrigger: { trigger: '.roles .section-head', start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.role-card', {
        scrollTrigger: { trigger: '.roles-grid', start: 'top 85%', once: true },
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="atuacao" ref={containerRef} className="roles container">
      <div className="section-head">
        <span className="eyebrow"><span className="num">02</span> Atuação</span>
        <div>
          <h2>Onde atuo <em>hoje</em></h2>
          <p>Instituições onde aplico e compartilho conhecimento tecnológico diariamente.</p>
        </div>
      </div>

      <div className="roles-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: '2rem' }}>
        <div />
        {roles.map(({ tag, name, role, desc, image }) => (
          <article key={name} className="role-card" style={{ borderTop: '1px solid var(--border-strong)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <span className="eyebrow">{tag}</span>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src={image} alt={'Logo ' + name} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              </div>
            </div>
            <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '0.5rem' }}>{name}</h3>
            <p style={{ color: 'var(--accent-light)', fontSize: '0.95rem', marginBottom: '1rem' }}>{role}</p>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '42ch' }}>{desc}</p>
          </article>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .roles-grid { grid-template-columns: 1fr 1fr !important; }
          .roles-grid > div:first-child { display: none; }
        }
        @media (max-width: 640px) {
          .roles-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      ` }} />
    </section>
  );
};

export default CurrentRoles;
