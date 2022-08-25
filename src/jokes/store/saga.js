import { call, put, takeEvery } from 'redux-saga/effects';

import JokeAction from './action';
import { fetchJokeApi } from '../../api';

// worker saga: will be fired on fetch math fact actions
// Generator function ..................................
function* fetchJoke(action) {
  try {
    const res = yield call(fetchJokeApi);
    yield put({ type: JokeAction.FETCH_SUCCESS, payload: { joke: res.joke } });
  } catch (e) {
    yield put({
      type: JokeAction.FETCH_FAILED,
      payload: { message: e.message },
    });
  }
}

// watcher saga: will be fired on action match
function* jokeWatchSaga() {
  yield takeEvery(JokeAction.FETCH_REQUEST, fetchJoke);
}

export default jokeWatchSaga;
