import { WebPlugin } from '@capacitor/core';

import type { VolumeupPlugin } from './definitions';

export class VolumeupWeb extends WebPlugin implements VolumeupPlugin {
  async maximum(): Promise<void> {
  }
  async minimum(): Promise<void> {
  }
  async up(): Promise<void> {
  }
  async down(): Promise<void> {
  }
  async getMax(): Promise<{value:string}> {
    return new Promise((resolve) => {
      resolve({value:""});
    });
  }
}
