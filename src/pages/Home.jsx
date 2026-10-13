import { Link } from 'react-router-dom';
import profileImg from '../images/profile.jpg';
import { projects, roles } from '../data/site.js';
import Waves from '../components/Waves.jsx';

const Home = () => (
  <main>
    {/* Hero: dark blue glow with slowly drifting lines, name in a translucent band */}
    <section className="home-hero">
      <Waves className="home-hero__waves" />
      <div className="home-hero__band">
        <h1 className="home-hero__title">Patrick Gattini</h1>
        <p className="home-hero__sub">Desenvolvimento com propósito</p>
      </div>
    </section>

    {/* Quote + portrait */}
    <section className="section section--dark home-quote">
      <Waves />
      <div className="container home-quote__grid">
        <div className="home-quote__text reveal">
          <blockquote>
            “A engenharia de software não é apenas sobre escrever código — é sobre construir sistemas que perdurem e gerem valor real.”
          </blockquote>
          <p className="kicker home-quote__name">Patrick Gattini</p>
          <Link to="/contato" className="link-line">Inicie seu projeto</Link>
        </div>
        <div className="home-quote__photo reveal">
          <img src={profileImg} alt="Patrick Gattini" />
        </div>
      </div>
    </section>

    {/* Featured projects, alternating image and text */}
    <section className="section">
      <div className="container">
        <h2 className="section-title reveal">Projetos destaque</h2>
        <div className="featured">
          {projects.map((p, i) => (
            <article key={p.slug} className={`featured__row ${i % 2 ? 'is-reversed' : ''}`}>
              <Link to={`/projeto/${p.slug}`} className="featured__img reveal">
                <img src={p.cover} alt={`Site ${p.title}`} loading="lazy" />
              </Link>
              <div className="featured__text reveal">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="display">{p.title}</h3>
                <p className="featured__tagline muted">{p.summary}</p>
                <Link to={`/projeto/${p.slug}`} className="link-line">Explorar projeto</Link>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '6rem' }} className="reveal">
          <Link to="/projetos" className="link-line" style={{ fontSize: '0.95rem', letterSpacing: '0.3em' }}>Ver portfólio completo</Link>
        </div>
      </div>
    </section>

    {/* Where I work today, in the testimonial-card style */}
    <section className="section section--alt">
      <div className="container">
        <h2 className="section-title reveal">Onde atuo hoje</h2>
        <div className="grid-2">
          {roles.map((r) => (
            <div key={r.name} className="card role-card reveal">
              <div className="role-card__logo"><img src={r.logo} alt={`Logo ${r.name}`} /></div>
              <h3>{r.name}</h3>
              <p className="kicker" style={{ color: 'var(--blue)', marginBottom: '1rem', fontSize: '0.72rem', letterSpacing: '0.2em' }}>{r.role}</p>
              <p className="muted" style={{ fontStyle: 'italic' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <style>{`
      .home-hero {
        position: relative; height: 100vh; min-height: 560px; overflow: hidden; display: flex; align-items: center;
        background:
          radial-gradient(ellipse 60% 55% at 78% 18%, rgba(47, 107, 255, 0.38), transparent 70%),
          radial-gradient(ellipse 55% 50% at 8% 92%, rgba(26, 63, 158, 0.45), transparent 70%),
          var(--night);
      }
      .home-hero__waves { width: 120% !important; left: -10% !important; animation: waveDrift 22s ease-in-out infinite alternate; }
      .home-hero__waves path { stroke: rgba(122, 166, 255, 0.45); }
      .home-hero__band { position: relative; width: 100%; padding: clamp(2.5rem, 5vw, 4rem) 1.5rem; background: rgba(255, 255, 255, 0.06); border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(8px); text-align: center; color: #fff; box-shadow: 0 30px 60px -30px rgba(0,0,0,0.6); }
      @media (prefers-reduced-motion: reduce) { .home-hero__waves { animation: none; } }
      .home-hero__title { font-weight: 200; font-size: clamp(2.2rem, 6vw, 5rem); letter-spacing: 0.15em; text-transform: uppercase; line-height: 1.1; padding-left: 0.15em; text-shadow: 0 2px 12px rgba(0,0,0,0.35); }
      .home-hero__sub { margin-top: 1.5rem; font-weight: 300; font-size: clamp(0.8rem, 1.4vw, 1.2rem); letter-spacing: 0.35em; text-transform: uppercase; padding-left: 0.35em; color: var(--blue-light); }

      .home-quote { position: relative; overflow: hidden; padding: 100px 0; }
      .home-quote__grid { position: relative; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; align-items: center; }
      .home-quote__text { text-align: right; }
      .home-quote__text blockquote { font-weight: 300; font-size: clamp(1.4rem, 2.5vw, 2.2rem); line-height: 1.45; }
      .home-quote__name { margin: 1rem 0 3rem; color: rgba(255,255,255,0.75); }
      .home-quote__photo img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; object-position: center 30%; filter: grayscale(0.25); }

      .featured { display: flex; flex-direction: column; gap: clamp(5rem, 10vw, 8rem); }
      .featured__row { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
      .featured__row.is-reversed .featured__img { order: 2; }
      .featured__img { overflow: hidden; }
      .featured__img img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; object-position: top; transition: transform 1.2s cubic-bezier(0.16,1,0.3,1); }
      .featured__img:hover img { transform: scale(1.04); }
      .featured__text .display { margin: 0.75rem 0 1rem; }
      .featured__tagline { font-size: 1.1rem; max-width: 46ch; margin-bottom: 2.5rem; }

      .role-card__logo { width: 72px; height: 72px; margin-bottom: 2rem; background: #fff; display: flex; align-items: center; justify-content: center; }
      .role-card__logo img { width: 100%; height: 100%; object-fit: contain; }

      @media (max-width: 860px) {
        .home-quote__grid, .featured__row { grid-template-columns: 1fr; gap: 2.5rem; }
        .home-quote__text { text-align: right; }
        .featured__row.is-reversed .featured__img { order: 0; }
      }
    `}</style>
  </main>
);

export default Home;
