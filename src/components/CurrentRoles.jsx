import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import uniparImg from '../images/image.png';
import italoImg from '../images/image2.png';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    tag: 'Instituição de Ensino',
    name: 'UNIPAR',
    role: 'Professor de ADS',
    desc: 'Leciono Desenvolvimento Web e DevOps, formando profissionais com as melhores práticas do mercado global.',
    image: uniparImg,
  },
  {
    tag: 'Atuação no Mercado',
    name: 'Grupo Ítalo',
    role: 'Analista de Desenvolvimento',
    desc: 'Desenvolvimento de ferramentas de performance, otimização PostgreSQL e arquitetura de APIs críticas para o grupo.',
    image: italoImg,
  },
];

const CurrentRoles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      gsap.from('.roles-h2-line', {
        scrollTrigger: { trigger: '.roles-header', start: 'top 88%', once: true },
        y: '105%',
        stagger: 0.1,
        duration: 1.1,
        ease: 'expo.out',
      });

      gsap.from('.roles-sub', {
        scrollTrigger: { trigger: '.roles-header', start: 'top 82%', once: true },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Cards: image clip-path + content fade
      containerRef.current.querySelectorAll('.role-card').forEach((card, i) => {
        const imgWrap = card.querySelector('.role-img-wrap');
        const content = card.querySelector('.role-content');

        gsap.from(imgWrap, {
          scrollTrigger: { trigger: card, start: 'top 82%', once: true },
          clipPath: 'inset(0 0 100% 0)',
          duration: 1.2,
          delay: i * 0.15,
          ease: 'expo.inOut',
        });

        gsap.from(content.children, {
          scrollTrigger: { trigger: card, start: 'top 78%', once: true },
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.3 + i * 0.15,
          ease: 'power3.out',
        });

        // Image zoom on hover
        const img = imgWrap.querySelector('img');
        card.addEventListener('mouseenter', () => gsap.to(img, { scale: 1.06, duration: 0.7, ease: 'power2.out' }));
        card.addEventListener('mouseleave', () => gsap.to(img, { scale: 1, duration: 0.7, ease: 'power2.out' }));
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="atuacao" className="container" ref={containerRef} style={{ padding: '120px 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="roles-header" style={{ textAlign: 'left', marginBottom: '5rem' }}>
        <div style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
            <span className="roles-h2-line" style={{ display: 'block' }}>
              ATUAÇÃO <span className="text-accent">ATUAL</span>
            </span>
          </h2>
        </div>
        <p className="roles-sub" style={{ color: 'var(--text-secondary)', maxWidth: '560px', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Instituições onde aplico e compartilho conhecimento tecnológico diariamente.
        </p>
      </div>

      <div className="roles-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'clamp(1.5rem, 5vw, 4rem)',
      }}>
        {roles.map(({ tag, name, role, desc, image }) => (
          <div
            key={name}
            className="role-card glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              padding: '2.5rem',
              borderRadius: '2px',
              cursor: 'none',
            }}
          >
            <div className="role-img-wrap" style={{ overflow: 'hidden', height: '280px', borderRadius: '1px', clipPath: 'inset(0 0 0% 0)' }}>
              <img
                src={image}
                alt={name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div className="role-content">
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                {tag}
              </span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--text-primary)', margin: '1rem 0 0.5rem', fontWeight: 700, letterSpacing: '-0.03em' }}>
                {name}
              </h3>
              <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.875rem', letterSpacing: '0.02em' }}>
                {role}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 640px) {
          .roles-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </section>
  );
};

export default CurrentRoles;
