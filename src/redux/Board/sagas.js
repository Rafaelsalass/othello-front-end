import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import actions from './actions';
import {
  apiGetGame,
  apiMakeMove,
  apiResetGame,
} from '../../api/apiCalls';
import { GET_GAME } from '../../api/endpoints';
// import { push } from 'connected-react-router';

export function* watchGetGame() {
  yield takeLatest(actions.GET_GAME, function*(action) {
    try {
      const result = yield call (apiGetGame, action.url);
      yield put({
        type: actions.GET_GAME_SUCCESS,
        game: result,
        gameFetch: actions.GET_GAME_SUCCESS,
      });
    } catch (err) {
      yield put({ type: actions.GET_GAME_ERROR });
    }
  });
}

export function* watchMakeMove() {
  yield takeLatest(actions.MAKE_MOVE, function*(action) {
    try {
      yield call (apiMakeMove, action.url);
      yield put({
        type: actions.GET_GAME,
        url: GET_GAME(),
      });
    } catch (err) {
      yield put({
        type: actions.SET_ERROR,
        error: err.response.status,
      });
    }
  });
}

export function* watchResetGame() {
  yield takeLatest(actions.RESET_GAME, function*(action) {
    yield call (apiResetGame, action.url);
    yield put({
      type: actions.GET_GAME,
      url: GET_GAME(),
    });
  });
}

export default function* rootSaga() {
  yield all([
    fork(watchGetGame),
    fork(watchMakeMove),
    fork(watchResetGame),
  ]);
}
