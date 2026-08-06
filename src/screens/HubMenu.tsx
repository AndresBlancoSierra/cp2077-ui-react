import { useMenu, type MenuName } from '../router/MenuRouter';
import { HubCell } from '../components/hub/HubCell';

const HUB_ITEMS: { dir: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'; name: MenuName; icon: string; label: string }[] = [
  { dir: 'UP', name: 'new_perks', icon: 'ico_character', label: 'CHARACTER' },
  { dir: 'RIGHT', name: 'cyberware_equip', icon: 'ico_cyberware', label: 'CYBERWARE' },
  { dir: 'DOWN', name: 'temp_stats', icon: 'ico_stats_hub', label: 'STATS' },
  { dir: 'LEFT', name: 'inventory_screen', icon: 'ico_inventory', label: 'INVENTORY' },
];

export function HubMenu() {
  const { open, back } = useMenu();
  return (
    <div className="hub">
      <img src="ico_DPAD" alt="" className="hub-center" />
      {HUB_ITEMS.map(it => (
        <HubCell
          key={it.dir}
          dir={it.dir}
          icon={it.icon}
          label={it.label}
          onClick={() => open(it.name)}
        />
      ))}
      <button className="hub-close" onClick={back} onContextMenu={e => { e.preventDefault(); back(); }}>
        CLOSE [C]
      </button>
    </div>
  );
}
