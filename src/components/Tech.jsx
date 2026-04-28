import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'HTML', 'CSS', 'JavaScript', 'React JS', 'React Native', 
  'Ruby', 'Java', 'Node.js', 'Firebase', 'GraphQL',
  'Git', 'GitHub', 'SQL', 'NoSQL', 'DevOps', 'Ubuntu', 'PostgreSQL'
];

const Tech = () => {
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section id="tech" style={{ padding: '80px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
        <div style={{ flexShrink: 0 }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--gray-medium)' }}>TECNOLOGIAS</h2>
        </div>

        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}>
          <motion.div
            animate={{ x: ['0%', '-33.33%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25
            }}
            style={{
              display: 'flex',
              gap: '5rem',
              alignItems: 'center',
              width: 'max-content'
            }}
          >
            {duplicatedTechs.map((tech, idx) => (
              <div
                key={`${tech}-${idx}`}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.1em'
                }}
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
