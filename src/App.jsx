import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import ClientsPage from './pages/ClientsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// On every route change: jump to the top and fade in `.reveal` elements as they scroll into view.
const RouteEffects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <RouteEffects />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/projeto/:slug" element={<ProjectPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
