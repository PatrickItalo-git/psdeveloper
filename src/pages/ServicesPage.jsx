import { services } from '../data/site.js';

const ServicesPage = () => (
  <main>
    <header className="page-head">
      <h1 className="page-title reveal">Serviços</h1>
    </header>

    <section className="container" style={{ paddingBottom: '120px' }}>
      <div className="grid-3">
        {services.map((s) => (
          <article key={s.title} className="card reveal">
            <h3>{s.title}</h3>
            <p className="muted" style={{ lineHeight: 1.85 }}>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default ServicesPage;
