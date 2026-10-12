import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stack = [
  { group: 'Front-end', items: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'GSAP'] },
  { group: 'Back-end', items: ['Node.js', 'Ruby on Rails', 'Java', 'GraphQL', 'Firebase'] },
  { group: 'Dados', items: ['PostgreSQL', 'SQL', 'NoSQL'] },
  { group: 'Infra & Fluxo', items: ['Git', 'GitHub', 'DevOps', 'Ubuntu'] },
];

const Tech = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech .section-head > *', {
        scrollTrigger: { trigger: '.tech .section-head', start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.stack-col', {
        scrollTrigger: { trigger: '.stack-grid', start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="tech" ref={containerRef} className="tech container">
      <div className="section-head">
        <span className="eyebrow"><span className="num">05</span> Stack</span>
        <div>
          <h2>Ferramentas do <em>ofício</em></h2>
        </div>
      </div>

      <div className="stack-grid" style={{ display: 'grid', gridTemplateColumns: '220px repeat(4, 1fr)', gap: '2rem' }}>
        <div />
        {stack.map(({ group, items }) => (
          <div key={group} className="stack-col" style={{ borderTop: '1px solid var(--border-strong)', paddingTop: '1.25rem' }}>
            <span className="eyebrow" style={{ marginBottom: '1.25rem' }}>{group}</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {items.map((item) => (
                <li key={item} style={{ fontSize: '1rem' }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .stack-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 3rem !important; }
          .stack-grid > div:first-child { display: none; }
        }
      ` }} />
    </section>
  );
};

export default Tech;
