import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5546999011726?text=Olá%20Patrick!%20Gostaria%20de%20fazer%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      whileHover={{ y: -2 }}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '52px',
        height: '52px',
        backgroundColor: 'var(--accent-color)',
        color: '#ffffff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
        zIndex: 9000,
      }}
    >
      <MessageCircle size={22} strokeWidth={1.75} />
    </motion.a>
  );
};

export default WhatsAppButton;
