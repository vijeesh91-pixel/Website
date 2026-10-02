import { motion, useReducedMotion } from 'framer-motion';
import { revealEase } from '../../content/site';

export const CaseStudyText = ({ id, title, paragraphs, major = false, children }) => {
  const reduced = useReducedMotion();
  const Heading = major ? 'h2' : 'h3';
  return <motion.section className={`case-text ${major ? 'case-major' : ''}`} aria-labelledby={`case-${id}-heading`} data-testid={`case-section-${id}`}
    initial={reduced ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .5, ease: revealEase }}>
    <Heading id={`case-${id}-heading`} data-testid={`case-${id}-heading`}>{title}</Heading>
    {paragraphs.map((text, index) => <p key={index} data-testid={`case-${id}-paragraph-${index}`}>{text}</p>)}
    {children}
  </motion.section>;
};

export const CaseStudyImage = ({ image, id, hero = false }) => (
  <figure className={`case-image ${hero ? 'case-hero-image' : ''}`} data-testid={`case-figure-${id}`}>
    <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={hero ? 'eager' : 'lazy'} fetchPriority={hero ? 'high' : undefined} decoding="async" data-testid={`case-image-${id}`} />
  </figure>
);