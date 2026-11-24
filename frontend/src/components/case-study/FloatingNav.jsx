import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, LayoutGrid } from 'lucide-react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';

export const FloatingNav = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollYProgress, 'change', value => setVisible(value > .25));
  const toTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return <AnimatePresence>
    {visible && <motion.nav className="floating-nav" aria-label="Page shortcuts" data-testid="floating-nav"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: .25, ease: 'easeOut' }}>
      <Link to="/portfolio" className="floating-btn" aria-label="Back to Work" title="Back to Work" data-testid="floating-back-to-work"><LayoutGrid size={18} strokeWidth={1.6} /></Link>
      <button type="button" className="floating-btn" onClick={toTop} aria-label="Scroll to top" title="Scroll to top" data-testid="floating-scroll-top"><ArrowUp size={18} strokeWidth={1.6} /></button>
    </motion.nav>}
  </AnimatePresence>;
};
