import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      const id = Date.now();
      setBursts(prev => [...prev.slice(-5), { id, x: e.clientX, y: e.clientY }]);
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 150);
      setTimeout(() => {
        setBursts(prev => prev.filter(b => b.id !== id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleClick);
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
    scale: isClicking ? 1.5 : 1,
  }}
  transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
  style={{
    position: 'absolute',
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
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

        {/* Supernova Bursts */}
        <AnimatePresence>
          {bursts.map(burst => (
            <motion.div
              key={burst.id}
              initial={{ opacity: 1, scale: 0 }}
              animate={{ opacity: 0, scale: 4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: burst.y - 50,
                left: burst.x - 50,
                width: '100px',
                height: '100px',
                border: '2px solid rgba(124, 58, 237, 0.5)',
                borderRadius: '50%',
                boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
                pointerEvents: 'none',
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Cursor;
