import { Link } from 'react-router-dom';
import { portfolioLogo } from '../../content/projects';
import { site } from '../../content/site';

export const PortfolioSidebar = ({ onWork, active = 'work' }) => (
  <aside className="work-sidebar" data-testid="portfolio-sidebar">
    <Link to="/" className="work-logo" aria-label={`${site.name} — Home`} data-testid="portfolio-logo-home">
      <img src={portfolioLogo} alt={site.name} width="594" height="249" fetchPriority="high" draggable="false" data-testid="portfolio-logo" />
    </Link>
    <nav className="work-navigation" aria-label="Portfolio sections" data-testid="portfolio-navigation">
      <Link to="/" className="work-nav-item" data-testid="nav-home"><span className="nav-marker" aria-hidden="true" /><span>Home</span></Link>
      {['Work', 'Writing', 'Patent', 'Profile', 'Contact'].map(label => {
        const id = label.toLowerCase();
        const className = `work-nav-item ${active === id ? 'is-active' : ''}`;
        const contents = <><span className="nav-marker" aria-hidden="true" /><span>{label}</span></>;
        return id === 'work' && active === 'work'
          ? <button key={id} type="button" className={className} aria-current="page" onClick={onWork} data-testid="nav-work">{contents}</button>
          : <Link key={id} to={id === 'work' ? '/portfolio' : `/portfolio/${id}`} className={className} aria-current={active === id ? 'page' : undefined} data-testid={`nav-${id}`}>{contents}</Link>;
      })}
    </nav>
  </aside>
);