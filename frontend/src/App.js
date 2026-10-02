import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import { Landing } from './pages/Landing';
import { Portfolio } from './pages/Portfolio';
import './App.css';

function SiteRoutes() {
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pathname === '/portfolio'
      ? 'Portfolio — Vijeesh Thattante Valappil'
      : 'Vijeesh Thattante Valappil — Product Designer';
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
      <Route path="*" element={<Portfolio notFound />} />
    </Routes>
  );
}

export default function App() {
  return <MotionConfig reducedMotion="user"><BrowserRouter><SiteRoutes /></BrowserRouter></MotionConfig>;
}