import { all, fork } from 'redux-saga/effects';
import boardSagas from './Board/sagas';
export default function* rootSaga(getState) {
  yield all([
    fork(boardSagas),
  ]);
}
