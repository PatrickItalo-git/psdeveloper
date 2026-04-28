import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { gsap } from 'gsap';

const technologies = [
  'HTML', 'CSS', 'JavaScript', 'React JS', 'React Native', 
  'Ruby', 'Java', 'Node.js', 'Firebase', 'GraphQL',
  'Git', 'GitHub', 'SQL', 'NoSQL', 'DevOps', 'Ubuntu', 'PostgreSQL'
];

const Tech = () => {
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];
  const animRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Live GSAP Showcase Animation
      gsap.to('.gsap-box', {
        scale: 0.15,
        rotation: 180,
        borderRadius: '50%',
        opacity: 0.3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        duration: 1.2,
        stagger: {
          amount: 1.8,
          grid: [5, 5],
          from: 'center'
        }
      });
    }, animRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="tech" style={{ paddingBlock: '120px', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* GSAP Feature Section */}
        <div className="gsap-feature" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
          marginBottom: '6rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
              <Sparkles size={16} />
              Motion Design & Interatividade
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.04em', color: 'var(--text-primary)' }}>
              Experiências visuais de <span className="text-accent">alto nível</span> com GSAP.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '500px' }}>
              Utilizo o <strong>GSAP (GreenSock Animation Platform)</strong>, amplamente reconhecida como a melhor e mais robusta ferramenta do mercado para criação de animações web e layouts avançados.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '500px' }}>
              Isso me permite transformar interfaces estáticas em experiências imersivas, garantindo transições perfeitamente fluidas e alta performance em qualquer dispositivo.
            </p>
          </div>

          <div ref={animRef} style={{ 
            width: '100%', 
            aspectRatio: '4/3', 
            borderRadius: '2px', 
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--gray-dark)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
            padding: '2rem'
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(5, 1fr)', 
              gap: 'clamp(0.5rem, 2vw, 1.25rem)' 
            }}>
              {Array.from({ length: 25 }).map((_, i) => (
                <div 
                  key={i} 
                  className="gsap-box" 
                  style={{ 
                    width: 'clamp(16px, 4vw, 24px)', 
                    height: 'clamp(16px, 4vw, 24px)', 
                    backgroundColor: 'var(--accent-color)', 
                    borderRadius: '2px' 
                  }} 
                />
              ))}
            </div>
            
            <div style={{ 
              fontSize: '0.7rem', 
              color: 'var(--text-secondary)', 
              fontWeight: 700, 
              letterSpacing: '0.25em',
              textTransform: 'uppercase'
            }}>
              Live GSAP Stagger
            </div>
          </div>
        </div>

        {/* Tech Ticker */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '5rem',
          paddingTop: '4rem',
          borderTop: '1px solid var(--border-color)'
        }}>
          <div style={{ flexShrink: 0 }}>
            <h2 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gray-medium)' }}>STACK</h2>
          </div>

          <div style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}>
            <motion.div
              animate={{ x: ['0%', '-33.33%'] }}
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 25
              }}
              style={{
                display: 'flex',
                gap: '5rem',
                alignItems: 'center',
                width: 'max-content'
              }}
            >
              {duplicatedTechs.map((tech, idx) => (
                <div
                  key={`${tech}-${idx}`}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.1em'
                  }}
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .gsap-feature {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .gsap-feature > div:first-child {
            align-items: center;
          }
          .gsap-feature p {
            text-align: center;
          }
        }
        @media (max-width: 600px) {
          #tech > .container > div:last-child {
            flex-direction: column;
            gap: 2rem !important;
          }
        }
      ` }} />
    </section>
  );
};

export default Tech;
