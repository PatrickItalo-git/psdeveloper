import { motion } from 'framer-motion';
import { Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="cta" style={{ padding: '100px 5%', background: 'linear-gradient(to bottom, transparent, rgba(240, 19, 30, 0.05))' }}>
      <div className="glass" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '5rem 3rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(240, 19, 30, 0.2)',
        boxShadow: '0 0 50px rgba(240, 19, 30, 0.1)'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Rocket size={60} style={{ color: 'var(--primary-color)', marginBottom: '2rem' }} />
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Dê o Próximo Passo na <br/> <span style={{ color: 'var(--primary-color)' }}>Evolução do seu Negócio</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Não deixe sua presença digital nas mãos de amadores. Tenha um site focado em performance, 
            design de elite e estratégia de vendas em Francisco Beltrão.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontWeight: 600 }}>
              <CheckCircle size={20} color="var(--primary-color)" /> Entrega Ágil
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontWeight: 600 }}>
              <CheckCircle size={20} color="var(--primary-color)" /> SEO Local Beltrão
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontWeight: 600 }}>
              <CheckCircle size={20} color="var(--primary-color)" /> Suporte 24/7
            </div>
          </div>

          <motion.a
            href="https://wa.me/5546999011726"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--primary-glow)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem 4rem',
              background: 'var(--primary-color)',
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: 800,
              borderRadius: '16px',
              textDecoration: 'none',
              boxShadow: '0 10px 40px -10px var(--primary-color)'
            }}
          >
            QUERO MEU SITE AGORA <ArrowRight size={22} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
