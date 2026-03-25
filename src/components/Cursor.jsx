import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 9999 }}>
        {/* Main Nebula Glow */}
        <motion.div
  animate={{
    x: mousePosition.x - 100,
    y: mousePosition.y - 100,
  }}
  transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
  style={{
    position: 'absolute',
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(240, 19, 30, 0.2) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(15px)',
    mixBlendMode: 'screen',
    willChange: 'transform'
  }}
/>

        {/* Sharp Central Star */}
        <motion.div
  animate={{
    x: mousePosition.x - 4,
    y: mousePosition.y - 4,
  }}
  style={{
    position: 'absolute',
    width: '8px',
    height: '8px',
    background: '#fff',
    borderRadius: '50%',
    boxShadow: '0 0 10px #fff, 0 0 20px var(--primary-color)',
  }}
/>
      </div>
    </>
  );
};

export default Cursor;
