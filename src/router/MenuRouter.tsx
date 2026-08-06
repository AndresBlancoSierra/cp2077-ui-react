import { createContext, useContext, useState, type ReactNode } from 'react';

export type MenuName =
  | 'new_perks' | 'cyberware_equip' | 'temp_stats'
  | 'inventory_screen' | 'world_map' | 'quest_log' | 'crafting_main'
  | 'codex' | 'backpack' | 'phone' | 'tarot_main' | 'shards' | 'gallery';

export const MENU_TO_ROUTE: Record<MenuName, string> = {
  new_perks: '/character',
  cyberware_equip: '/cyberware',
  temp_stats: '/stats',
  inventory_screen: '/inventory',
  world_map: '/map',
  quest_log: '/journal',
  crafting_main: '/crafting',
  codex: '/codex',
  backpack: '/backpack',
  phone: '/phone',
  tarot_main: '/tarot',
  shards: '/shards',
  gallery: '/gallery',
};

interface MenuContextValue {
  open: (m: MenuName) => void;
  back: () => void;
  route: string;
}

const MenuCtx = createContext<MenuContextValue>({ open: () => {}, back: () => {}, route: '/' });

export function useMenu() {
  return useContext(MenuCtx);
}

export function MenuProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<string[]>(['/']);

  const open = (m: MenuName) => {
    const route = MENU_TO_ROUTE[m] ?? '/';
    setStack(prev => [...prev, route]);
  };

  const back = () => {
    setStack(prev => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  return (
    <MenuCtx.Provider value={{ open, back, route: stack[stack.length - 1] }}>
      {children}
    </MenuCtx.Provider>
  );
}
