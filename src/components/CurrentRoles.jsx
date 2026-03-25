import { motion } from 'framer-motion';
import uniparImg from '../images/image.png';
import italoImg from '../images/image2.png';

const CurrentRoles = () => {
  return (
    <section id="atuacao" style={{ paddingTop: '40px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Onde estou <span style={{ color: 'var(--primary-color)' }}>Atualmente</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Conheça as instituições onde aplico e compartilho meus conhecimentos no dia a dia.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '3rem', 
        maxWidth: '1000px', 
        margin: '0 auto' 
      }}>
        {/* UNIPAR Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            padding: '2rem',
            borderRadius: '24px',
            border: '1px solid rgba(240, 19, 30, 0.2)'
          }}
        >
          <div style={{ overflow: 'hidden', borderRadius: '16px', maxHeight: '250px' }}>
            <img 
              src={uniparImg} 
              alt="UNIPAR Imagem" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>INSTITUIÇÃO DE ENSINO</span>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: '0.5rem 0' }}>UNIPAR</h3>
            <p style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
              Professor de ADS
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Leciono aulas de Desenvolvimento Web e DevOps, focado em formar futuros profissionais com as melhores práticas do mercado de tecnologia.
            </p>
          </div>
        </motion.div>

        {/* Grupo Ítalo Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            padding: '2rem',
            borderRadius: '24px',
            border: '1px solid rgba(240, 19, 30, 0.2)'
          }}
        >
          <div style={{ overflow: 'hidden', borderRadius: '16px', maxHeight: '250px' }}>
            <img 
              src={italoImg} 
              alt="Grupo Ítalo Imagem" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>ATUAÇÃO NO MERCADO</span>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: '0.5rem 0' }}>Grupo Ítalo</h3>
            <p style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
              Analista de Desenvolvimento
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Atuo na criação de ferramentas para melhoria de performance, otimização PostgreSQL, APIs e processos do grupo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentRoles;
