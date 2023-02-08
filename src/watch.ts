import { stopwatch } from './types/watchTypes';

export class Stopwatch implements stopwatch {
  private _timeDelta: number;
  private _elapsedTime: number;

  public get elapsedTime(): number {
    return this._elapsedTime;
  }

  public get timeDelta(): number {
    return this._timeDelta;
  }
  public set timeDelta(value: number) {
    this._timeDelta = value;
  }
  private constructor(parameters) {}
  start(): void {
    throw new Error('Method not implemented.');
  }
  stop(): number {
    throw new Error('Method not implemented.');
  }
  pause(): void {
    throw new Error('Method not implemented.');
  }
  getElapsedTime: number;
}
export class Timer {}
