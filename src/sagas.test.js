import { call, put } from 'redux-saga/effects';

import { incrementAsync, delay } from './sagas';

it('incrementAsync Saga test', () => {
  const gen = incrementAsync();

  expect(gen.next().value).toEqual(call(delay, 1000));

  expect(gen.next().value).toEqual(put({ type: 'INCREMENT' }));

  expect(gen.next()).toEqual({ done: true, value: undefined });
});
