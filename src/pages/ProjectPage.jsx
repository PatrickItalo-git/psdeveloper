import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/site.js';
import ProjectsPage from './ProjectsPage.jsx';

const ProjectPage = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <ProjectsPage />;

  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ backgroundImage: `url(${p.cover})` }} aria-hidden="true" />
        <Link to="/projetos" className="project-hero__back">
          <ArrowLeft size={16} strokeWidth={1.5} /> Voltar
        </Link>
        <h1 className="project-hero__title">{p.title}</h1>
      </section>

      <div className="container">
        <article className="project-card reveal">
          <h2>{p.title}</h2>
          <p className="project-card__tagline">{p.tagline}</p>
          {p.description.map((text) => (
            <p key={text.slice(0, 20)} className="project-card__text">{text}</p>
          ))}

          <dl className="project-card__facts">
            <div><dt>Cliente</dt><dd>{p.title}</dd></div>
            <div><dt>Segmento</dt><dd>{p.segment}</dd></div>
            <div><dt>Local</dt><dd>{p.location}</dd></div>
          </dl>

          <a href={p.url} target="_blank" rel="noreferrer" className="btn-solid">
            Visitar site <ArrowUpRight size={16} />
          </a>
        </article>

        <div className="project-gallery">
          {p.gallery.map((src, i) => (
            <img key={src} src={src} alt={`${p.title} — tela ${i + 1} no computador`} loading="lazy" className="reveal" />
          ))}
        </div>

        {p.mobile.length > 0 && (
          <>
            <h3 className="section-title reveal" style={{ marginTop: '7rem' }}>No celular</h3>
            <div className="project-mobile">
              {p.mobile.map((src, i) => (
                <img key={src} src={src} alt={`${p.title} — tela ${i + 1} no celular`} loading="lazy" className="reveal" />
              ))}
            </div>
          </>
        )}

        <div className="project-next reveal">
          <span className="kicker muted">Próximo projeto</span>
          <Link to={`/projeto/${next.slug}`} className="display">{next.title}</Link>
        </div>
      </div>

      <style>{`
        .project-hero { position: relative; height: 70vh; min-height: 460px; overflow: hidden; background: var(--night); display: flex; align-items: center; justify-content: center; color: #fff; }
        /* Blurred screenshot: keeps the client's colors without repeating their on-page title */
        .project-hero__bg { position: absolute; inset: -40px; background-size: cover; background-position: center; filter: blur(18px) brightness(0.5) saturate(1.1); transform: scale(1.05); }
        .project-hero::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(5,8,15,0.45), rgba(5,8,15,0.25) 50%, rgba(5,8,15,0.55)); }
        .project-hero__back, .project-hero__title { z-index: 1; }
        .project-hero__back { position: absolute; top: calc(var(--header-h) + 24px); left: clamp(1.25rem, 3vw, 2.25rem); display: inline-flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; letter-spacing: 0.18em; text-transform: uppercase; z-index: 1; }
        .project-hero__back:hover { color: var(--blue-light); }
        .project-hero__title { position: relative; font-weight: 300; font-size: clamp(2.4rem, 6vw, 4.5rem); letter-spacing: 0.08em; text-transform: uppercase; text-align: center; padding: 0 1rem; }

        .project-card { position: relative; max-width: 800px; margin: -64px auto 0; background: #fff; box-shadow: var(--shadow); padding: clamp(2rem, 5vw, 4rem); }
        .project-card h2 { font-weight: 600; font-size: 2rem; margin-bottom: 1.25rem; }
        .project-card__tagline { font-size: 1.2rem; color: var(--ink-soft); margin-bottom: 2rem; }
        .project-card__text { margin-bottom: 1.25rem; line-height: 1.85; }
        .project-card__facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin: 2.5rem 0; padding: 1.5rem 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .project-card__facts dt { font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 0.35rem; }
        .project-card__facts dd { font-size: 0.95rem; }

        .project-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 4rem; }
        .project-gallery img { width: 100%; box-shadow: var(--shadow); }
        .project-mobile { display: grid; grid-template-columns: repeat(3, minmax(0, 300px)); justify-content: center; gap: 2rem; }
        .project-mobile img { width: 100%; border: 1px solid var(--line); box-shadow: var(--shadow); }

        .project-next { text-align: center; padding: 8rem 0 7rem; display: flex; flex-direction: column; gap: 1.25rem; align-items: center; }
        .project-next a:hover { color: var(--blue); }

        @media (max-width: 760px) {
          .project-gallery { grid-template-columns: 1fr; }
          .project-mobile { grid-template-columns: repeat(3, 1fr); gap: 0.75rem; }
          .project-card__facts { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
};

export default ProjectPage;
