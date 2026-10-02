import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { site, revealEase } from '../content/site';

export const Portfolio = ({ notFound = false }) => {
  const reduced = useReducedMotion();
  return (
    <main className="portfolio-page" data-testid="portfolio-page">
      <header className="portfolio-header">
        <Link to="/" className="monogram" aria-label="Vijeesh — Home" data-testid="monogram-home-link">
          <svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M7 9H15L21 26L27 9H35L24 33H17L7 9Z" fill="#f3cd65" /></svg>
        </Link>
        <Link to="/" className="back-link" data-testid="back-home-link"><ArrowLeft size={16} /> Back to home</Link>
      </header>
      <section className="portfolio-main" aria-label="Portfolio introduction">
        <motion.div className="portfolio-copy" initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, ease: revealEase }}>
          <p className="eyebrow" data-testid="portfolio-eyebrow">{notFound ? 'A SMALL DETOUR' : 'THE PORTFOLIO'}</p>
          <h1 data-testid="portfolio-heading">{notFound ? <>Not this way.<span>Let’s head home.</span></> : <>A closer look.<span>Coming soon.</span></>}</h1>
          <p className="portfolio-description" data-testid="portfolio-description">{notFound ? 'This page isn’t here. Let’s get you back to the beginning.' : 'A space for the work, the thinking, and everything in between. Selected projects will be shared here soon.'}</p>
          <Button asChild className="return-button"><Link to="/" data-testid="return-home-button">Back to the view <ArrowUpRight size={17} /></Link></Button>
        </motion.div>
        <motion.div className="portfolio-art" initial={reduced ? false : { opacity: 0, y: 35, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: 3 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: .15, ease: revealEase }}>
          <img src={site.background} alt="An illustrated autumn walk through a colorful coastal town" width="2000" height="1500" data-testid="portfolio-artwork" />
        </motion.div>
      </section>
      <div className="editorial-marquee" aria-label="Fintech, Design Systems, AI-Assisted Workflows" data-testid="specialties-marquee">
        <div className="marquee-track" aria-hidden="true">{[0, 1].map(copy => <div className="marquee-set" key={copy}>{[0, 1].map(set => <span className="marquee-set" key={set}><span>Fintech</span><b>✳</b><span>Design Systems</span><b>✳</b><span>AI-Assisted Workflows</span><b>✳</b></span>)}</div>)}</div>
      </div>
      <footer className="portfolio-footer"><span data-testid="portfolio-owner">{site.name}</span><span data-testid="portfolio-copyright">© {new Date().getFullYear()} · Thoughtfully designed.</span></footer>
    </main>
  );
};