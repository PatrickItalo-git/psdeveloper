import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5546999011726?text=Olá%20Patrick!%20Gostaria%20de%20fazer%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        backgroundColor: 'var(--text-primary)',
        color: 'var(--bg-color)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        zIndex: 9000,
        textDecoration: 'none',
        border: '1px solid var(--border-color)'
      }}
    >
      <MessageCircle size={28} />
      
      {/* Subtle Border Glow */}
      <span style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid var(--text-primary)',
        animation: 'pulseMinimal 3s infinite'
      }} />
      <style>{`
        @keyframes pulseMinimal {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </motion.a>
  );
};

export default WhatsAppButton;
