import { InkLayout } from './InkLayout';
import type { CSSProperties } from 'react';

export function InkText({
  text,
  font = 42,
  tint,
  style,
}: {
  text: string;
  font?: number;
  tint?: { r: number; g: number; b: number };
  style?: CSSProperties;
}) {
  const color = tint
    ? `rgb(${Math.round(Math.min(1, tint.r) * 255)}, ${Math.round(Math.min(1, tint.g) * 255)}, ${Math.round(Math.min(1, tint.b) * 255)})`
    : undefined;
  return (
    <InkLayout layout={{ anchor: 'TopLeft' }}>
      <span className="ink-text" style={{ fontSize: font, color, ...style }}>
        {text}
      </span>
    </InkLayout>
  );
}
