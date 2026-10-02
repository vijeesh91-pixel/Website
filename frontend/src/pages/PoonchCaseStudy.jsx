import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PawPrint } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CaseStudyImage, CaseStudyText } from '../components/case-study/CaseStudyBlocks';
import { poonchImages as images, poonchBranding, poonchCopy as copy } from '../content/poonch';
import { revealEase } from '../content/site';
import './PoonchCaseStudy.css';

export default function PoonchCaseStudy() {
  const heading = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, []);
  return <main className="case-page" data-testid="poonch-case-study">
    <motion.header className="case-header case-column" initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: revealEase }}>
      <Link to="/portfolio" className="case-back" data-testid="poonch-back-top"><ArrowLeft size={14} aria-hidden="true" /> Back to Work</Link>
      <div className="case-project-label" data-testid="poonch-project-label"><span className="case-project-icon" aria-hidden="true"><PawPrint size={22} strokeWidth={1.7} /></span><span>Poonch Mobile App</span></div>
      <h1 ref={heading} tabIndex={-1} data-testid="poonch-case-title">Driving Mobile Adoption Among Existing<br className="case-title-break" /> Website Users</h1>
    </motion.header>
    <CaseStudyImage image={images.hero} id="hero" hero />
    <CaseStudyText id="glance" title="At-A-Glance" paragraphs={copy.glance} major>
      <dl className="case-facts" data-testid="poonch-case-facts">
        <div><dt data-testid="case-project-label-meta">Project</dt><dd data-testid="case-project-value">Poonch Mobile App</dd></div>
        <div><dt data-testid="case-scope-label">Scope</dt><dd data-testid="case-scope-value">Mobile experience, branding &amp; packaging</dd></div>
        <div><dt data-testid="case-category-label">Category</dt><dd data-testid="case-category-value">Pet food delivery</dd></div>
      </dl>
    </CaseStudyText>
    <CaseStudyText id="mobile" title="Mobile Application" paragraphs={copy.mobile} major />
    <CaseStudyText id="onboarding" title="Welcome & Onboarding" paragraphs={copy.onboarding}>
      <h4 className="case-goal-title" data-testid="case-goal-heading">The Goal</h4>
      <p data-testid="case-goal-description">Understand the user, then personalize the experience around them.</p>
    </CaseStudyText>
    <CaseStudyImage image={images.onboarding} id="onboarding" />
    <CaseStudyText id="discover" title="Discover & Personalize" paragraphs={copy.discover} />
    <CaseStudyImage image={images.discover} id="discover" />
    <CaseStudyText id="browse" title="Browse Meals" paragraphs={copy.browse} />
    <CaseStudyText id="details" title="Meal Details" paragraphs={copy.details} />
    <CaseStudyImage image={images.meals} id="meals" />
    <CaseStudyText id="checkout" title="Checkout" paragraphs={copy.checkout} />
    <CaseStudyImage image={images.checkout} id="checkout" />
    <CaseStudyText id="branding" title="Packaging & Brand Experience" paragraphs={copy.branding} major />
    <div className="case-branding-stack case-column" data-testid="poonch-branding-gallery">
      {poonchBranding.map(image => <img key={image.id} src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" data-testid={`case-branding-${image.id}`} />)}
    </div>
    <CaseStudyText id="outcome" title="Final Outcome" paragraphs={copy.outcome} major />
    <footer className="case-footer case-column"><Link to="/portfolio" className="case-back" data-testid="poonch-back-bottom"><ArrowLeft size={14} aria-hidden="true" /> Back to Work</Link></footer>
  </main>;
}