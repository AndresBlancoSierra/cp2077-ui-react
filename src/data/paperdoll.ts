export interface PaperdollVideo {
  name: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
}

export interface GenderPaperdoll {
  body: PaperdollVideo;
  areas: Record<string, PaperdollVideo>;
}

export const VIDEO_PATH = '/videos/paperdoll/';

export const PAPERDOLL: Record<'man' | 'woman', GenderPaperdoll> = {
  man: {
    body: { name: 'male_body_loop', cx: 986, cy: 541, w: 540, h: 960 },
    areas: {
      frontal_cortex: { name: 'man_frontal_cortex', cx: 988, cy: 208, w: 535, h: 490 },
      ocular: { name: 'man_ocular', cx: 985, cy: 178, w: 541, h: 452 },
      operating: { name: 'man_operating', cx: 991, cy: 300, w: 540, h: 485 },
      arms: { name: 'man_arm', cx: 803, cy: 310, w: 628, h: 532 },
      hands: { name: 'man_hand', cx: 515, cy: 380, w: 454, h: 496 },
      skeleton: { name: 'man_skeleton', cx: 973, cy: 516, w: 579, h: 487 },
      circulatory: { name: 'man_circulatory', cx: 954, cy: 591, w: 578, h: 487 },
      nervous: { name: 'man_nervous', cx: 969, cy: 562, w: 621, h: 514 },
      integumentary: { name: 'man_integumentary', cx: 971, cy: 517, w: 578, h: 540 },
      immune: { name: 'man_immune', cx: 954, cy: 589, w: 600, h: 517 },
      legs: { name: 'man_legs', cx: 968, cy: 650, w: 628, h: 540 },
    },
  },
  woman: {
    body: { name: 'female_body_loop', cx: 973, cy: 534, w: 540, h: 960 },
    areas: {
      frontal_cortex: { name: 'woman_frontal_cortex', cx: 979, cy: 210, w: 458, h: 490 },
      ocular: { name: 'woman_ocular', cx: 986, cy: 182, w: 461, h: 443 },
      operating: { name: 'woman_operating', cx: 972, cy: 562, w: 430, h: 490 },
      arms: { name: 'woman_arm', cx: 935, cy: 310, w: 562, h: 540 },
      hands: { name: 'woman_hand', cx: 703, cy: 380, w: 253, h: 415 },
      skeleton: { name: 'woman_skeleton', cx: 973, cy: 517, w: 512, h: 487 },
      circulatory: { name: 'woman_circulatory', cx: 954, cy: 591, w: 513, h: 487 },
      nervous: { name: 'woman_nervous', cx: 972, cy: 562, w: 504, h: 514 },
      integumentary: { name: 'woman_integumentary', cx: 973, cy: 517, w: 578, h: 540 },
      immune: { name: 'woman_immune', cx: 954, cy: 591, w: 498, h: 480 },
      legs: { name: 'woman_legs', cx: 968, cy: 650, w: 488, h: 540 },
    },
  },
};

export function videoUrl(gender: 'man' | 'woman', area: string): PaperdollVideo | null {
  return PAPERDOLL[gender].areas[area] ?? null;
}
