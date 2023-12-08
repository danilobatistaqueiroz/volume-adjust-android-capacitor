export interface VolumeupPlugin {
  maximum(): Promise<void>;
  minimum(): Promise<void>;
  up(): Promise<void>;
  down(): Promise<void>;
  getMax(): Promise<{ value: string }>;
}
