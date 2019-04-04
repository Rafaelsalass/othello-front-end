import actions from './actions';

const initState = {
  board: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ],
}

export default function board(state = initState, action) {
  switch (action.type) {
    case actions.FETCH_NEWS_SUCCES:
      return {
        ...state,
        newsState: action.newsState,
        news: action.news,
      }
    case actions.FETCH_NEWS_ERROR:
      return {
        ...state,
        newsState: actions.FETCH_NEWS_ERROR,
      }
    case actions.UPDATE_VALUE:
      return {
        ...state,
        [action.propety]: action.value,
      }
    default:
      return state;
  }
}
