import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

import imgTeppa from '../images/proj_teppa.jpg';
import imgPortabelly from '../images/proj_portabelly.jpg';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'Jeferson Teppa',
    category: 'Arquitetura & Interiores',
    description: 'Site institucional para o escritório do arquiteto Jeferson Teppa — “Arquitetura com propósito”. Portfólio de projetos, clientes, serviços e contato direto.',
    image: imgTeppa,
    link: 'https://jeferson-teppa.vercel.app/',
    domain: 'jeferson-teppa.vercel.app',
  },
  {
    title: 'Portábelly',
    category: 'Indústria & Fábrica',
    description: 'Site da Portábelly (antiga Portas Alvorada), fábrica de portas de alto padrão em Renascença - PR. Catálogo de produtos, história da marca e pedidos de orçamento.',
    image: imgPortabelly,
    link: 'https://www.portabelly.com.br/',
    domain: 'portabelly.com.br',
  },
];

const Portfolio = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio .section-head > *', {
        scrollTrigger: { trigger: '.portfolio .section-head', start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
      });

      containerRef.current.querySelectorAll('.project-item').forEach((item) => {
        gsap.from(item.querySelector('.project-image-wrapper'), {
          scrollTrigger: { trigger: item, start: 'top 85%', once: true },
          clipPath: 'inset(8% 8% 8% 8%)',
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
        });
        gsap.from(item.querySelectorAll('.project-meta > *'), {
          scrollTrigger: { trigger: item, start: 'top 75%', once: true },
          y: 16,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={containerRef} className="portfolio container">
      <div className="section-head">
        <span className="eyebrow"><span className="num">04</span> Trabalhos</span>
        <div>
          <h2>Trabalhos <em>selecionados</em></h2>
          <p>Sites reais, no ar, desenvolvidos para clientes que precisavam de uma presença digital à altura do seu negócio.</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5rem, 10vw, 9rem)' }}>
        {projectsData.map((project, idx) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-item"
            style={{ display: 'block', color: 'inherit' }}
          >
            <div className="project-image-wrapper" style={{
              aspectRatio: '16/9',
              overflow: 'hidden',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border-color)',
              marginBottom: '2rem',
            }}>
              <img
                src={project.image}
                alt={`Página inicial do site ${project.title}`}
                className="project-img"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            </div>

            <div className="project-meta" style={{ display: 'grid', gridTemplateColumns: '220px 1fr auto', gap: '2rem', alignItems: 'baseline' }}>
              <span className="eyebrow">
                <span className="num">{String(idx + 1).padStart(2, '0')}</span> {project.category}
              </span>
              <div>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.75rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '58ch' }}>{project.description}</p>
              </div>
              <span className="project-link text-link" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                {project.domain} <ArrowUpRight size={15} />
              </span>
            </div>
          </a>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .project-img { transition: transform 1.2s cubic-bezier(0.16,1,0.3,1); }
        .project-item:hover .project-img { transform: scale(1.03); }
        .project-item:hover .project-link { color: var(--accent-light); border-color: var(--accent-light); }
        .project-meta h3 { transition: color 0.3s ease; }
        .project-item:hover h3 { color: var(--accent-light); }

        @media (max-width: 860px) {
          .project-meta { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      ` }} />
    </section>
  );
};

export default Portfolio;
