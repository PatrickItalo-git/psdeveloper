import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const move = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'power2.out' });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.38, ease: 'power2.out' });
    };

    const grow = () => gsap.to(ring, { scale: 2.2, opacity: 0.5, duration: 0.3, ease: 'power2.out' });
    const shrink = () => gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });

    window.addEventListener('mousemove', move);

    const addListeners = () => {
      document.querySelectorAll('a, button, .service-card, .project-item, .glass-card').forEach(el => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
