import { put, takeEvery, all, call } from 'redux-saga/effects';

export const delay = ms => new Promise(res => setTimeout(res, ms));

// eslint-disable-next-line require-yield
export function* helloSaga() {
  console.log('Hello Saga!');
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* watchHelloSaga() {
  yield takeEvery('HELLO_SAGA', helloSaga);
}

export default function* rootSaga() {
  yield all([watchHelloSaga(), watchIncrementAsync()]);
}
