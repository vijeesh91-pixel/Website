import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PortfolioSidebar } from '../components/portfolio/PortfolioSidebar';
import { ProjectCarousel } from '../components/portfolio/ProjectCarousel';
import { useWorkCarousel } from '../hooks/useWorkCarousel';
import { revealEase } from '../content/site';
import './Portfolio.css';

export const Portfolio = () => {
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const reduced = useReducedMotion();
  const carousel = useWorkCarousel(contentRef);

  useEffect(() => { titleRef.current?.focus({ preventScroll: true }); }, []);

  return (
    <div className="work-shell" data-testid="portfolio-page">
      <PortfolioSidebar onWork={() => carousel.select(0)} />
      <motion.main ref={contentRef} className="work-content" data-testid="work-content" data-lenis-prevent-wheel
        initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: revealEase }}>
        <header className="work-intro">
          <h1 ref={titleRef} tabIndex={-1} data-testid="work-heading">Work,</h1>
          <p data-testid="work-introduction">Selected professional projects across product design, UX, and digital experiences.</p>
        </header>
        <ProjectCarousel carousel={carousel} />
      </motion.main>
    </div>
  );
};