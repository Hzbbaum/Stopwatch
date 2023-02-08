import { stopwatch, timerWatch } from "./watchTypes"

export type watchFactory={
    createTimer():timerWatch,
    createStopwatch():stopwatch
}