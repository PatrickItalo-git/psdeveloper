import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5546999011726?text=Olá%20Patrick!%20Gostaria%20de%20fazer%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '65px',
        height: '65px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
        zIndex: 9000,
        textDecoration: 'none'
      }}
    >
      <MessageCircle size={34} />
      
      {/* Efeito Pulse */}
      <span style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '2px solid #25D366',
        animation: 'pulseWpp 2s infinite'
      }} />
      <style>{`
        @keyframes pulseWpp {
          0% { transform: scale(1); opacity: 0.8; border-width: 2px; }
          100% { transform: scale(1.6); opacity: 0; border-width: 0px; }
        }
      `}</style>
    </motion.a>
  );
};

export default WhatsAppButton;
