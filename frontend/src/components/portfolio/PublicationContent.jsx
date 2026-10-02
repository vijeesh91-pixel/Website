import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { articles, mediumProfile, patent } from '../../content/publications';

export const OutboundLink = ({ href, children, className = '', testId, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className} data-testid={testId} aria-label={label}>
    {children}<ArrowUpRight aria-hidden="true" size={19} /><span className="sr-only"> (opens in a new tab)</span>
  </a>
);

export const WritingContent = () => (
  <>
    <Button asChild className="publication-button medium-button"><OutboundLink href={mediumProfile} testId="medium-profile-link">Medium</OutboundLink></Button>
    <section className="writing-grid" aria-label="Articles" data-testid="writing-articles">
      {articles.map(article => (
        <article className="writing-card" key={article.id} data-testid={`article-${article.id}`}>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="writing-image-link" aria-label={`Read ${article.title} (opens in a new tab)`} data-testid={`article-image-link-${article.id}`}>
            <img src={article.image} alt={article.alt} width="1347" height="799" decoding="async" data-testid={`article-image-${article.id}`} />
          </a>
          <div className="writing-caption"><h2 data-testid={`article-title-${article.id}`}>{article.title}</h2><span className="reading-time" data-testid={`article-time-${article.id}`}>{article.time}</span></div>
          <p className="writing-description" data-testid={`article-description-${article.id}`}>{article.description}</p>
          <OutboundLink href={article.url} className="explore-article" testId={`explore-${article.id}`} label={`Explore article: ${article.title} (opens in a new tab)`}>Explore article</OutboundLink>
        </article>
      ))}
    </section>
  </>
);

export const PatentContent = () => (
  <section className="patent-section" aria-label="Caspo patent" data-testid="patent-details">
    <nav className="patent-links patent-links-top" aria-label="Patent publications" data-testid="patent-links">
      {patent.links.map(link => <Button asChild key={link.label} className={`publication-button patent-button ${link.label === 'WIPO' ? 'wipo-button' : ''}`}><OutboundLink href={link.url} testId={`patent-link-${link.label.toLowerCase()}`} label={`View ${link.label} patent (opens in a new tab)`}>{link.label}</OutboundLink></Button>)}
    </nav>
    <img className="patent-banner" src={patent.image} alt="Caspo smart cooking system in an illustrated landscape with mountains, water, and renewable energy" width="2000" height="667" data-testid="patent-banner" />
    <div className="patent-information">
      <div className="patent-copy">
        <div className="patent-caption"><h2 data-testid="patent-title">{patent.title}</h2><span className="patent-years" data-testid="patent-years">{patent.years}</span></div>
        <p data-testid="patent-description">{patent.description}</p>
      </div>
    </div>
  </section>
);