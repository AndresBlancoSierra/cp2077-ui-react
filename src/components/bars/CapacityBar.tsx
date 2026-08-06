import { InkLayout } from '../common/InkLayout';

export function CapacityBar({
  current,
  max,
  cost,
  overcharge,
}: {
  current: number;
  max: number;
  cost: number;
  overcharge: boolean;
}) {
  const pct = Math.min(100, (current / max) * 100);
  return (
    <InkLayout
      layout={{ anchor: 'TopLeft', anchorPoint: { X: 1, Y: 0 }, margin: { top: 420, left: 320, right: 0, bottom: 0 } }}
      className="capacity-bar"
    >
      <span className="bar-max-label">888</span>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${pct}%` }} />
        <div className="threshold-line" style={{ left: `${pct}%` }} />
      </div>
      <span className="bar-current-label">{current}</span>
      <span className="bar-cost-label">+{cost}</span>
      <div className={`overcharge-box ${overcharge ? 'overcharge' : ''}`}>
        {overcharge && <img src="lock" alt="" />}
        <img src="glow" alt="" />
      </div>
    </InkLayout>
  );
}
