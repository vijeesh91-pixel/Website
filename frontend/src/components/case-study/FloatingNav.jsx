import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { projects } from '../../content/projects';

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 12 }, transition: { duration: .25, ease: 'easeOut' } };

export const FloatingNav = ({ current }) => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', setProgress);
  const index = projects.findIndex(p => p.id === current);
  const prev = projects[(index + projects.length - 1) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const toTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return <AnimatePresence>
    {progress > .25 && <motion.nav className="floating-nav" aria-label="Page shortcuts" data-testid="floating-nav" {...fade}>
      <AnimatePresence>
        {progress > .9 && <motion.div className="floating-group" key="projects" {...fade}>
          <Link to={prev.path} className="floating-btn" aria-label={`Previous project: ${prev.title}`} title={`Previous: ${prev.title}`} data-testid="floating-prev-project"><ChevronLeft size={22} strokeWidth={1.7} /></Link>
          <Link to={next.path} className="floating-btn" aria-label={`Next project: ${next.title}`} title={`Next: ${next.title}`} data-testid="floating-next-project"><ChevronRight size={22} strokeWidth={1.7} /></Link>
        </motion.div>}
      </AnimatePresence>
      <Link to="/portfolio" className="floating-btn" aria-label="Back to Work" title="Back to Work" data-testid="floating-back-to-work"><LayoutGrid size={22} strokeWidth={1.7} /></Link>
      <button type="button" className="floating-btn" onClick={toTop} aria-label="Scroll to top" title="Scroll to top" data-testid="floating-scroll-top"><ArrowUp size={22} strokeWidth={1.7} /></button>
    </motion.nav>}
  </AnimatePresence>;
};
