import { useMemo, useEffect, useState } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';

const generateShadows = (count) => {
  let shadows = '';
  // Optimization: use fewer stars for performance
  const optimizedCount = Math.floor(count * 0.7); 
  for (let i = 0; i < optimizedCount; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 3000);
    shadows += `${x}px ${y}px rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})${i === optimizedCount - 1 ? '' : ', '}`;
  }
  return shadows;
};

const StarLayer = ({ count, speed, size }) => {
  const shadows = useMemo(() => generateShadows(count), [count]);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Transform velocity to scale and speed
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityScale = useTransform(smoothVelocity, [-2000, 2000], [5, 5], { clamp: false });
  const stretch = useTransform(smoothVelocity, [-3000, 3000], [1, 20]);
  const opacity = useTransform(smoothVelocity, [-3000, 0, 3000], [1, 0.4, 1]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <motion.div
        animate={{ y: [0, -2000] }}
        transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
        style={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          background: 'transparent', 
          boxShadow: shadows,
          scaleY: stretch,
          opacity: opacity
        }}
      />
      <motion.div
        animate={{ y: [0, -2000] }}
        transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
        style={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          background: 'transparent', 
          boxShadow: shadows, 
          position: 'absolute', 
          top: '2000px',
          scaleY: stretch,
          opacity: opacity
        }}
      />
    </div>
  );
};

const Starfield = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -3,
      pointerEvents: 'none',
      background: '#020205',
      overflow: 'hidden'
    }}>
      {/* Deep Space Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, #0a0a1a 0%, #020205 100%)',
        opacity: 0.8
      }} />

      <StarLayer count={200} speed={120} size={1} />
      <StarLayer count={75} speed={80} size={2} />
      <StarLayer count={20} speed={40} size={3} />
      
      {/* Decorative Nebula Clouds */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(240, 19, 30, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -2,
          willChange: 'transform'
        }}
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.12, 0.05],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '0%',
          right: '-10%',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(0, 51, 160, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: -2,
          willChange: 'transform'
        }}
      />
    </div>
  );
};

export default Starfield;
