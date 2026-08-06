import { useEffect, useState } from 'react';

export interface CanvasScale {
  scale: number;
  ref: (el: HTMLDivElement | null) => void;
}

export function useCanvasScale(baseW = 1920, baseH = 1080): CanvasScale {
  const [scale, setScale] = useState(1);
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!el) return;
    const update = () => {
      const s = Math.min(window.innerWidth / baseW, window.innerHeight / baseH);
      setScale(s);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [el, baseW, baseH]);

  return { scale, ref: setEl };
}
