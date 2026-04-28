import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import CurrentRoles from '../components/CurrentRoles.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Tech from '../components/Tech.jsx';
import CallToAction from '../components/CallToAction.jsx';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <CurrentRoles />
      <Services />
      <Portfolio />
      <Tech />
      <CallToAction />
    </main>
  );
};

export default Home;
