import { useState } from 'react';
import { InkLayout } from '../common/InkLayout';

type Dir = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const CELL_ANCHOR: Record<Dir, { anchor: string }> = {
  UP: { anchor: 'TopCenter' },
  DOWN: { anchor: 'BottomCenter' },
  LEFT: { anchor: 'CenterLeft' },
  RIGHT: { anchor: 'CenterRight' },
};

export function HubCell({
  dir,
  icon,
  label,
  onClick,
}: {
  dir: Dir;
  icon: string;
  label: string;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);
  return (
    <InkLayout layout={{ anchor: CELL_ANCHOR[dir].anchor }} className={`hub-cell hub-cell-${dir.toLowerCase()}`}>
      <img src={`${icon}_intro`} alt="" className="layer-intro" />
      {hover && <img src={`${icon}_hover`} alt="" className="layer-hover" />}
      <img src={icon} alt="" className="layer-base" />
      <span className="hub-cell-label">{label}</span>
      <button
        className="hotzone"
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={label}
      />
    </InkLayout>
  );
}
