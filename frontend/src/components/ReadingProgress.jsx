import { motion, useScroll, useSpring } from 'framer-motion';

export const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 34, restDelta: .001 });
  return <motion.div className="reading-progress" style={{ scaleX }} aria-hidden="true" data-testid="reading-progress-bar" />;
};
