import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../content/projects';

const labels = { vox: 'Vox Case Study', poonch: 'Poonch Case Study', oddup: 'Oddup Case Study', print: 'Digital & Branding' };

export const NextProject = ({ current, className = 'case-back' }) => {
  const next = projects[(projects.findIndex(p => p.id === current) + 1) % projects.length];
  return <span className="next-project">
    <Link to={next.path} className={`${className} next-project-link`} data-testid={`${current}-next-project`}>Next Project: {labels[next.id]} <ArrowRight size={14} aria-hidden="true" /></Link>
    <span className="next-preview" aria-hidden="true" data-testid={`${current}-next-preview`}>
      <img src={next.image} alt="" loading="lazy" decoding="async" />
      <span className="next-preview-meta"><small>{next.category}</small><strong>{next.title}</strong></span>
    </span>
  </span>;
};
