import type { CSSProperties } from 'react';

export interface InkLayout {
  anchor: string;
  anchorPoint?: { X: number; Y: number };
  HAlign?: 'Fill' | 'Left' | 'Center' | 'Right';
  VAlign?: 'Fill' | 'Top' | 'Center' | 'Bottom';
  margin?: { top: number; left: number; right: number; bottom: number };
  sizeRule?: 'Fixed' | 'Fill' | 'Stretch';
  sizeCoefficient?: number;
}

const DEFAULT_MARGIN = { top: 0, left: 0, right: 0, bottom: 0 };

export function anchorToCss(layout: InkLayout): CSSProperties {
  const m = layout.margin ?? DEFAULT_MARGIN;
  const base: CSSProperties = {
    position: 'absolute',
    margin: `${m.top}px ${m.right}px ${m.bottom}px ${m.left}px`,
  };

  const ap = layout.anchorPoint ?? { X: 0, Y: 0 };

  switch (layout.anchor) {
    case 'TopLeft': base.top = 0; base.left = 0; break;
    case 'TopRight': base.top = 0; base.right = 0; break;
    case 'TopCenter': base.top = 0; base.left = '50%'; break;
    case 'BottomLeft': base.bottom = 0; base.left = 0; break;
    case 'BottomRight': base.bottom = 0; base.right = 0; break;
    case 'BottomCenter': base.bottom = 0; base.left = '50%'; break;
    case 'CenterLeft': base.left = 0; base.top = '50%'; break;
    case 'CenterRight': base.right = 0; base.top = '50%'; break;
    case 'Centered': base.left = '50%'; base.top = '50%'; break;
    case 'Fill': base.inset = 0; break;
    case 'CenterFillVerticaly':
      base.left = '50%'; base.top = 0; base.bottom = 0; break;
    case 'LeftFillVerticaly':
      base.left = 0; base.top = 0; base.bottom = 0; break;
    case 'RightFillVerticaly':
      base.right = 0; base.top = 0; base.bottom = 0; break;
    default: break;
  }

  if (ap.X !== 0 || ap.Y !== 0) {
    const tx = ap.X === 1 ? '-100%' : `${ap.X * 100}%`;
    const ty = ap.Y === 1 ? '-100%' : `${ap.Y * 100}%`;
    base.transform = `translate(${tx}, ${ty})`;
  }

  if (layout.sizeRule === 'Fill' || layout.sizeRule === 'Stretch') {
    if (!('inset' in base)) Object.assign(base, { inset: 0 });
  }

  return base;
}

export function InkLayout({
  layout,
  className,
  style,
  children,
}: {
  layout: InkLayout;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <div className={className} style={{ ...anchorToCss(layout), ...style }}>
      {children}
    </div>
  );
}
