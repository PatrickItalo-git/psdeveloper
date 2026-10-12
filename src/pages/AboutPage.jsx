import { ArrowUpRight } from 'lucide-react';
import profileImg from '../images/profile.jpg';
import { roles, education, experience, stack } from '../data/site.js';
import Waves from '../components/Waves.jsx';

const AboutPage = () => (
  <main>
    <section className="about-hero" style={{ backgroundImage: `url(${profileImg})` }} aria-label="Foto de Patrick Gattini" />

    <section className="section section--dark about-quote-band">
      <Waves />
      <div className="container about-quote reveal">
        <p>
          “A engenharia de software não é apenas sobre escrever código — é sobre construir sistemas que perdurem e gerem valor real.”
        </p>
        <span className="about-quote__rule" />
      </div>
    </section>

    <section className="container about-intro">
      <div className="reveal">
        <h2 className="about-intro__title">Prazer, sou Patrick Gattini.</h2>
        <p>Sou Desenvolvedor Full-Stack e Professor Universitário, dedicado a transformar desafios complexos de negócios em soluções digitais elegantes e escaláveis.</p>
        <p>Atualmente, lidero iniciativas de desenvolvimento no <strong>Grupo Ítalo</strong> e contribuo para a formação da próxima geração de talentos na <strong>UNIPAR</strong>, nos cursos de Análise e Desenvolvimento de Sistemas e Engenharia de Software.</p>
        <p>Trabalho com {stack.slice(0, -1).join(', ')} e {stack[stack.length - 1]}.</p>
      </div>

      <div className="reveal about-cv">
        <h3 className="kicker">Formação</h3>
        <ul>
          {education.map((e) => (
            <li key={e.course}>
              <span className="num">{e.year}</span>
              <div>
                <p>{e.course}</p>
                <p className="muted">{e.school}</p>
                <a href={e.href} target="_blank" rel="noreferrer" className="link-line about-cv__cert">
                  Ver certificado <ArrowUpRight size={12} style={{ verticalAlign: '-1px' }} />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="kicker" style={{ marginTop: '3rem' }}>Experiência</h3>
        <ul>
          {experience.map((x) => (
            <li key={x.role}>
              <span className="num">{x.period}</span>
              <div>
                <p>{x.role}</p>
                <p className="muted">{x.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section section--alt" style={{ marginTop: '120px' }}>
      <div className="container" style={{ maxWidth: '860px', textAlign: 'center' }}>
        <h2 className="section-title reveal" style={{ marginBottom: '2.5rem' }}>Ensino e mercado.</h2>
        {roles.map((r) => (
          <p key={r.name} className="muted reveal" style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{r.name} — {r.role}.</strong> {r.desc}
          </p>
        ))}
      </div>
    </section>

    <style>{`
      .about-hero { height: 100vh; min-height: 520px; background-size: cover; background-position: center 30%; position: relative; }
      .about-hero::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(5,8,15,0.6), rgba(26,63,158,0.25) 45%, rgba(5,8,15,0.75)); }
      .about-quote-band { position: relative; overflow: hidden; margin-bottom: 120px; }
      .about-quote { position: relative; max-width: 760px; text-align: center; }
      .about-quote p { font-weight: 300; font-size: clamp(1.4rem, 2.6vw, 2.25rem); line-height: 1.45; letter-spacing: 0.04em; }
      .about-quote__rule { display: block; width: 40px; height: 1px; background: var(--blue-light); margin: 2.5rem auto 0; }
      .about-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
      .about-intro__title { font-weight: 300; font-size: clamp(1.6rem, 2.6vw, 2.2rem); letter-spacing: 0.14em; text-transform: uppercase; line-height: 1.25; margin-bottom: 2rem; }
      .about-intro p { color: var(--ink-soft); font-size: 1.02rem; line-height: 1.9; margin-bottom: 1.25rem; }
      .about-intro strong { color: var(--ink); font-weight: 500; }
      .about-cv ul { list-style: none; margin-top: 1.25rem; border-top: 2px solid var(--blue); }
      .about-cv li { display: grid; grid-template-columns: 130px 1fr; gap: 1rem; padding: 1.25rem 0; border-bottom: 1px solid var(--line); }
      .about-cv li p { margin-bottom: 0.15rem; color: var(--ink); }
      .about-cv li p.muted { color: var(--ink-soft); font-size: 0.9rem; }
      .about-cv__cert { margin-top: 0.75rem; font-size: 0.68rem; }
      @media (max-width: 860px) {
        .about-intro { grid-template-columns: 1fr; gap: 3.5rem; }
        .about-cv li { grid-template-columns: 1fr; gap: 0.25rem; }
      }
    `}</style>
  </main>
);

export default AboutPage;
