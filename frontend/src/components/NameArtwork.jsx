import { motion, useReducedMotion } from 'framer-motion';
import { site, revealEase } from '../content/site';

const lines = [{ top: 0, height: 114 }, { top: 114, height: 95 }, { top: 209, height: 90 }];

export const NameArtwork = () => {
  const reduced = useReducedMotion();
  return (
    <h1 className="name-artwork" data-testid="designer-name">
      <span className="sr-only">{site.name}</span>
      {lines.map((line, index) => (
        <span key={index} aria-hidden="true" className="name-line" style={{ top: `${line.top / 299 * 100}%`, height: `${line.height / 299 * 100}%` }}>
          <motion.span className="name-line-inner"
            initial={reduced ? false : { y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.18 + index * 0.14, ease: revealEase }}>
            <img src={site.title} alt="" width="708" height="299" draggable="false"
              style={{ top: `${-line.top / line.height * 100}%` }} />
          </motion.span>
        </span>
      ))}
    </h1>
  );
};