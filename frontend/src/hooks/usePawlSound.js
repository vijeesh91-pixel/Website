import { useCallback, useEffect, useRef, useState } from 'react';

const preferenceKey = 'portfolio-pawl-muted';

// A short, locally synthesized mechanical click: no audio files or network requests.
export const usePawlSound = () => {
  const [enabled, setEnabled] = useState(() => {
    try { return localStorage.getItem(preferenceKey) !== 'true'; } catch { return true; }
  });
  const enabledRef = useRef(enabled);
  const context = useRef(null);
  enabledRef.current = enabled;

  const prepare = useCallback(() => {
    if (!enabledRef.current) return null;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return null;
      if (!context.current || context.current.state === 'closed') context.current = new AudioContext();
      if (context.current.state === 'suspended') context.current.resume().catch(() => {});
      return context.current;
    } catch { return null; }
  }, []);

  const play = useCallback(() => {
    const ctx = prepare();
    // Autoplay restrictions must never delay scrolling or queue clicks for later.
    if (!ctx || ctx.state !== 'running') return;
    try {
      const duration = .035;
      const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * duration), ctx.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let i = 0; i < samples.length; i++) {
        const t = i / ctx.sampleRate;
        samples[i] = ((Math.random() * 2 - 1) * .6 + Math.sin(2 * Math.PI * 1900 * t) * .4) * Math.exp(-t * 155);
      }
      const source = ctx.createBufferSource();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      source.buffer = buffer;
      filter.type = 'highpass';
      filter.frequency.value = 750;
      gain.gain.value = .16;
      source.connect(filter).connect(gain).connect(ctx.destination);
      source.onended = () => { source.disconnect(); filter.disconnect(); gain.disconnect(); };
      source.start();
    } catch { /* Audio is optional; navigation must always keep working. */ }
  }, [prepare]);

  useEffect(() => {
    document.addEventListener('pointerdown', prepare, true);
    document.addEventListener('keydown', prepare, true);
    return () => {
      document.removeEventListener('pointerdown', prepare, true);
      document.removeEventListener('keydown', prepare, true);
      const ctx = context.current;
      context.current = null;
      if (ctx && ctx.state !== 'closed') ctx.close().catch(() => {});
    };
  }, [prepare]);

  const toggle = () => {
    const next = !enabledRef.current;
    enabledRef.current = next;
    setEnabled(next);
    try { localStorage.setItem(preferenceKey, String(!next)); } catch { /* Storage can be restricted. */ }
    if (next) prepare();
  };
  return { enabled, toggle, play, prepare };
};