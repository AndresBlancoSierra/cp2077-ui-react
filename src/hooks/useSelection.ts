import { useState } from 'react';

export function useSelection<T>(initial: T | null = null) {
  const [selected, setSelected] = useState<T | null>(initial);
  const [hovered, setHovered] = useState<T | null>(null);
  return { selected, setSelected, hovered, setHovered };
}
