import { motion } from 'framer-motion';
import { Layout, BarChart, Zap, Globe, Database } from 'lucide-react';

const services = [
  {
    title: 'Landing Pages & Portfólios',
    desc: 'Páginas de alta conversão, performance otimizada e design estratégico.',
    icon: Layout
  },
  {
    title: 'Dashboards',
    desc: 'Painéis administrativos para análise de dados e tomada de decisão.',
    icon: BarChart
  },
  {
    title: 'Automações',
    desc: 'Scripts inteligentes para eliminar tarefas manuais e repetitivas.',
    icon: Zap
  },
  {
    title: 'Sistemas Web',
    desc: 'Aplicações robustas e escaláveis feitas sob medida para o seu negócio.',
    icon: Globe
  },
  {
    title: 'Integrações',
    desc: 'Conexão eficiente entre plataformas, APIs e bancos de dados.',
    icon: Database
  }
];

const Services = () => {
  return (
    <section id="servicos">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>O que eu <span style={{ color: 'var(--primary-color)' }}>entrego</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Soluções digitais focadas em resultados, performance e experiência do usuário.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '380px',
              minHeight: '280px',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'default',
              boxSizing: 'border-box',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(240, 19, 30, 0.2)',
              borderColor: 'rgba(240, 19, 30, 0.4)'
            }}
          >
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '-20%',
              right: '-20%',
              width: '120px',
              height: '120px',
              background: 'radial-gradient(circle, rgba(240, 19, 30, 0.15) 0%, transparent 70%)',
              filter: 'blur(20px)',
              zIndex: 0
            }} />

            <div style={{
              width: '56px',
              height: '56px',
              background: 'rgba(240, 19, 30, 0.1)',
              border: '1px solid rgba(240, 19, 30, 0.2)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              color: 'var(--primary-color)',
              position: 'relative',
              zIndex: 1
            }}>
              <service.icon size={28} />
            </div>
            
            <h3 style={{ 
              fontSize: '1.4rem', 
              marginBottom: '1rem', 
              color: '#fff', 
              fontWeight: 800,
              position: 'relative',
              zIndex: 1
            }}>
              {service.title}
            </h3>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem', 
              lineHeight: 1.6,
              position: 'relative',
              zIndex: 1
            }}>
              {service.desc}
            </p>

            {/* Subtle bottom indicator */}
            <motion.div 
              style={{
                height: '3px',
                width: '40px',
                background: 'var(--primary-color)',
                marginTop: 'auto',
                borderRadius: '2px',
                opacity: 0.3
              }}
              whileHover={{ opacity: 1, width: '60px' }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
