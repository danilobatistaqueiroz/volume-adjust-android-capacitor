import { registerPlugin } from '@capacitor/core';

import type { VolumeupPlugin } from './definitions';

const Volumeup = registerPlugin<VolumeupPlugin>('Volumeup', {
  web: () => import('./web').then(m => new m.VolumeupWeb()),
});

export * from './definitions';
export { Volumeup };
