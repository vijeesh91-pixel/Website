import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioSidebar } from '../components/portfolio/PortfolioSidebar';
import { ResumeDownload } from '../components/ResumeDownload';
import { CopyContact } from '../components/CopyContact';
import { profileAssets, socialLinks } from '../content/profile';
import { site, revealEase } from '../content/site';
import './Portfolio.css';
import './PersonalPages.css';

export default function ContactPage() {
  const heading = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, []);
  return <div className="work-shell contact-shell" data-testid="contact-page">
    <PortfolioSidebar active="contact" />
    <motion.main className="work-content contact-main" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, ease: revealEase }}>
      <div className="contact-content">
        <h1 ref={heading} tabIndex={-1} data-testid="contact-heading">Let’s Design Together!</h1>
        <p className="contact-introduction" data-testid="contact-introduction">Whether you have a project in mind, an opportunity to discuss, or simply want to connect, my inbox is always open.</p>
        <div className="contact-methods">
          <div className="contact-method"><a href={`mailto:${site.email}`} data-testid="contact-email">{site.email}</a><CopyContact value={site.email} label="email address" id="email" /></div>
          <span className="contact-divider" aria-hidden="true">•</span>
          <div className="contact-method"><a href={`tel:${site.phone}`} data-testid="contact-phone">{site.phone}</a><CopyContact value={site.phone} label="phone number" id="phone" /></div>
        </div>
        <section className="contact-socials" aria-labelledby="explore-more-heading">
          <h2 id="explore-more-heading" data-testid="explore-more-heading">Explore more</h2>
          <div className="social-links">{socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" data-testid={`social-${link.label.toLowerCase()}`}>
            {link.label}<ArrowUpRight size={20} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
          </a>)}</div>
        </section>
        <section className="contact-download" aria-labelledby="download-heading"><h2 id="download-heading" data-testid="download-heading">Download</h2><ResumeDownload testId="contact-resume-download">Resume</ResumeDownload></section>
      </div>
      <img className="contact-portrait" src={profileAssets.portrait} alt="Illustration of Vijeesh smiling in a red shirt" width="1819" height="1048" draggable="false" data-testid="contact-portrait" />
      <footer className="contact-footer" data-testid="contact-copyright">© {new Date().getFullYear()} {site.name} · All rights reserved.</footer>
    </motion.main>
  </div>;
}