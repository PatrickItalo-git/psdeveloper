import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, ArrowUpRight } from 'lucide-react';
import profileImg from '../images/image3.png';

const About = () => {
  return (
    <section id="sobre">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span style={{ color: 'var(--primary-color)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem' }}>Especialista em Francisco Beltrão e Sudoeste do PR</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '2rem' }}>O profissional para <span style={{ color: 'var(--primary-color)' }}>o seu site</span></h2>
          
          <div style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Sou desenvolvedor Web Full-Stack e Professor Universitário, especializado em transformar desafios de negócio em soluções digitais eficientes, escaláveis e bem estruturadas.
            </p>
            <p>
              Atualmente, atuo como <strong>Analista de Desenvolvimento no Grupo Ítalo</strong>, focando em performance e otimização de sistemas, e leciono na <strong>UNIPAR</strong>, compartilhando conhecimento sobre desenvolvimento web e DevOps.
            </p>
            <p>
              "Código, para mim, é o meio. O objetivo é entregar soluções que funcionam hoje e continuem funcionando amanhã."
            </p>
          </div>
          
          <div style={{ marginTop: '2.5rem', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(240, 19, 30, 0.2)', maxWidth: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <img src={profileImg} alt="Peter Dev" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} loading="lazy" decoding="async" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div className="glass" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <GraduationCap style={{ color: 'var(--primary-color)' }} />
              <h4 style={{ fontSize: '1.2rem' }}>Formação Acadêmica</h4>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ borderLeft: '2px solid var(--secondary-color)', paddingLeft: '1rem', position: 'relative' }}>
                <p style={{ fontWeight: 600, color: '#fff' }}>Pós-Graduação Dev Web Full Stack</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Anhanguera | 2025</p>
                <a href="/certificados/Certificado-Pos-Graduacao.pdf" target="_blank" style={{ fontSize: '0.75rem', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  Ver Certificado <ArrowUpRight size={12} />
                </a>
              </li>
              <li style={{ borderLeft: '2px solid var(--secondary-color)', paddingLeft: '1rem', position: 'relative' }}>
                <p style={{ fontWeight: 600, color: '#fff' }}>Análise e Desenvolvimento de Sistemas</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>UNIPAR | 2024</p>
                <a href="/certificados/Certificado-Tecnologo.pdf" target="_blank" style={{ fontSize: '0.75rem', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  Ver Certificado <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          <div className="glass" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Briefcase style={{ color: 'var(--primary-color)' }} />
              <h4 style={{ fontSize: '1.2rem' }}>Experiência Profissional</h4>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ borderLeft: '2px solid var(--secondary-color)', paddingLeft: '1rem' }}>
                <p style={{ fontWeight: 600, color: '#fff' }}>Professor Universitário</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>UNIPAR | Fev 2026 - Presente</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Aulas de desenvolvimento web e Devops para ADS.</p>
              </li>
              <li style={{ borderLeft: '2px solid var(--secondary-color)', paddingLeft: '1rem' }}>
                <p style={{ fontWeight: 600, color: '#fff' }}>Analista de Desenvolvimento</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Grupo Ítalo | Dez 2025 - Presente</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Criação de ferramentas para performance, otimização de consultas PostgreSQL, criação e manutenção de APIs.</p>
              </li>
              <li style={{ borderLeft: '2px solid var(--secondary-color)', paddingLeft: '1rem' }}>
                <p style={{ fontWeight: 600, color: '#fff' }}>Desenvolvedor Full-Stack</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Grifo Sistemas | Jun 2024 - Dez 2025</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>ERP web Cooperasis em Ruby, React e GraphQL. Otimização PostgreSQL, API Java e Ruby.</p>
              </li>
              <li style={{ borderLeft: '2px solid var(--secondary-color)', paddingLeft: '1rem' }}>
                <p style={{ fontWeight: 600, color: '#fff' }}>Suporte Técnico</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>CES Sistemas (Out 2023 - Jun 2024)<br/>MGS Sistemas (Jan 2023 - Out 2024)</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
