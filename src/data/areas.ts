export interface BodyArea {
  id: string;
  equipArea: string;
  label: string;
  video: string;
  cx: number;
  cy: number;
  align: 'Left' | 'Right';
}

export const BODY_AREAS: BodyArea[] = [
  { id: 'FrontalCortexCW', equipArea: 'EquipmentArea.FrontalCortexCW', label: 'Frontal Cortex', video: 'frontal_cortex', cx: 988, cy: 208, align: 'Left' },
  { id: 'EyesCW', equipArea: 'EquipmentArea.EyesCW', label: 'Ocular', video: 'ocular', cx: 985, cy: 178, align: 'Left' },
  { id: 'SystemReplacementCW', equipArea: 'EquipmentArea.SystemReplacementCW', label: 'Operating System', video: 'operating', cx: 991, cy: 300, align: 'Right' },
  { id: 'ArmsCW', equipArea: 'EquipmentArea.ArmsCW', label: 'Arms', video: 'arms', cx: 803, cy: 310, align: 'Right' },
  { id: 'HandsCW', equipArea: 'EquipmentArea.HandsCW', label: 'Hands', video: 'hands', cx: 515, cy: 380, align: 'Left' },
  { id: 'MusculoskeletalSystemCW', equipArea: 'EquipmentArea.MusculoskeletalSystemCW', label: 'Skeleton', video: 'skeleton', cx: 973, cy: 516, align: 'Right' },
  { id: 'IntegumentarySystemCW', equipArea: 'EquipmentArea.IntegumentarySystemCW', label: 'Integumentary', video: 'integumentary', cx: 971, cy: 517, align: 'Right' },
  { id: 'CardiovascularSystemCW', equipArea: 'EquipmentArea.CardiovascularSystemCW', label: 'Cardiovascular', video: 'circulatory', cx: 954, cy: 591, align: 'Left' },
  { id: 'NervousSystemCW', equipArea: 'EquipmentArea.NervousSystemCW', label: 'Nervous', video: 'nervous', cx: 969, cy: 562, align: 'Right' },
  { id: 'ImmuneSystemCW', equipArea: 'EquipmentArea.ImmuneSystemCW', label: 'Immune', video: 'immune', cx: 954, cy: 589, align: 'Left' },
  { id: 'LegsCW', equipArea: 'EquipmentArea.LegsCW', label: 'Legs', video: 'legs', cx: 968, cy: 650, align: 'Left' },
];

export function videoForArea(equipArea: string): string {
  const a = BODY_AREAS.find(x => x.equipArea === equipArea);
  return a ? a.video : '';
}
