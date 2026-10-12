import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import { projects } from '../data/site.js';

const ClientsPage = () => (
  <main>
    <PageHero title="Clientes" subtitle="Empresas que confiaram no meu trabalho para construir sua presença digital." />

    <section className="container" style={{ paddingBottom: '120px' }}>
      <div className="grid-2">
        {projects.map((p) => (
          <article key={p.slug} className="card reveal client-card">
            <span className="kicker muted" style={{ fontSize: '0.7rem', letterSpacing: '0.25em' }}>{p.segment}</span>
            <h3 style={{ marginTop: '1rem' }}>{p.title}</h3>
            <p className="muted" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>{p.summary}</p>
            <p className="client-card__place">— {p.location}</p>
            <div className="client-card__links">
              <Link to={`/projeto/${p.slug}`} className="link-line">Ver projeto</Link>
              <a href={p.url} target="_blank" rel="noreferrer" className="link-line">{p.domain}</a>
            </div>
          </article>
        ))}
      </div>
    </section>

    <style>{`
      .client-card__place { font-weight: 600; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 2rem; }
      .client-card__links { display: flex; flex-wrap: wrap; gap: 2rem; }
      .client-card__links .link-line { font-size: 0.75rem; }
    `}</style>
  </main>
);

export default ClientsPage;
