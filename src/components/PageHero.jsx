import Waves from './Waves.jsx';

// Blue banner that opens every inner page, matching the home hero.
const PageHero = ({ title, subtitle }) => (
  <section className="page-hero">
    <Waves className="page-hero__waves" />
    <div className="page-hero__content">
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="page-hero__sub">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
