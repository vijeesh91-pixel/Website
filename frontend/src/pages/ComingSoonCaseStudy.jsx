import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { revealEase } from '../content/site';
import './ComingSoon.css';

const illustration = 'https://customer-assets-lqy194kg.emergentagent.net/job_portfolio-landing-96/artifacts/4afc6791e6e0a3ab_404%20image.webp';

export default function ComingSoonCaseStudy({ project }) {
  const heading = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, [project]);
  return (
    <main className="coming-soon-page" data-testid={`${project.toLowerCase().replace(/[^a-z]+/g, '-')}-coming-soon`}>
      <motion.div className="coming-soon-column" initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: revealEase }}>
        <p className="coming-soon-eyebrow" data-testid="coming-soon-project">{project} CASE STUDY</p>
        <h1 ref={heading} tabIndex={-1} className="coming-soon-heading" data-testid="coming-soon-heading">Oops!</h1>
        <img className="coming-soon-illustration" src={illustration} alt="Illustration of a relaxed character lounging on 404 blocks next to an Under Update sign and a sleeping dog" width="650" height="420" data-testid="coming-soon-illustration" />
        <p className="coming-soon-description" data-testid="coming-soon-description">This page is under a <span className="coming-soon-highlight">minor update</span>. Nothing serious.<br />Just a few pixels having an existential crisis.</p>
        <div className="coming-soon-links" data-testid="coming-soon-links">
          <Link to="/portfolio" className="coming-soon-link" data-testid="coming-soon-back-work"><ArrowLeft size={14} aria-hidden="true" /> Back to work</Link>
          <span className="coming-soon-divider" aria-hidden="true">|</span>
          <Link to="/portfolio/contact" className="coming-soon-link" data-testid="coming-soon-contact">Contact</Link>
        </div>
      </motion.div>
    </main>
  );
}
