export type Quality = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Iconic';

export const QUALITY_ORDER: Quality[] = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Iconic'];

export function qualityColor(q: string): string {
  switch (q.replace('Quality.', '')) {
    case 'Common': return '#B4B4B4';
    case 'Uncommon': return '#4AA83C';
    case 'Rare': return '#3C6FE4';
    case 'Epic': return '#E4633C';
    case 'Legendary': return '#FFD700';
    case 'Iconic': return '#FF3C6F';
    default: return '#B4B4B4';
  }
}
