import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { site } from '../content/site';

export const useLandingScroll = (rootRef, disabled) => {
  const navigate = useNavigate();
  useEffect(() => {
    const root = rootRef.current;
    if (!root || disabled) return;
    let amount = 0, lastWheel = 0, start = null, navigating = false;
    const readyAt = performance.now() + 450;
    const openWork = () => {
      if (navigating || performance.now() < readyAt) return;
      navigating = true;
      navigate(site.portfolioPath);
    };
    const wheel = event => {
      if (event.ctrlKey || event.metaKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (event.deltaY <= 0) { amount = 0; return; }
      event.preventDefault();
      const now = performance.now();
      if (now - lastWheel > 200) amount = 0;
      lastWheel = now;
      amount += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? root.clientHeight : 1);
      if (amount >= 60) openWork();
    };
    const touchStart = event => { start = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null; };
    const touchEnd = event => {
      if (!start || !event.changedTouches.length) return;
      const dx = event.changedTouches[0].clientX - start.x;
      const dy = start.y - event.changedTouches[0].clientY;
      if (dy > 70 && dy > Math.abs(dx)) openWork();
      start = null;
    };
    const keyDown = event => {
      if (event.target.closest('a,button,input,textarea,select,[contenteditable]')) return;
      if (['PageDown', 'ArrowDown', ' '].includes(event.key)) { event.preventDefault(); openWork(); }
    };
    root.addEventListener('wheel', wheel, { passive: false });
    root.addEventListener('touchstart', touchStart, { passive: true });
    root.addEventListener('touchend', touchEnd, { passive: true });
    window.addEventListener('keydown', keyDown);
    return () => {
      root.removeEventListener('wheel', wheel);
      root.removeEventListener('touchstart', touchStart);
      root.removeEventListener('touchend', touchEnd);
      window.removeEventListener('keydown', keyDown);
    };
  }, [disabled, navigate, rootRef]);
};