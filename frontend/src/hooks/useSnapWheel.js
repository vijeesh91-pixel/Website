import { useEffect } from 'react';

export const useSnapWheel = (contentRef, api, select, lastStep) => {
  useEffect(() => {
    const content = contentRef.current;
    if (!content || !api) return;
    const readyAt = performance.now() + 700; // Ignore momentum carried over from landing.
    let lastWheel = 0, amount = 0, direction = 0;
    const wheel = event => {
      if (event.ctrlKey || event.metaKey) return;
      if (window.innerWidth < 768 && !event.target.closest('[data-carousel-viewport]')) return;
      const raw = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      const delta = raw * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? content.clientHeight : 1);
      if (!delta) return;
      event.preventDefault();
      if (Math.abs(delta) < 2) return; // Discard the tiny tail of trackpad inertia.
      const now = performance.now();
      const nextDirection = Math.sign(delta);
      const reversed = direction !== 0 && direction !== nextDirection;
      if (now - lastWheel > 180 || reversed) amount = 0;
      lastWheel = now;
      direction = nextDirection;
      const current = api.selectedScrollSnap();
      const next = Math.max(0, Math.min(current + direction, api.scrollSnapList().length - 1));
      if (next === current) { amount = 0; return; }
      // A finite cooldown replaces the old consumed-until-idle latch. Sustained
      // input can keep advancing; blocked events never build a delayed queue.
      if (now < readyAt || now - lastStep.current < (reversed ? 100 : 400)) { amount = 0; return; }
      amount += Math.max(-80, Math.min(80, delta));
      if (Math.abs(amount) >= 28) {
        amount = 0;
        select(next);
      }
    };
    content.addEventListener('wheel', wheel, { passive: false });
    return () => content.removeEventListener('wheel', wheel);
  }, [api, contentRef, select, lastStep]);
};