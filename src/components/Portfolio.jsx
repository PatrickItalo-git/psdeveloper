import { motion } from 'framer-motion';
import { ExternalLink, Stethoscope, Dumbbell, Megaphone, ShoppingCart, Layout, Utensils } from 'lucide-react';
import imgOdonto from '../images/proj_odonto.png';
import imgPersonal from '../images/proj_personal.png';
import imgMarketing from '../images/proj_marketing.png';
import imgSpace from '../images/proj_space.png';
import imgSaas from '../images/proj_saas.png';

const projectsData = [
  {
    title: "Clínica SmileBright",
    category: "Odontologia",
    description: "Design premium e clean para uma clínica odontológica de elite.",
    image: imgOdonto,
    icon: Stethoscope,
    color: "#00bcd4",
    link: "/PROJETOS/clinica-odontologica/index.html"
  },
  {
    title: "Apex Personal",
    category: "Personal Trainer",
    description: "Layout de alta performance para treinamento personalizado.",
    image: imgPersonal,
    icon: Dumbbell,
    color: "#ff4d00",
    link: "/PROJETOS/personal-trainer/index.html"
  },
  {
    title: "Lumina Media",
    category: "Marketing Digital",
    description: "Página moderna com glassmorphism para agência de publicidade.",
    image: imgMarketing,
    icon: Megaphone,
    color: "#a855f7",
    link: "/PROJETOS/agencia-marketing/index.html"
  },
  {
    title: "Nebula Shop",
    category: "E-commerce Espacial",
    description: "Loja futurista com efeitos holográficos e espaciais.",
    image: imgSpace,
    icon: ShoppingCart,
    color: "#00f2ff",
    link: "/PROJETOS/e-commerce-espacial/index.html"
  },
  {
    title: "SyncTask SaaS",
    category: "Plataforma SaaS",
    description: "Dashboard minimalista para gestão de produtividade.",
    image: imgSaas,
    icon: Layout,
    color: "#2563eb",
    link: "/PROJETOS/plataforma-saas/index.html"
  },
  {
    title: "GastroMundi",
    category: "Cardápio Online",
    description: "Experiência digital interativa para restaurantes premium.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
    icon: Utensils,
    color: "#c5a059",
    link: "/PROJETOS/cardapio-digital/index.html"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" style={{ padding: '100px 5%', background: '#050505' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '15px' }}
        >
          Meu <span style={{ color: 'var(--primary-color)' }}>Portfólio</span>
        </motion.h2>
        <p style={{ color: '#888', fontSize: '1.2rem' }}>Exemplos de diversos nichos</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '40px'
      }}>
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -15 }}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '30px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative'
            }}
          >
            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to top, #050505, transparent)`,
                opacity: 0.8
              }} />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: project.color,
                color: '#fff',
                padding: '5px 15px',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: 700
              }}>
                {project.category}
              </div>
            </div>

            <div style={{ padding: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <project.icon style={{ color: project.color }} size={28} />
                <a href={project.link} target="_blank" rel="noreferrer" style={{ color: '#888' }}>
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>{project.title}</h3>
              <p style={{ color: '#888', marginBottom: '25px', lineHeight: '1.6' }}>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: project.color,
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '1rem'
                }}
              >
                VISITAR PROJETO <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
