import { Stopwatch, Timer } from "./watch";
import { WatchFactory } from "./WatchFactory";

const factory = new WatchFactory();
export const newTimer:(()=>Timer) = factory.createTimer ;
export const newStopwatch:()=>Stopwatch = factory.createStopwatch;

