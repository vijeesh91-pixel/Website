import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { site } from '../content/site';

export const NotFound = () => (
  <main className="portfolio-page" data-testid="not-found-page">
    <section className="portfolio-main">
      <div className="portfolio-copy">
        <p className="eyebrow" data-testid="not-found-eyebrow">A SMALL DETOUR</p>
        <h1 data-testid="not-found-heading">Not this way.<span>Let’s head home.</span></h1>
        <p className="portfolio-description" data-testid="not-found-description">This page isn’t here. Let’s get you back to the beginning.</p>
        <Button asChild className="return-button"><Link to="/" data-testid="return-home-button">Back to the view <ArrowUpRight size={17} /></Link></Button>
      </div>
      <div className="portfolio-art"><img src={site.background} alt="An illustrated autumn walk through a coastal town" width="2000" height="1500" data-testid="not-found-artwork" /></div>
    </section>
  </main>
);