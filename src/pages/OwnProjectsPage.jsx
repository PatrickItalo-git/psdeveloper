import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { ownProjects } from '../data/site.js';

const OwnProjectsPage = () => (
  <main>
    <PageHero title="Projetos autorais" subtitle="Produtos meus, da ideia ao lançamento." />

    <section className="container" style={{ paddingBottom: '120px' }}>
      {ownProjects.map((p, i) => (
        <article key={p.slug} className="own-project">
          <div className="own-project__row">
            <a href={p.url} target="_blank" rel="noreferrer" className="own-project__img reveal">
              <img src={p.cover} alt={`Site ${p.title}`} loading="lazy" />
            </a>

            <div className="own-project__text reveal">
              <div className="own-project__meta">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="own-project__status">{p.status}</span>
              </div>
              <h2 className="display">{p.title}</h2>
              <p className="own-project__tagline">{p.tagline}</p>
              {p.description.map((text) => (
                <p key={text.slice(0, 20)} className="muted own-project__desc">{text}</p>
              ))}
              <p className="kicker muted own-project__segment">{p.segment} · {p.location}</p>
              <a href={p.url} target="_blank" rel="noreferrer" className="link-line">
                Visitar {p.domain} <ArrowUpRight size={13} style={{ verticalAlign: '-1px' }} />
              </a>
            </div>
          </div>

          <div className="own-project__gallery">
            {p.gallery.map((src, n) => (
              <img key={src} src={src} alt={`${p.title} — tela ${n + 1}`} loading="lazy" className="reveal" />
            ))}
          </div>
        </article>
      ))}
    </section>

    <style>{`
      .own-project__row { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 4rem; align-items: center; }
      .own-project__img { overflow: hidden; box-shadow: var(--shadow); }
      .own-project__img img { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; object-position: top; transition: transform 1.2s cubic-bezier(0.16,1,0.3,1); }
      .own-project__img:hover img { transform: scale(1.04); }
      .own-project__meta { display: flex; align-items: center; gap: 1rem; }
      .own-project__status { font-size: 0.7rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--blue); border: 1px solid var(--blue); padding: 0.25rem 0.75rem; }
      .own-project__text .display { margin: 0.75rem 0 0.5rem; }
      .own-project__tagline { font-size: 1.15rem; color: var(--blue-dark); margin-bottom: 1.5rem; }
      .own-project__desc { margin-bottom: 1rem; line-height: 1.85; }
      .own-project__segment { font-size: 0.7rem; letter-spacing: 0.2em; margin: 1.5rem 0 2rem; }
      .own-project__gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 4rem; }
      .own-project__gallery img { width: 100%; box-shadow: var(--shadow); }
      @media (max-width: 860px) {
        .own-project__row, .own-project__gallery { grid-template-columns: 1fr; gap: 2rem; }
      }
    `}</style>
  </main>
);

export default OwnProjectsPage;
