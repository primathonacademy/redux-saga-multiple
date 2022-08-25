import { call, put, takeLatest } from 'redux-saga/effects';

import MathAction from './action';

import { fetchMathApi } from '../../api';

// worker saga:
function* fetchFactWorkerSaga() {
  try {
    const fact = yield call(fetchMathApi);

    yield put({
      type: MathAction.FETCH_FACT_SUCCESS,
      payload: { fact: fact, successMessage: 'Fact fetch successful' },
    });
  } catch (e) {
    yield put({
      type: MathAction.FETCH_FACT_ERROR,
      payload: { errorMessage: e.message },
    });
  }
}

// watcher saga:
function* mathWatchSaga() {
  yield takeLatest(MathAction.FETCH_FACT, fetchFactWorkerSaga);
}

export default mathWatchSaga;
