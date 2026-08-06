import { InkLayout } from '../common/InkLayout';

export function ArmorBar({ current, cost }: { current: number; cost: number }) {
  return (
    <InkLayout
      layout={{ anchor: 'TopRight', anchorPoint: { X: 0, Y: 1 }, margin: { top: 420, left: 0, right: 490, bottom: 0 } }}
      className="armor-bar"
    >
      <span className="bar-current-label">{current}</span>
      <span className="bar-cost-label">+{cost}</span>
    </InkLayout>
  );
}
