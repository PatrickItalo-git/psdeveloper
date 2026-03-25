import { motion } from 'framer-motion';
import { ExternalLink, Code, Globe, Cpu } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'OMEGA',
    subtitle: 'Sistema de Gestão para Salões',
    desc: 'Sistema completo que substituiu processos manuais, tornando o agendamento e o financeiro mais rápidos e eficientes.',
    techs: ['React.js', 'Node.js', 'PostgreSQL', 'Express'],
    color: '#f0131e',
    icon: Cpu
  },
  {
    title: 'MEMORY',
    subtitle: 'Galeria Online Interativa',
    desc: 'Projeto de galeria de fotos online interativa, permitindo acesso via QR Code e compartilhamento instantâneo em eventos.',
    techs: ['React.js', 'CSS3', 'Responsive Design'],
    color: '#ff4d4d',
    icon: Globe
  },
  {
    title: 'GERADOR DE LEADS',
    subtitle: 'Google Maps + Puppeteer',
    desc: 'Automação para extração de informações públicas de estabelecimentos comerciais para prospecção estratégica.',
    techs: ['Node.js', 'Puppeteer', 'Automation'],
    color: '#0033a0',
    icon: Code
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projetos">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-1px' }}>
          Meus <span className="text-gradient">Projetos</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Uma imersão técnica em cada linha de código.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2.5rem'
      }}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="glass"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(240, 19, 30, 0.1)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              position: 'relative',
              background: 'rgba(15, 15, 20, 0.4)',
              borderRadius: '24px'
            }}
            whileHover={{ 
              y: -15,
              borderColor: project.color,
              boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 25px ${project.color}33`
            }}
          >
            {/* Holographic Header */}
            <div style={{
              height: '240px',
              background: `linear-gradient(135deg, ${project.color}11 0%, ${project.color}33 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              fontWeight: 900,
              fontFamily: 'Outfit',
              color: project.color,
              position: 'relative',
              overflow: 'hidden'
            }}>
              <motion.div 
                animate={{ 
                  scale: hoveredIndex === idx ? 1.1 : 1,
                  opacity: hoveredIndex === idx ? 0.3 : 0.15
                }}
                style={{
                  position: 'absolute',
                  fontSize: '12rem',
                  fontWeight: 900,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                {project.title}
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: hoveredIndex === idx ? -5 : 0,
                  scale: hoveredIndex === idx ? 1.1 : 1
                }}
                style={{ 
                  zIndex: 2, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  gap: '1rem',
                  textShadow: `0 0 20px ${project.color}66`
                }}
              >
                <project.icon size={48} />
                <span style={{ fontSize: '1.8rem', letterSpacing: '4px' }}>{project.title}</span>
              </motion.div>

              {/* Scanline overlay for the header */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)',
                pointerEvents: 'none'
              }} />
            </div>

            <div style={{ padding: '2rem', position: 'relative' }}>
              <p style={{ 
                color: project.color, 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {project.subtitle}
              </p>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem', minHeight: '60px', lineHeight: 1.6 }}>
                {project.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                {project.techs.map(tech => (
                  <span key={tech} style={{
                    fontSize: '0.75rem',
                    background: 'rgba(240, 19, 30, 0.05)',
                    padding: '0.4rem 1rem',
                    borderRadius: '8px',
                    color: 'var(--accent-color)',
                    border: '1px solid rgba(240, 19, 30, 0.1)',
                    fontWeight: 600
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: '#fff' }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.6rem', 
                    fontSize: '0.9rem', 
                    color: 'var(--text-secondary)', 
                    fontWeight: 600 
                  }}
                >
                  <ExternalLink size={16} /> ACESSAR MÓDULO
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
