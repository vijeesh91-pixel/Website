import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../../content/projects';

const labels = { vox: 'Vox Case Study', poonch: 'Poonch Case Study', oddup: 'Oddup Case Study', print: 'Digital & Branding' };

export const NextProject = ({ current, className = 'case-back', direction = 'next' }) => {
  const prev = direction === 'prev';
  const step = prev ? projects.length - 1 : 1;
  const target = projects[(projects.findIndex(p => p.id === current) + step) % projects.length];
  return <span className="next-project">
    <Link to={target.path} className={`${className} next-project-link ${prev ? 'prev-project-link' : ''}`} data-testid={`${current}-${direction}-project`}>
      {prev && <ArrowLeft size={14} aria-hidden="true" />}{prev ? 'Previous' : 'Next'} Project: {labels[target.id]}{!prev && <ArrowRight size={14} aria-hidden="true" />}
    </Link>
    <span className="next-preview" aria-hidden="true" data-testid={`${current}-${direction}-preview`}>
      <img src={target.image} alt="" loading="lazy" decoding="async" />
      <span className="next-preview-meta"><small>{target.category}</small><strong>{target.title}</strong></span>
    </span>
  </span>;
};

export const ProjectNav = ({ current, className }) => <>
  <NextProject current={current} className={className} direction="prev" />
  <span aria-hidden="true">|</span>
  <NextProject current={current} className={className} />
</>;
