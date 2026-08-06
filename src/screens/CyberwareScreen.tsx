import { useState } from 'react';
import { useMenu } from '../router/MenuRouter';
import { useCyberwareScreen, type ScreenType } from '../hooks/useCyberwareScreen';
import { useCanvasScale } from '../hooks/useCanvasScale';
import { Paperdoll } from '../components/paperdoll/Paperdoll';
import { CapacityBar } from '../components/bars/CapacityBar';
import { ArmorBar } from '../components/bars/ArmorBar';
import { FilterSelector } from '../components/inventory/FilterSelector';
import { ItemGrid } from '../components/inventory/ItemGrid';
import { Tooltip } from '../components/tooltips/Tooltip';
import { ButtonHints } from '../components/common/ButtonHints';
import { InkLayout } from '../components/common/InkLayout';
import type { CyberwareItem } from '../data/items';

export function CyberwareScreen({ screenType }: { screenType: ScreenType }) {
  const state = useCyberwareScreen(screenType);
  const { back } = useMenu();
  const [hoveredItem, setHoveredItem] = useState<CyberwareItem | null>(null);
  const { scale, ref } = useCanvasScale();

  return (
    <div ref={ref} style={{ width: 1920, height: 1080, transform: `translate(-50%, -50%) scale(${scale})` }} className="canvas-scaler">
    <InkLayout layout={{ anchor: 'TopLeft' }} className="cyberware-screen" style={{ width: 1920, height: 1080 }}>
      <div className="background" />

      <Paperdoll
        gender={state.gender}
        selectedArea={state.filterArea}
        hoverArea={state.hoverArea}
        onHover={state.setHoverArea}
        equipped={state.equipped}
        onSlotClick={a => state.setFilterArea(a)}
      />

      {state.showWarning && (
        <InkLayout layout={{ anchor: 'BottomCenter', anchorPoint: { X: 0.5, Y: 1 }, margin: { bottom: 50, left: 0, right: 0, top: 0 } }} className="warning">
          Visit a ripperdoc to change currently installed cyberware.
        </InkLayout>
      )}

      <CapacityBar
        current={state.capacity.current}
        max={state.capacity.max}
        cost={state.capacity.cost}
        overcharge={state.capacity.overcharge}
      />
      <ArmorBar current={state.armor.current} cost={state.armor.cost} />

      <InkLayout layout={{ anchor: 'TopLeft', margin: { top: 300, left: 800, right: 0, bottom: 0 } }} className="cyberware-inventory">
        <FilterSelector selected={state.filterArea} onChange={state.setFilterArea} />
        <div className="filtering-header">
          <span className="prefix">Possible replacement: </span>
          <span className="suffix">{state.filterArea.replace('EquipmentArea.', '')}</span>
        </div>
        <ItemGrid items={state.filteredItems} onPick={state.onPick} onHover={setHoveredItem} />
      </InkLayout>

      {hoveredItem && <Tooltip item={hoveredItem} side="Left" />}

      <ButtonHints hints={['Back', 'Equip']} />
      <button className="screen-back" onClick={back}>◀ BACK</button>
      <div className="gender-toggle">
        <button className={state.gender === 'man' ? 'on' : ''} onClick={() => state.setGender('man')}>M</button>
        <button className={state.gender === 'woman' ? 'on' : ''} onClick={() => state.setGender('woman')}>W</button>
      </div>
    </InkLayout>
    </div>
  );
}
