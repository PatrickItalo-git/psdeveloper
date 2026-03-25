import { motion } from 'framer-motion';
import About from '../components/About.jsx';
import CurrentRoles from '../components/CurrentRoles.jsx';
import Tech from '../components/Tech.jsx';

const AboutPage = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <About />
      <CurrentRoles />
      <div style={{ marginTop: '4rem' }}>
        <Tech />
      </div>
    </main>
  );
};

export default AboutPage;
