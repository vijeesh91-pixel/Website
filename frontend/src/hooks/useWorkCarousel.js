import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useReducedMotion } from 'framer-motion';

// Each wheel gesture / swipe advances exactly one project, including trackpad inertia.
export const useWorkCarousel = (contentRef) => {
  const reduced = useReducedMotion();
  const [viewportRef, api] = useEmblaCarousel({ align: 'start', containScroll: false, loop: false, slidesToScroll: 1, watchDrag: false, duration: reduced ? 0 : 32 });
  const [selected, setSelected] = useState(0);
  const pointer = useRef(null);
  const lastStep = useRef(0);

  const select = useCallback(index => {
    if (!api) return;
    lastStep.current = performance.now();
    api.scrollTo(Math.max(0, Math.min(index, api.scrollSnapList().length - 1)), Boolean(reduced));
  }, [api, reduced]);

  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    api.on('select', update).on('reInit', update);
    update();
    return () => { api.off('select', update).off('reInit', update); };
  }, [api]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content || !api) return;
    const readyAt = performance.now() + 700;
    let lastWheel = 0, amount = 0, consumed = false;
    const wheel = event => {
      if (event.ctrlKey || event.metaKey) return;
      // Leave vertical page scrolling available on narrow screens outside the tiles.
      if (window.innerWidth < 768 && !event.target.closest('[data-carousel-viewport]')) return;
      const delta = (Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY) * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? content.clientHeight : 1);
      if (!delta) return;
      event.preventDefault();
      const now = performance.now();
      if (now - lastWheel > 180) { amount = 0; consumed = false; }
      lastWheel = now;
      if (now < readyAt || consumed || now - lastStep.current < 550) return;
      if (Math.sign(amount) !== Math.sign(delta)) amount = 0;
      amount += delta;
      if (Math.abs(amount) >= 24) {
        consumed = true;
        select(api.selectedScrollSnap() + Math.sign(amount));
      }
    };
    content.addEventListener('wheel', wheel, { passive: false });
    return () => content.removeEventListener('wheel', wheel);
  }, [api, contentRef, select]);

  const onKeyDown = event => {
    const keys = { ArrowRight: selected + 1, ArrowLeft: selected - 1, Home: 0, End: api ? api.scrollSnapList().length - 1 : 0 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    select(keys[event.key]);
  };
  const onPointerDown = event => {
    if (pointer.current || (event.button !== 0 && event.pointerType === 'mouse')) return;
    pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
    try {
      event.currentTarget.setPointerCapture?.(event.pointerId);
    } catch {
      // A browser can retire a canceled pointer before capture. In-viewport
      // release still works; never let a stale/synthetic pointer break the page.
    }
  };
  const onPointerUp = event => {
    if (!pointer.current || pointer.current.id !== event.pointerId) return;
    const dx = event.clientX - pointer.current.x, dy = event.clientY - pointer.current.y;
    pointer.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) select(selected + (dx < 0 ? 1 : -1));
  };

  const onPointerCancel = event => {
    if (pointer.current?.id === event.pointerId) pointer.current = null;
  };
  return { viewportRef, selected, select, onKeyDown, onPointerDown, onPointerUp, onPointerCancel };
};