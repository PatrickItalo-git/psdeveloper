import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase, ArrowUpRight, MapPin } from 'lucide-react';
import profileImg from '../images/image3.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header tag
      gsap.from('.about-tag', {
        scrollTrigger: { trigger: '.about-tag', start: 'top 92%', once: true },
        x: -24,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      // Heading lines
      gsap.from('.about-heading-line', {
        scrollTrigger: { trigger: '.about-heading-wrap', start: 'top 85%', once: true },
        y: '105%',
        stagger: 0.13,
        duration: 1.2,
        ease: 'expo.out',
      });

      // Image clip-path reveal
      gsap.from('.about-img-outer', {
        scrollTrigger: { trigger: '.about-img-outer', start: 'top 82%', once: true },
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.4,
        ease: 'expo.inOut',
      });

      // Subtle parallax on image
      gsap.to('.profile-parallax', {
        scrollTrigger: {
          trigger: '.about-img-outer',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -50,
        ease: 'none',
      });

      // Bio text
      gsap.from('.about-bio > p', {
        scrollTrigger: { trigger: '.about-bio', start: 'top 85%', once: true },
        y: 28,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Quote
      gsap.from('.about-quote', {
        scrollTrigger: { trigger: '.about-quote', start: 'top 88%', once: true },
        x: -18,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Stats row
      gsap.from('.about-stat', {
        scrollTrigger: { trigger: '.about-stats-row', start: 'top 88%', once: true },
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
      });

      // Credentials section header lines
      gsap.from('.cred-heading', {
        scrollTrigger: { trigger: '.credentials-section', start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Timeline items
      gsap.from('.timeline-item', {
        scrollTrigger: { trigger: '.credentials-section', start: 'top 80%', once: true },
        x: -20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre"
      ref={containerRef}
      className="container"
      style={{ borderTop: '1px solid var(--border-color)', paddingBlock: '120px' }}
    >
      {/* ── Section Header ── */}
      <div style={{ marginBottom: '5rem' }}>
        <span className="about-tag" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-secondary)',
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          marginBottom: '2rem',
        }}>
          <MapPin size={11} />
          Francisco Beltrão, PR — Brasil
        </span>

        <div className="about-heading-wrap" style={{ overflow: 'hidden' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 8vw, 6rem)', letterSpacing: '-0.05em', lineHeight: 1 }}>
            <span className="about-heading-line" style={{ display: 'block' }}>ENGENHARIA DE</span>
            <span className="about-heading-line" style={{ display: 'block', color: 'var(--text-secondary)' }}>
              SOLUÇÕES DIGITAIS.
            </span>
          </h2>
        </div>
      </div>

      {/* ── Main Grid: Image | Bio ── */}
      <div className="about-main-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(3rem, 8vw, 8rem)',
        alignItems: 'start',
        marginBottom: '8rem',
      }}>

        {/* Profile image */}
        <div className="about-img-outer" style={{
          overflow: 'hidden',
          aspectRatio: '3/4',
          backgroundColor: 'var(--gray-dark)',
          borderRadius: '2px',
          position: 'relative',
          clipPath: 'inset(0 0% 0 0)',
        }}>
          <img
            src={profileImg}
            alt="Patrick Gattini"
            className="profile-parallax"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: '0',
              left: '0',
              display: 'block',
            }}
          />
        </div>

        {/* Bio column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div className="about-bio" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <p style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)', lineHeight: 1.8, fontWeight: 400 }}>
              Sou Patrick Gattini, Desenvolvedor Full-Stack e Professor Universitário, dedicado a transformar desafios complexos de negócios em soluções digitais elegantes e escaláveis.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
              Atualmente, lidero iniciativas de desenvolvimento no{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Grupo Ítalo</strong>{' '}
              e contribuo para a formação da próxima geração de talentos na{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>UNIPAR</strong>.
            </p>
          </div>

          <blockquote className="about-quote" style={{
            borderLeft: '2px solid var(--border-color)',
            paddingLeft: '1.75rem',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: 1.85,
          }}>
            "A engenharia de software não é apenas sobre escrever código — é sobre construir sistemas que perdurem e gerem valor real."
          </blockquote>

        </div>
      </div>

      {/* ── Credentials: Education + Experience ── */}
      <div
        className="credentials-section"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 8vw, 8rem)',
          paddingTop: '6rem',
          borderTop: '1px solid var(--border-color)',
        }}
      >
        {/* Education */}
        <div>
          <div className="cred-heading" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '3.5rem' }}>
            <GraduationCap size={20} strokeWidth={1.5} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
            <h4 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Formação Acadêmica
            </h4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {[
              { course: 'Pós-Graduação em Dev Full Stack', school: 'Anhanguera', year: '2025' },
              { course: 'Análise e Desenv. de Sistemas', school: 'UNIPAR', year: '2024' },
            ].map(({ course, school, year }) => (
              <div
                key={course}
                className="timeline-item"
                style={{ paddingLeft: '1.75rem', borderLeft: '1px solid var(--border-color)' }}
              >
                <p style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{course}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {school} — {year}
                </p>
                <a
                  href="#"
                  style={{ fontSize: '0.7rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Ver certificado <ArrowUpRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="cred-heading" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '3.5rem' }}>
            <Briefcase size={20} strokeWidth={1.5} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
            <h4 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Experiência Profissional
            </h4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {[
              {
                role: 'Professor Universitário',
                company: 'UNIPAR',
                period: '2026 · Presente',
                desc: 'Desenvolvimento Web moderno e princípios de DevOps para a próxima geração.',
              },
              {
                role: 'Analista de Desenvolvimento',
                company: 'Grupo Ítalo',
                period: '2025 · Presente',
                desc: 'Otimização de performance e arquitetura de APIs robustas em produção.',
              },
              {
                role: 'Desenvolvedor Full-Stack',
                company: 'Grifo Sistemas',
                period: '2024 · 2025',
                desc: 'ERP com Ruby on Rails, React e GraphQL.',
              },
            ].map(({ role, company, period, desc }) => (
              <div
                key={role}
                className="timeline-item"
                style={{ paddingLeft: '1.75rem', borderLeft: '1px solid var(--border-color)' }}
              >
                <p style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{role}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {company} — {period}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 860px) {
          .about-main-grid, .credentials-section {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .about-img-outer {
            aspect-ratio: 1 !important;
            max-height: 400px;
            width: 100%;
          }
          .about-bio {
            text-align: center;
          }
          .about-quote {
            text-align: center;
            border-left: none;
            border-top: 1px solid var(--border-color);
            padding: 1.5rem 0 0;
          }
          .about-stats-row {
            justify-content: center;
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .about-main-grid { gap: 2.5rem !important; }
          .timeline-item { padding-left: 1.25rem !important; }
          .about-tag { font-size: 0.6rem; letter-spacing: 0.2em; }
        }

      ` }} />
    </section>
  );
};

export default About;
