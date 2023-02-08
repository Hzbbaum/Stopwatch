import { WatchFactory } from '../WatchFactory';
import { Stopwatch, Timer } from '../watch';
describe('WatchFactory', () => {
  let testedFactory: WatchFactory;
  beforeAll(() => {
    testedFactory = new WatchFactory();
  });
  test('should exist after construction', () => {
    expect(testedFactory).toBeInstanceOf(WatchFactory);
  });
  test('should contain a createStopwatch method', () => {
    expect(testedFactory).toHaveProperty('createStopwatch');
  });
  describe('createStopwatch method', () => {
    let testedStopwatch = testedFactory.createStopwatch();
    beforeEach(() => {});
    test('should return a StopWatch', () => {
      expect(testedStopwatch).toBeInstanceOf(Stopwatch);
    });
  });
  test('should contain a createTimer method', () => {
    expect(testedFactory).toHaveProperty('createTimer');
  });
  describe('createTimer method', () => {
    let testedTimer = testedFactory.createTimer();
    beforeEach(() => {});
    test('should return a Timer', () => {
      expect(testedTimer).toBeInstanceOf(Timer);
    });
  });
});
