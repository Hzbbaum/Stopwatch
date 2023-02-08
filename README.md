# Easy Stopwatch

## Usage

### Initialize a timer

A timer will countdown to alotted time and then stop:
`const myClock = createTimer(timeInSeconds)`

### Initialize a stopwatch

A stopwatch will start counting untill stopped:
`const myClock = createStopwatch()`

### Start Time

Start the timer or stopwatch:
`myClock.start()`

### Pause

Pause the timer or stopwatch:

```js
myClock.pause();
/// and resume with
myClock.start();
```

### Stop

Stop the timer or stopwatch and retrieve the elapsed time in milliseconds with
`let elapsedTime = myclock.stop()`

### Get elapsed time

Get the total running time of the clock with
`let elapsedTime = myclock.getElapsedTime()`

For timers, you may retrieve the remaining time as well:
`let elapsedTime = myclock.getRemainingTime()`

## Summary

|                  | Timer                          | Stopwatch                  |
| ---------------- | ------------------------------ | -------------------------- |
| Initialize       | `crateTimer(timeInMilliseconds)` | `createStopwatch()`           |
| Start            | `myClock.start()`              | `myClock.start()`          |
| Stop             | `myClock.stop()`               | `myClock.stop()`           |
| Pause            | `myClock.pause()`              | `myClock.pause()`          |
| Resume           | `myClock.start()`              | `myClock.start()`          |
| Get elapsed time | `myClock.getElapsedTime()`     | `myClock.getElapsedTime()` |
| Get Remaing time | `myClock.getRemainingTime()`   | does not exist             |
