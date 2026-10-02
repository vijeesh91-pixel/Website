import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useReducedMotion } from 'framer-motion';
import { usePawlSound } from './usePawlSound';
import { useSnapWheel } from './useSnapWheel';

// Move one project per snap without locking out sustained wheel/trackpad input.
export const useWorkCarousel = (contentRef) => {
  const reduced = useReducedMotion();
  const [viewportRef, api] = useEmblaCarousel({ align: 'start', containScroll: false, loop: false, slidesToScroll: 1, watchDrag: false, duration: reduced ? 0 : 24 });
  const [selected, setSelected] = useState(0);
  const pointer = useRef(null);
  const suppressClick = useRef(false);
  const lastStep = useRef(0);
  const sound = usePawlSound();
  const { play, prepare } = sound;

  const select = useCallback(index => {
    if (!api) return;
    const next = Math.max(0, Math.min(index, api.scrollSnapList().length - 1));
    if (next === api.selectedScrollSnap()) return;
    prepare();
    lastStep.current = performance.now();
    api.scrollTo(next, Boolean(reduced));
  }, [api, reduced, prepare]);

  useSnapWheel(contentRef, api, select, lastStep);

  useEffect(() => {
    if (!api) return;
    let previous = api.selectedScrollSnap();
    const update = () => {
      const next = api.selectedScrollSnap();
      setSelected(next);
      if (next !== previous) { previous = next; play(); }
    };
    const reInit = () => { previous = api.selectedScrollSnap(); setSelected(previous); };
    api.on('select', update).on('reInit', reInit);
    reInit();
    return () => { api.off('select', update).off('reInit', reInit); };
  }, [api, play]);

  useEffect(() => {
    const resetPointer = () => { pointer.current = null; suppressClick.current = false; };
    window.addEventListener('blur', resetPointer);
    return () => window.removeEventListener('blur', resetPointer);
  }, []);

  const onKeyDown = event => {
    const keys = { ArrowRight: selected + 1, ArrowLeft: selected - 1, Home: 0, End: api ? api.scrollSnapList().length - 1 : 0 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    select(keys[event.key]);
  };
  const onPointerDown = event => {
    if ((pointer.current && pointer.current.id !== event.pointerId) || (event.button !== 0 && event.pointerType === 'mouse')) return;
    suppressClick.current = false;
    pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
    try {
      const captureTarget = event.target.closest('a') || event.currentTarget;
      captureTarget.setPointerCapture?.(event.pointerId);
    } catch {
      // A browser can retire a canceled pointer before capture. In-viewport
      // release still works; never let a stale/synthetic pointer break the page.
    }
  };
  const onPointerUp = event => {
    if (!pointer.current || pointer.current.id !== event.pointerId) return;
    const dx = event.clientX - pointer.current.x, dy = event.clientY - pointer.current.y;
    pointer.current = null;
    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) suppressClick.current = true;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) select((api?.selectedScrollSnap() ?? selected) + (dx < 0 ? 1 : -1));
  };

  const onPointerCancel = event => {
    if (pointer.current?.id === event.pointerId) { pointer.current = null; suppressClick.current = true; }
  };
  const onClickCapture = event => {
    if (suppressClick.current && event.detail !== 0) {
      event.preventDefault();
      event.stopPropagation();
      suppressClick.current = false;
    }
  };
  return { viewportRef, selected, select, onKeyDown, onPointerDown, onPointerUp, onPointerCancel, onClickCapture, soundEnabled: sound.enabled, toggleSound: sound.toggle };
};