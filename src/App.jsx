import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Cursor from './components/Cursor.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Starfield from './components/Starfield.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';

function App() {
  return (
    <Router>
      <div className="portfolio-app">
        <Starfield />
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
