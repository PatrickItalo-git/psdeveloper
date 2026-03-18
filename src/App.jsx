import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Tech from './components/Tech.jsx';
import Footer from './components/Footer.jsx';
import CurrentRoles from './components/CurrentRoles.jsx';
import Cursor from './components/Cursor.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Starfield from './components/Starfield.jsx';

function App() {
  return (
    <div className="portfolio-app">
      <Starfield />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CurrentRoles />
        <Tech />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
