import Lenis from '@studio-freight/lenis';

let lenis: Lenis | null = null;

export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return;
  
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};

export const destroySmoothScroll = () => {
  lenis?.destroy();
  lenis = null;
};

export const getSmoothScroll = () => lenis;
