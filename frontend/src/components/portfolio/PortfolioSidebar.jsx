import { Link } from 'react-router-dom';
import { portfolioLogo } from '../../content/projects';
import { site } from '../../content/site';

export const PortfolioSidebar = ({ onWork }) => (
  <aside className="work-sidebar" data-testid="portfolio-sidebar">
    <Link to="/" className="work-logo" aria-label={`${site.name} — Home`} data-testid="portfolio-logo-home">
      <img src={portfolioLogo} alt={site.name} width="594" height="249" fetchPriority="high" draggable="false" data-testid="portfolio-logo" />
    </Link>
    <nav className="work-navigation" aria-label="Portfolio sections" data-testid="portfolio-navigation">
      <Link to="/" className="work-nav-item" data-testid="nav-home"><span className="nav-marker" aria-hidden="true" /><span>Home</span></Link>
      <button type="button" className="work-nav-item is-active" aria-current="page" onClick={onWork} data-testid="nav-work"><span className="nav-marker" aria-hidden="true" /><span>Work</span></button>
      {['Writing', 'Patent', 'Profile', 'Contact'].map(label => (
        <button type="button" className="work-nav-item is-upcoming" key={label} aria-disabled="true" title={`${label} content will be added later`} data-testid={`nav-${label.toLowerCase()}`}>
          <span className="nav-marker" aria-hidden="true" /><span>{label}</span>
        </button>
      ))}
    </nav>
  </aside>
);