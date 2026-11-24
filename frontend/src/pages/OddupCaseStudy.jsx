import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { oddupMedia as m, oddupCopy as copy, oddupFacts, oddupFoundations, oddupIcon } from '../content/oddup';
import { revealEase } from '../content/site';
import './PoonchCaseStudy.css';
import './OddupCaseStudy.css';

const Para = ({ item, testId }) => typeof item === 'string'
  ? <p data-testid={testId}>{item}</p>
  : <p data-testid={testId}><strong>{item.strong}</strong>{item.rest}</p>;

const Section = ({ id, title, paragraphs, minor = false, children }) => {
  const reduced = useReducedMotion();
  const Heading = minor ? 'h3' : 'h2';
  return <motion.section className={`case-text oddup-text ${minor ? 'oddup-minor' : 'case-major'}`} aria-labelledby={`oddup-${id}-heading`} data-testid={`oddup-section-${id}`}
    initial={reduced ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .5, ease: revealEase }}>
    {title && <Heading id={`oddup-${id}-heading`} data-testid={`oddup-${id}-heading`}>{title}</Heading>}
    {paragraphs.map((item, i) => <Para key={i} item={item} testId={`oddup-${id}-paragraph-${i}`} />)}
    {children}
  </motion.section>;
};

const Media = ({ image, id, className = '' }) => <figure className={`oddup-media ${className}`} data-testid={`oddup-figure-${id}`}>
  <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" data-testid={`oddup-image-${id}`} />
</figure>;

