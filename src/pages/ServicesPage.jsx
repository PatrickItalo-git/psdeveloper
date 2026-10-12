import { services } from '../data/site.js';
import PageHero from '../components/PageHero.jsx';

const ServicesPage = () => (
  <main>
    <PageHero title="Serviços" subtitle="Da primeira conversa ao sistema em produção." />

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
