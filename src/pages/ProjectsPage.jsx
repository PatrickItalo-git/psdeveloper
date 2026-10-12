import { Link } from 'react-router-dom';
import { projects } from '../data/site.js';

const ProjectsPage = () => (
  <main>
    <header className="page-head">
      <h1 className="page-title reveal">Projetos</h1>
    </header>

    <section className="container" style={{ paddingBottom: '120px' }}>
      <div className="grid-2 projects-grid">
        {projects.map((p, i) => (
          <Link key={p.slug} to={`/projeto/${p.slug}`} className="project-tile reveal">
            <div className="project-tile__img">
              <img src={p.cover} alt={`Site ${p.title}`} loading="lazy" />
            </div>
            <div className="project-tile__meta">
              <div>
                <h2>{p.title}</h2>
                <p className="muted">{p.tagline}</p>
              </div>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <style>{`
      .projects-grid { gap: 2rem; }
      .project-tile__img { overflow: hidden; }
      .project-tile__img img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; object-position: top; transition: transform 1.2s cubic-bezier(0.16,1,0.3,1); }
      .project-tile:hover .project-tile__img img { transform: scale(1.04); }
      .project-tile__meta { display: flex; justify-content: space-between; gap: 1rem; padding: 1.5rem 1rem 0; }
      .project-tile__meta h2 { font-weight: 300; font-size: 1.35rem; letter-spacing: 0.18em; text-transform: uppercase; line-height: 1.3; transition: color 0.3s; }
      .project-tile:hover h2 { color: var(--blue); }
      .project-tile__meta p { font-size: 0.9rem; letter-spacing: 0.05em; }
    `}</style>
  </main>
);

export default ProjectsPage;
