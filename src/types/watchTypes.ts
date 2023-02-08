export type watch = { start(): void; stop(): number; pause(): void; getElapsedTime: number };
export type stopwatch = watch;
export type timerWatch = watch & { getRemainingTime(): number };
export enum watchState {
  'standby',
  'running',
  'paused',
}
