import { call, put } from 'redux-saga/effects';

import { incrementAsync, delay } from './sagas';

describe('incrementAsync Saga test', () => {
  const gen = incrementAsync();

  it('delay', () => {
    expect(gen.next().value).toEqual(call(delay, 1000));
  });

  it('INCREMENT', () => {
    expect(gen.next().value).toEqual(put({ type: 'INCREMENT' }));
  });

  it('done', () => {
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
});
