import { useMemo, useState } from 'react';
import { BODY_AREAS } from '../data/areas';
import { itemsForArea, type CyberwareItem } from '../data/items';

export type ScreenType = 'Ripperdoc' | 'Inventory';
export type RipperdocMode = 'Default' | 'Item';
export type BodyGender = 'man' | 'woman';

export interface CyberwareState {
  filterMode: RipperdocMode;
  filterArea: string;
  hoverArea: string | null;
  gender: BodyGender;
  screenType: ScreenType;
  showWarning: boolean;
  filteredItems: CyberwareItem[];
  capacity: { current: number; max: number; cost: number; overcharge: boolean };
  armor: { current: number; cost: number };
  setFilterArea: (area: string) => void;
  setFilterMode: (mode: RipperdocMode) => void;
  setHoverArea: (area: string | null) => void;
  setGender: (g: BodyGender) => void;
  onPick: (item: CyberwareItem) => void;
  equipped: Set<string>;
  equip: (item: CyberwareItem) => void;
  unequip: (area: string) => void;
}

export function useCyberwareScreen(screenType: ScreenType): CyberwareState {
  const [filterMode, setFilterMode] = useState<RipperdocMode>('Default');
  const [filterArea, setFilterArea] = useState<string>(BODY_AREAS[0].equipArea);
  const [hoverArea, setHoverArea] = useState<string | null>(null);
  const [gender, setGender] = useState<BodyGender>('man');
  const [equipped, setEquipped] = useState<Set<string>>(new Set());

  const filteredItems = useMemo(
    () => itemsForArea(filterArea).filter(i => i.name && !equipped.has(i.record)),
    [filterArea, equipped],
  );

  const capacity = useMemo(() => {
    const used = equipped.size * 10;
    return { current: 0, max: 80, cost: used, overcharge: used > 80 };
  }, [equipped]);

  const armor = useMemo(() => {
    const current = equipped.size * 15;
    return { current, cost: filteredItems.length ? 5 : 0 };
  }, [equipped, filteredItems]);

  const equip = (item: CyberwareItem) => {
    setEquipped(prev => {
      const next = new Set(prev);
      next.add(item.record);
      return next;
    });
  };

  const unequip = (area: string) => {
    setEquipped(prev => {
      const next = new Set(prev);
      for (const it of itemsForArea(area)) next.delete(it.record);
      return next;
    });
  };

  const onPick = (item: CyberwareItem) => equip(item);

  return {
    filterMode, setFilterMode,
    filterArea, setFilterArea,
    hoverArea, setHoverArea,
    gender, setGender,
    screenType,
    showWarning: screenType === 'Inventory',
    filteredItems,
    capacity, armor,
    onPick,
    equipped, equip, unequip,
  };
}
