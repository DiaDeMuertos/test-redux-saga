import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects';

const Fetch = url => {
  return fetch(url).then(response => {
    console.log('DONE...............');
    return response.json();
  });
};

export const delay = ms => new Promise(res => setTimeout(res, ms));

// eslint-disable-next-line require-yield
export function* helloSaga() {
  console.log('Hello Saga!');
}

export function* incrementAsync(action) {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}

export function* watchHelloSaga() {
  yield takeEvery('HELLO_SAGA', helloSaga);
}

function* fetchStrategy() {
  const url = 'http://23.101.180.188:8080/api/strategy/1';
  yield call(Fetch, url);
}

function* watchFetchStrategy() {
  yield takeEvery('STRATEGY_REQUESTED', fetchStrategy);
}

export default function* rootSaga() {
  yield all([watchHelloSaga(), watchIncrementAsync(), watchFetchStrategy()]);
}
