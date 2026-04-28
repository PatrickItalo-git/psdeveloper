import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

import imgOdonto from '../images/proj_odonto.png';
import imgPersonal from '../images/proj_personal.png';
import imgMarketing from '../images/proj_marketing.png';
import imgSaas from '../images/proj_saas.png';
import imgSpace from '../images/proj_space.png';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  { title: 'Clínica SmileBright', category: 'Saúde & Bem-estar', description: 'Experiência digital premium para cuidados odontológicos de elite.', image: imgOdonto, link: '#' },
  { title: 'Apex Personal', category: 'Fitness & Performance', description: 'Plataforma de alta performance para atletas e treinamento personalizado.', image: imgPersonal, link: '#' },
  { title: 'Lumina Media', category: 'Marketing & Estratégia', description: 'Estratégia digital moderna para marcas globais com foco em conversão.', image: imgMarketing, link: '#' },
  { title: 'SyncTask SaaS', category: 'Produtividade', description: 'Plataforma de gestão de fluxo de trabalho de próxima geração.', image: imgSaas, link: '#' },
  { title: 'Starlink Explorer', category: 'Educação & Ciência', description: 'Interface imersiva para visualização de dados espaciais em tempo real.', image: imgSpace, link: '#' },
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.from('.portfolio-header-line', {
        scrollTrigger: { trigger: headerRef.current, start: 'top 88%', once: true },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.8,
        ease: 'power4.inOut',
      });

      gsap.from('.portfolio-h2-line', {
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true },
        y: '105%',
        stagger: 0.1,
        duration: 1.2,
        ease: 'expo.out',
      });

      gsap.from('.portfolio-subtitle', {
        scrollTrigger: { trigger: headerRef.current, start: 'top 82%', once: true },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Each project item: clip-path image reveal + text fade
      containerRef.current.querySelectorAll('.project-item').forEach((item, i) => {
        const imgWrap = item.querySelector('.project-image-wrapper');
        const meta = item.querySelector('.project-meta');

        gsap.from(imgWrap, {
          scrollTrigger: { trigger: item, start: 'top 82%', once: true },
          clipPath: 'inset(0 100% 0 0)',
          duration: 1.3,
          delay: i % 2 === 0 ? 0 : 0.12,
          ease: 'expo.inOut',
        });

        gsap.from(meta, {
          scrollTrigger: { trigger: item, start: 'top 80%', once: true },
          y: 24,
          opacity: 0,
          duration: 0.9,
          delay: 0.3 + (i % 2 === 0 ? 0 : 0.12),
          ease: 'power3.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={containerRef} className="container" style={{ padding: '140px 0' }}>
      <div ref={headerRef} style={{ marginBottom: '7rem' }}>
        <div className="portfolio-header-line" style={{ width: '40px', height: '2px', backgroundColor: 'var(--text-primary)', marginBottom: '2.5rem' }} />

        <div style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', letterSpacing: '-0.05em', lineHeight: 1 }}>
            <span className="portfolio-h2-line" style={{ display: 'block' }}>TRABALHOS <span className="text-accent">SELECIONADOS</span></span>
          </h2>
        </div>

        <p className="portfolio-subtitle" style={{ color: 'var(--text-secondary)', maxWidth: '560px', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Produtos digitais desenvolvidos com precisão técnica e propósito estratégico para transformar negócios.
        </p>
      </div>

      <div className="portfolio-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'clamp(3rem, 7vw, 6rem)',
      }}>
        {projectsData.map((project, idx) => (
          <div key={idx} className="project-item" style={{ cursor: 'none' }}>
            <div className="project-image-wrapper" style={{
              aspectRatio: '16/10',
              overflow: 'hidden',
              backgroundColor: 'var(--gray-dark)',
              marginBottom: '2rem',
              position: 'relative',
              borderRadius: '2px',
              border: '1px solid var(--border-color)',
              clipPath: 'inset(0 0% 0 0)',
            }}>
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="project-overlay" style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.55)',
                opacity: 0,
                transition: 'opacity 0.5s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div className="project-btn" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--bg-color)',
                  transform: 'translateY(20px) scale(0.85)',
                  transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </div>

            <div className="project-meta">
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '0.6rem', display: 'block' }}>
                {project.category}
              </span>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '440px' }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .project-item:hover .project-img { transform: scale(1.06); }
        .project-item:hover .project-overlay { opacity: 1; }
        .project-item:hover .project-btn { transform: translateY(0) scale(1); }
        .project-img { transition: transform 1.1s cubic-bezier(0.16,1,0.3,1); }

        @media (max-width: 768px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </section>
  );
};

export default Portfolio;
