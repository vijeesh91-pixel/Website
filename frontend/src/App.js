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

  const pageMetadata = {
    '/': {
      title: 'Vijeesh Thattante Valappil — Product Designer',
      description:
        'Product designer specializing in fintech, design systems, and AI-assisted workflows. Explore selected work and digital product experiences.',
    },
    '/portfolio': {
      title: 'Work — Vijeesh Thattante Valappil',
      description:
        'Explore product design projects spanning fintech, digital experiences, design systems, branding, and UX case studies.',
    },
    '/portfolio/writing': {
      title: 'Writing — Vijeesh Thattante Valappil',
      description:
        'Explore articles, publications, and insights on product design, UX, technology, and digital experiences.',
    },
    '/portfolio/patent': {
      title: 'Patent — Vijeesh Thattante Valappil',
      description:
        'Explore patent and innovation work involving technology, ideas, and product development.',
    },
    '/portfolio/profile': {
      title: 'Profile — Vijeesh Thattante Valappil',
      description:
        'Learn about Vijeesh Thattante Valappil, a product designer focused on fintech, UX, design systems, and digital products.',
    },
    '/portfolio/contact': {
      title: 'Contact — Vijeesh Thattante Valappil',
      description:
        'Contact Vijeesh Thattante Valappil for product design, UX/UI, design systems, and digital product opportunities.',
    },
    '/portfolio/poonch': {
      title: 'Poonch Case Study — Vijeesh Thattante Valappil',
      description:
        'Explore the Poonch design case study and the approach to solving its user experience and product design challenges.',
    },
    '/portfolio/vox': {
      title: 'Vox Booking Experience — Vijeesh Thattante Valappil',
      description:
        'Explore the VOX Cinemas booking experience case study, focusing on cinema ticket booking and user experience.',
    },
    '/portfolio/oddup': {
      title: 'Oddup Case Study — Vijeesh Thattante Valappil',
      description:
        'Explore the Oddup product design case study, including fintech experiences, complex interfaces, and product design.',
    },
    '/portfolio/print': {
      title: 'Digital & Branding — Vijeesh Thattante Valappil',
      description:
        'Explore digital branding, visual identity, and branding projects by product designer Vijeesh Thattante Valappil.',
    },
  };

  const metadata = pageMetadata[pathname] || pageMetadata['/'];

  document.title = metadata.title;

  let descriptionMeta = document.querySelector(
    'meta[name="description"]'
  );

  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    document.head.appendChild(descriptionMeta);
  }

  descriptionMeta.setAttribute('content', metadata.description);
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
