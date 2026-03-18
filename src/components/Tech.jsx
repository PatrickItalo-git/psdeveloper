import { motion } from 'framer-motion';

const technologies = [
  'HTML', 'CSS', 'JavaScript', 'React JS', 'React Native', 
  'Ruby', 'Java', 'Node.js', 'Firebase', 'GraphQL',
  'Git', 'GitHub', 'SQL', 'NoSQL', 'Servidores', 'Ubuntu', 'PostgreSQL'
];

const Tech = () => {
  // We duplicate the array to ensure seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section id="tech" style={{ paddingBottom: '80px', overflowX: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Tecnologias & <span style={{ color: 'var(--primary-color)' }}>Ferramentas</span></h2>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}>
        <motion.div
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20
          }}
          style={{
            display: 'flex',
            gap: '1.5rem',
            paddingLeft: '1.5rem',
            width: 'max-content'
          }}
        >
          {duplicatedTechs.map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="glass"
              style={{
                padding: '0.8rem 2rem',
                borderRadius: '50px',
                color: 'var(--accent-color)',
                fontSize: '1rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                cursor: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 0 20px var(--primary-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.color = 'var(--accent-color)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
