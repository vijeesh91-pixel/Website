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
import './App.css';

function SiteRoutes() {
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
    const sectionTitle = { '/portfolio': 'Work', '/portfolio/writing': 'Writing', '/portfolio/patent': 'Patent', '/portfolio/profile': 'Profile', '/portfolio/contact': 'Contact' }[pathname];
    document.title = sectionTitle ? `${sectionTitle} — Vijeesh Thattante Valappil` : 'Vijeesh Thattante Valappil — Product Designer';
  }, [pathname]);

  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({ autoRaf: true, duration: 1.15, smoothWheel: true });
    return () => lenis.destroy();
  }, [reducedMotion]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/writing" element={<PublicationPage section="writing" />} />
      <Route path="/portfolio/patent" element={<PublicationPage section="patent" />} />
      <Route path="/portfolio/profile" element={<ProfilePage />} />
      <Route path="/portfolio/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return <MotionConfig reducedMotion="user"><BrowserRouter><SiteRoutes /></BrowserRouter></MotionConfig>;
}