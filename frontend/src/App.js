import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import { Landing } from './pages/Landing';
import { Portfolio } from './pages/Portfolio';
import { NotFound } from './pages/NotFound';
import PublicationPage from './pages/PublicationPage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import PoonchCaseStudy from './pages/PoonchCaseStudy';
import VoxCaseStudy from './pages/VoxCaseStudy';
import OddupCaseStudy from './pages/OddupCaseStudy';
import DigitalBranding from './pages/DigitalBranding';
import { ReadingProgress } from './components/ReadingProgress';
import './App.css';
import { trackEvent } from './lib/analytics';

function SiteRoutes() {
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
  const normalizedPath = pathname === '/'
    ? '/'
    : pathname.replace(/\/+$/, '');

  const canonicalUrl =
    `https://www.vijeeshthattantevalappil.site${normalizedPath}`;

  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', canonicalUrl);
}, [pathname]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const sectionTitle = { '/portfolio': 'Work', '/portfolio/writing': 'Writing', '/portfolio/patent': 'Patent', '/portfolio/profile': 'Profile', '/portfolio/contact': 'Contact', '/portfolio/poonch': 'Poonch Case Study', '/portfolio/vox': 'Vox Booking Experience', '/portfolio/oddup': 'Oddup Case Study', '/portfolio/print': 'Digital & Branding' }[pathname];
    document.title = sectionTitle ? `${sectionTitle} — Vijeesh Thattante Valappil` : 'Vijeesh Thattante Valappil — Product Designer';
  }, [pathname]);

  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({ autoRaf: true, duration: 1.15, smoothWheel: true });
    return () => lenis.destroy();
  }, [reducedMotion]);

  useEffect(() => {
  const caseStudies = {
    '/portfolio/poonch': 'poonch',
    '/portfolio/vox': 'vox',
    '/portfolio/oddup': 'oddup',
    '/portfolio/print': 'digital_branding',
  };

  const caseStudy = caseStudies[pathname];

  if (caseStudy) {
    trackEvent('case_study_view', {
      case_study_name: caseStudy,
    });
  }
}, [pathname]);

  return (<>
    {pathname !== '/' && <ReadingProgress key={pathname} />}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/writing" element={<PublicationPage section="writing" />} />
      <Route path="/portfolio/patent" element={<PublicationPage section="patent" />} />
      <Route path="/portfolio/profile" element={<ProfilePage />} />
      <Route path="/portfolio/contact" element={<ContactPage />} />
      <Route path="/portfolio/poonch" element={<PoonchCaseStudy />} />
      <Route path="/portfolio/vox" element={<VoxCaseStudy />} />
      <Route path="/portfolio/oddup" element={<OddupCaseStudy />} />
      <Route path="/portfolio/print" element={<DigitalBranding />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>);
}

export default function App() {
  return <MotionConfig reducedMotion="user"><BrowserRouter><SiteRoutes /></BrowserRouter></MotionConfig>;
}
