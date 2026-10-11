import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PortfolioSidebar } from '../components/portfolio/PortfolioSidebar';
import { WritingContent, PatentContent } from '../components/portfolio/PublicationContent';
import { revealEase } from '../content/site';
import './Portfolio.css';
import './Publications.css';

export default function PublicationPage({ section }) {
  const heading = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, [section]);
  return (
    <div className="work-shell publication-shell" data-testid={`${section}-page`}>
      <PortfolioSidebar active={section} />
      <motion.main key={section} className="work-content publication-main" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, ease: revealEase }}>
        <div className="publication-container">
          <header className="work-intro">
            <h1 ref={heading} tabIndex={-1} data-testid={`${section}-heading`}>{section === 'writing' ? 'Writing,' : 'Patent'}</h1>
            <p data-testid={`${section}-introduction`}>{section === 'writing' ? 'Thoughts, ideas, and perspectives on UX design, emerging technology, and the evolving role of designers.' : 'Product conceptualised and developed between 2014 and 2018, combining engineering, innovation, and sustainable technology.'}</p>
          </header>
          {section === 'writing' ? <WritingContent /> : <PatentContent />}
        </div>
      </motion.main>
    </div>
  );
}