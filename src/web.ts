import { WebPlugin } from '@capacitor/core';

import type { VolumeupPlugin } from './definitions';

export class VolumeupWeb extends WebPlugin implements VolumeupPlugin {
  async maximum(): Promise<void> {
  }
}
