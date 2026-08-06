import { InkLayout } from '../common/InkLayout';
import { qualityColor } from '../../data/quality';
import type { CyberwareItem } from '../../data/items';

export function Tooltip({ item, side }: { item: CyberwareItem; side: 'Left' | 'Right' }) {
  return (
    <InkLayout
      layout={{ anchor: 'Centered', margin: { top: 0, left: 50, right: 0, bottom: 0 } }}
      className="tooltip-anchors"
    >
      <InkLayout
        layout={{ anchor: 'TopLeft', margin: { top: 0, left: side === 'Left' ? -500 : 360, right: 0, bottom: 0 } }}
        className={`tooltip tooltip-${side.toLowerCase()}`}
      >
        <div className="tooltip-name" style={{ color: qualityColor(item.quality) }}>
          {item.name}
        </div>
        <div className="tooltip-category">{item.area.replace('EquipmentArea.', '')}</div>
        <div className="tooltip-desc">{item.description}</div>
        <div className="tooltip-record">{item.record}</div>
      </InkLayout>
    </InkLayout>
  );
}
