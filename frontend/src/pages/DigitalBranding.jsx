import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { BrandingSection } from '../components/case-study/BrandingGallery';
import { brandingAssets, brandingCopy, logoGallery, brandGalleries, printGallery } from '../content/branding';
import { socialLinks } from '../content/profile';
import { revealEase } from '../content/site';
import { ZoomableImage } from '../components/case-study/ImageLightbox';
import { FloatingNav } from '../components/case-study/FloatingNav';
import { ProjectNav } from '../components/case-study/NextProject';
import './DigitalBranding.css';

export default function DigitalBranding() {
  const heading = useRef(null);
  const reduced = useReducedMotion();
  const behance = socialLinks.find(link => link.label === 'Behance');
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, []);

  return <main className="branding-page" data-testid="digital-branding-page">
    <motion.header className="branding-header branding-copy"
      initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6, ease: revealEase }}>
      <Link to="/portfolio" className="branding-back" aria-label="Back to Work" data-testid="branding-back-top">
        <ArrowLeft size={14} aria-hidden="true" /> Back
      </Link>
      <div className="branding-project-label" data-testid="branding-project-label">
        <img src={brandingAssets.icon} alt="" width="37" height="37" data-testid="branding-project-icon" />
        <span>Digital &amp; Branding</span>
      </div>
      <h1 ref={heading} tabIndex={-1} data-testid="branding-title">{brandingCopy.intro}</h1>
    </motion.header>

    <figure className="branding-cover branding-wide" data-testid="branding-cover">
      <ZoomableImage image={{ src: brandingAssets.cover, alt: 'A selection of Oddup digital campaign advertisements', width: 1179, height: 587 }} testId="branding-cover-image" hero />
    </figure>

    <BrandingSection id="logos" title="Logo Space" description={brandingCopy.logos} galleries={[logoGallery]} />
    <BrandingSection id="brands" title="Brand Space" description={brandingCopy.brands} galleries={brandGalleries} />
    <BrandingSection id="print" title="Print Space" description={brandingCopy.print} galleries={[printGallery]} />

    <footer className="branding-footer branding-wide" data-testid="branding-footer">
      <a className="branding-explore" href={behance.href} target="_blank" rel="noopener noreferrer" data-testid="branding-explore-more">
        Explore more <ArrowUpRight size={20} aria-hidden="true" />
      </a>
      <div className="branding-nav">
        <ProjectNav current="print" className="branding-back" />
      </div>
    </footer>
    <FloatingNav />
  </main>;
}