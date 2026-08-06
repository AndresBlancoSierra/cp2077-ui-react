import { Grid } from 'react-window';
import type { CSSProperties } from 'react';
import type { CyberwareItem } from '../../data/items';
import { qualityColor } from '../../data/quality';

const COLS = 5;
const COL_W = 120;
const ROW_H = 120;
const GRID_W = 620;
const GRID_H = 400;

export function ItemGrid({
  items,
  onPick,
  onHover,
}: {
  items: CyberwareItem[];
  onPick: (i: CyberwareItem) => void;
  onHover: (i: CyberwareItem | null) => void;
}) {
  const cellProps = { items, onPick, onHover };
  return (
    <div className="grid-wrapper" style={{ width: GRID_W, height: GRID_H }}>
      <Grid<typeof cellProps>
        cellProps={cellProps}
        cellComponent={({ columnIndex, rowIndex, style, items, onPick, onHover }: {
          columnIndex: number;
          rowIndex: number;
          style: CSSProperties;
          items: CyberwareItem[];
          onPick: (i: CyberwareItem) => void;
          onHover: (i: CyberwareItem | null) => void;
        }) => {
          const item = items[rowIndex * COLS + columnIndex];
          if (!item) return null;
          return (
            <div
              style={style}
              className="item-cell"
              onClick={() => onPick(item)}
              onMouseEnter={() => onHover(item)}
              onMouseLeave={() => onHover(null)}
            >
              <div className="item-icon-frame">
                <span className="item-icon" />
              </div>
              <span className={`item-name q-${item.quality.toLowerCase()}`} style={{ color: qualityColor(item.quality) }}>
                {item.name}
              </span>
            </div>
          );
        }}
        columnCount={COLS}
        rowCount={Math.ceil(items.length / COLS)}
        columnWidth={COL_W}
        rowHeight={ROW_H}
        defaultWidth={GRID_W}
        defaultHeight={GRID_H}
        style={{ width: GRID_W, height: GRID_H }}
      />
    </div>
  );
}
