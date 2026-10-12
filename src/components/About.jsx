import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import profileImg from '../images/profile.jpg';

gsap.registerPlugin(ScrollTrigger);

const education = [
  { course: 'Pós-Graduação em Desenvolvimento Full Stack', school: 'Anhanguera', year: '2025', href: '/certificados/Certificado-Pos-Graduacao.pdf' },
  { course: 'Análise e Desenvolvimento de Sistemas', school: 'UNIPAR', year: '2024', href: '/certificados/Certificado-Tecnologo.pdf' },
];

const experience = [
  { role: 'Professor Universitário', company: 'UNIPAR', period: '2026 — atual', desc: 'Desenvolvimento Web moderno e princípios de DevOps.' },
  { role: 'Analista de Desenvolvimento', company: 'Grupo Ítalo', period: '2025 — atual', desc: 'Performance, PostgreSQL e arquitetura de APIs em produção.' },
  { role: 'Desenvolvedor Full-Stack', company: 'Grifo Sistemas', period: '2024 — 2025', desc: 'ERP com Ruby on Rails, React e GraphQL.' },
];

const Row = ({ left, title, sub, desc, link }) => (
  <div className="cv-row" style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1.5rem', padding: '1.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontVariantNumeric: 'tabular-nums' }}>{left}</span>
    <div>
      <p style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{sub}</p>
      {desc && <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{desc}</p>}
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="text-link" style={{ fontSize: '0.82rem', marginTop: '0.75rem' }}>
          Ver certificado <ArrowUpRight size={13} />
        </a>
      )}
    </div>
  </div>
);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about .section-head > *', {
        scrollTrigger: { trigger: '.about .section-head', start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.about-figure', {
        scrollTrigger: { trigger: '.about-figure', start: 'top 85%', once: true },
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.3,
        ease: 'power3.inOut',
      });

      gsap.from('.about-text > *', {
        scrollTrigger: { trigger: '.about-text', start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.cv-row', {
        scrollTrigger: { trigger: '.about-cv', start: 'top 85%', once: true },
        y: 16,
        opacity: 0,
        stagger: 0.06,
        duration: 0.7,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" ref={containerRef} className="about container">
      <div className="section-head">
        <span className="eyebrow"><span className="num">01</span> Sobre</span>
        <div>
          <h2>Engenharia de <em>soluções</em> digitais.</h2>
        </div>
      </div>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr 1.2fr', gap: '2rem', alignItems: 'start', marginBottom: '7rem' }}>
        <div />

        <figure style={{ margin: 0 }}>
          <div className="about-figure" style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'var(--surface)' }}>
            <img
              src={profileImg}
              alt="Patrick Gattini"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block', filter: 'grayscale(0.35) contrast(1.05)' }}
            />
          </div>
          <figcaption style={{ marginTop: '0.9rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Patrick Gattini — Francisco Beltrão, PR
          </figcaption>
        </figure>

        <div className="about-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: 'clamp(0rem, 3vw, 2.5rem)' }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', lineHeight: 1.25 }}>
            Sou desenvolvedor full-stack e professor universitário. Transformo desafios de negócio em software <em style={{ color: 'var(--accent-light)' }}>claro e duradouro</em>.
          </p>
          <p className="lead">
            Hoje lidero iniciativas de desenvolvimento no <span style={{ color: 'var(--text-primary)' }}>Grupo Ítalo</span> e ensino a próxima geração de desenvolvedores na <span style={{ color: 'var(--text-primary)' }}>UNIPAR</span>.
          </p>
          <blockquote style={{ borderLeft: '1px solid var(--accent-color)', paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            “Engenharia de software não é só escrever código — é construir sistemas que perdurem e gerem valor real.”
          </blockquote>
        </div>
      </div>

      <div className="about-cv" style={{ display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: '2rem' }}>
        <div />
        <div>
          <span className="eyebrow" style={{ marginBottom: '1rem' }}>Formação</span>
          <div style={{ borderTop: '1px solid var(--border-strong)' }}>
            {education.map(({ course, school, year, href }) => (
              <Row key={course} left={year} title={course} sub={school} link={href} />
            ))}
          </div>
        </div>
        <div>
          <span className="eyebrow" style={{ marginBottom: '1rem' }}>Experiência</span>
          <div style={{ borderTop: '1px solid var(--border-strong)' }}>
            {experience.map(({ role, company, period, desc }) => (
              <Row key={role} left={period} title={role} sub={company} desc={desc} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .about-grid, .about-cv { grid-template-columns: 1fr 1fr !important; }
          .about-grid > div:first-child, .about-cv > div:first-child { display: none; }
        }
        @media (max-width: 760px) {
          .about-grid, .about-cv { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-text { padding-left: 0 !important; }
          .cv-row { grid-template-columns: 1fr !important; gap: 0.25rem !important; }
        }
      ` }} />
    </section>
  );
};

export default About;
