import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { NameArtwork } from '../components/NameArtwork';
import { ResumeDownload } from '../components/ResumeDownload';
import { site, revealEase } from '../content/site';
import { useLandingScroll } from '../hooks/useLandingScroll';

export const Landing = () => {
  const landingRef = useRef(null);
  useLandingScroll(landingRef, false);
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 35, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 35, damping: 25 });
  const entrance = delay => ({ initial: reduced ? false : { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease: revealEase } });

  const moveScene = event => {
    if (reduced || event.pointerType !== 'mouse') return;
    mouseX.set((event.clientX / window.innerWidth - 0.5) * -9);
    mouseY.set((event.clientY / window.innerHeight - 0.5) * -7);
  };

  return (
    <main ref={landingRef} className="landing" data-testid="landing-page" data-lenis-prevent onPointerMove={moveScene} onPointerLeave={() => { mouseX.set(0); mouseY.set(0); }}>
      <motion.div className="scene" style={{ x, y }} aria-hidden="true">
        <motion.img className="scene-image" src={site.background} alt="" width="2000" height="1500" fetchPriority="high" draggable="false"
          initial={reduced ? false : { scale: 1.035 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: revealEase }} />
      </motion.div>
      <div className="hero-content">
        <NameArtwork />
        <motion.p {...entrance(0.75)} className="specialties" data-testid="designer-specialties">
          <span>Fintech</span><span className="specialty-dot" aria-hidden="true">•</span><span>Design Systems</span><span className="specialty-dot" aria-hidden="true">•</span><span>AI-Assisted Workflows</span>
        </motion.p>
        <motion.nav {...entrance(0.95)} className="hero-actions" aria-label="Explore and connect" data-testid="hero-actions">
          <Button asChild className="hero-button portfolio-button"><Link to={site.portfolioPath} data-testid="portfolio-cta">Portfolio</Link></Button>
          <ResumeDownload testId="resume-cta" className="hero-button resume-button" icon={false}>Resume</ResumeDownload>
          <Button asChild className="hero-button contact-button"><a href={`tel:${site.phone}`} aria-label="Call Vijeesh" data-testid="contact-cta"><Phone aria-hidden="true" /></a></Button>
        </motion.nav>
      </div>
      <motion.div {...entrance(1.4)} className="portfolio-cue-wrap">
        <Link to={site.portfolioPath} className="portfolio-cue" data-testid="portfolio-bottom-link">
          <span>Portfolio</span>
          <svg width="70" height="24" viewBox="0 0 70 24" fill="none" aria-hidden="true"><path d="M3 5L35 17L67 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M3 11L35 23L67 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        </Link>
      </motion.div>
    </main>
  );
};