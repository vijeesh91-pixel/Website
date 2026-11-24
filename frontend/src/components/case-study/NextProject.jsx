import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const order = [
  ['vox', '/portfolio/vox', 'Vox Case Study'],
  ['poonch', '/portfolio/poonch', 'Poonch Case Study'],
  ['oddup', '/portfolio/oddup', 'Oddup Case Study'],
  ['print', '/portfolio/print', 'Digital & Branding'],
];

export const NextProject = ({ current, className = 'case-back' }) => {
  const [, path, label] = order[(order.findIndex(([id]) => id === current) + 1) % order.length];
  return <Link to={path} className={`${className} next-project-link`} data-testid={`${current}-next-project`}>Next Project: {label} <ArrowRight size={14} aria-hidden="true" /></Link>;
};
