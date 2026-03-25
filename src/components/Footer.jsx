import { motion } from 'framer-motion';
import { MessageSquare, Linkedin, Instagram, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" style={{
      padding: '100px 20px 40px',
      background: 'linear-gradient(to top, rgba(240, 19, 30, 0.05), transparent)',
      borderTop: '1px solid rgba(240, 19, 30, 0.1)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Vamos criar algo <span style={{ color: 'var(--primary-color)' }}>extraordinário?</span></h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Sem enrolação. Seja para um projeto novo ou uma parceria, estou pronto para TRANSFORMAR seu SONHO em REALIDADE.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <SocialLink icon={<MessageSquare />} label="WhatsApp" href="https://wa.me/5546999011726" />
          <SocialLink icon={<Linkedin />} label="LinkedIn" href="https://www.linkedin.com/in/patricksouzadev/" />
          <SocialLink icon={<Instagram />} label="Instagram" href="https://www.instagram.com/peterp.dev?igsh=a2RhZmVpZm40Zmth&utm_source=qr" />
          <SocialLink icon={<Mail />} label="E-mail" href="mailto:PATRICK.SOUZA.DEV@GMAIL.COM" />
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} Patrick Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, label, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, color: 'var(--primary-color)' }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem',
      color: 'var(--text-secondary)',
      transition: 'color 0.3s'
    }}
  >
    <div style={{
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.03)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255,255,255,0.05)'
    }}>
      {icon}
    </div>
    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{label}</span>
  </motion.a>
);

export default Footer;
