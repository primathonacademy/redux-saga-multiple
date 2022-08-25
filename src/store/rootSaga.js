import { all, spawn } from 'redux-saga/effects';

import jokeWatchSaga from '../jokes/store/saga';
import mathWatchSaga from '../maths/store/saga';

function* rootSaga() {
  yield all([spawn(mathWatchSaga), spawn(jokeWatchSaga)]);
}

export default rootSaga;