const ViewVideo = ({ video, id, className = '' }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => { entry.isIntersecting ? el.play().catch(() => {}) : el.pause(); }, { threshold: .25 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <figure className={`oddup-media oddup-video ${className}`} data-testid={`oddup-figure-${id}`}>
    <video ref={ref} src={video.src} muted loop playsInline preload="metadata" aria-label={video.label} data-testid={`oddup-video-${id}`} />
  </figure>;
};

const Grid = ({ id, className, children }) => <div className={`oddup-grid ${className}`} data-testid={`oddup-grid-${id}`}>{children}</div>;

const Foundations = () => <ol className="oddup-foundations" data-testid="oddup-foundations">
  {oddupFoundations.map(([num, label]) => <li key={num} data-testid={`oddup-foundation-${num}`}><span>{num}</span><strong>{label}</strong></li>)}
</ol>;

const Facts = () => <dl className="case-facts oddup-facts" data-testid="oddup-case-facts">
  {oddupFacts.map(([label, values], i) => <div key={label}><dt data-testid={`oddup-fact-label-${i}`}>{label}</dt>{values.map((v, j) => <dd key={v} data-testid={`oddup-fact-value-${i}-${j}`}>{v}</dd>)}</div>)}
</dl>;

export default function OddupCaseStudy() {
  const heading = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, []);
  return <main className="case-page oddup-page" data-testid="oddup-case-study">
    <motion.header className="case-header case-column" initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: revealEase }}>
      <Link to="/portfolio" className="case-back" data-testid="oddup-back-top"><ArrowLeft size={14} aria-hidden="true" /> Back</Link>
      <div className="case-project-label" data-testid="oddup-project-label"><span className="case-project-icon oddup-icon" aria-hidden="true"><img src={oddupIcon} alt="" width="38" height="38" data-testid="oddup-project-icon" /></span><span>Oddup Web App</span></div>
      <h1 ref={heading} tabIndex={-1} data-testid="oddup-case-title">Oddup Design System to Reduce Design Time by <em>40%</em> and <em>2X</em> Faster Product Revamp.</h1>
    </motion.header>
    <figure className="case-image case-hero-image" data-testid="oddup-figure-hero"><img src={m.hero.src} alt={m.hero.alt} width={m.hero.width} height={m.hero.height} fetchPriority="high" decoding="async" data-testid="oddup-image-hero" /></figure>
    <Section id="glance" title="At-A-Glance" paragraphs={copy.glance}><Facts /></Section>
    <Section id="challenges" title="Challenges" paragraphs={copy.challenges} />
    <Section id="approach" title="Approach" paragraphs={copy.approach} />
    <Media image={m.brand} id="brand" className="oddup-bleed" />
    <Section id="process" title="Process" paragraphs={copy.process} />
    <Media image={m.process} id="process" className="oddup-wide" />
    <Section id="foundation" title="Building a strong foundation" paragraphs={copy.foundation} minor><Foundations /></Section>
    <Section id="components-intro" paragraphs={copy.components} minor />
    <Section id="colors" title="Colors" paragraphs={copy.colors} />
    <Grid id="colors" className="oddup-stack"><Media image={m.palette} id="palette" /><Media image={m.colorToken} id="color-token" /></Grid>
    <Section id="typography" title="Typography" paragraphs={copy.typography} />
    <Grid id="typography" className="oddup-two"><Media image={m.typeFamily} id="type-family" /><Media image={m.typeGlyphs} id="type-glyphs" /></Grid>
    <Grid id="typography-usage" className="oddup-stack"><Media image={m.typeHeading} id="type-heading" /><Media image={m.typeBody} id="type-body" /></Grid>
    <Section id="spacing" title="Spacing" paragraphs={copy.spacing} />
    <Grid id="spacing" className="oddup-two"><Media image={m.spaceScale} id="space-scale" /><Media image={m.spaceUsage} id="space-usage" /></Grid>
    <Section id="radius" title="Corner Radius" paragraphs={copy.radius} />
    <Grid id="radius" className="oddup-two oddup-radius">
      <div className="oddup-col"><Media image={m.radiusScale} id="radius-scale" /><Media image={m.radiusCard} id="radius-card" /></div>
      <ViewVideo video={m.radiusVideo} id="radius" className="oddup-fill" />
    </Grid>
    <Section id="icons" title="Icons" paragraphs={copy.icons} />
    <Grid id="icons" className="oddup-two"><Media image={m.iconGrid} id="icon-grid" /><Media image={m.iconSet} id="icon-set" /></Grid>
    <Section id="tokens" title="Tokens" paragraphs={copy.tokens} />
    <Media image={m.tokenModes} id="token-modes" className="oddup-text-width" />
    <Section id="tiers" title="Three Tier System" paragraphs={copy.tiers} minor />
    <Media image={m.tokenTiers} id="token-tiers" className="oddup-wide" />
    <ViewVideo video={m.modesVideo} id="modes" className="oddup-bleed" />
    <Section id="components" title="Components" paragraphs={copy.componentLibrary} />
    <Grid id="components-top" className="oddup-tabs"><Media image={m.tabs} id="tabs" /><Media image={m.sidebar} id="sidebar" /></Grid>
    <Grid id="components-mid" className="oddup-notify">
      <div className="oddup-col"><Media image={m.dropdown} id="dropdown" /><Media image={m.avatars} id="avatars" /></div>
      <Media image={m.notifications} id="notifications" />
    </Grid>
    <Media image={m.charts} id="charts" className="oddup-wide" />
    <Section id="metrics" title="Success Metrics" paragraphs={copy.metrics} />
    <Grid id="metrics" className="oddup-two">
      <div className="oddup-col"><Media image={m.metricTime} id="metric-time" /><Media image={m.metricExecution} id="metric-execution" /></div>
      <div className="oddup-col"><Media image={m.metricWeeks} id="metric-weeks" /><Media image={m.metricChanges} id="metric-changes" /></div>
    </Grid>
    <footer className="case-footer case-column oddup-footer">
      <Link to="/portfolio" className="case-back" data-testid="oddup-back-bottom"><ArrowLeft size={14} aria-hidden="true" /> Back</Link>
      <span aria-hidden="true">|</span>
      <Link to="/portfolio/vox" className="case-back oddup-next" data-testid="oddup-next-project">Next Project: Vox Case Study <ArrowRight size={14} aria-hidden="true" /></Link>
    </footer>
  </main>;
}
