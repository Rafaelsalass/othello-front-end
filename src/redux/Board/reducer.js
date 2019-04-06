import actions from './actions';

const initState = {
  game: {
    boardRows: [
      ['_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', 'W', 'B', '_', '_', '_'],
      ['_', '_', '_', 'B', 'W', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_'],
    ],
    currentPlayer: 'BLACK',
  },
  error: ' ',
}

export default function board(state = initState, action) {
  switch (action.type) {
    case actions.GET_GAME_SUCCESS:
      return {
        ...state,
        game: action.game,
        gameFetch: action.gameFetch,
      }
    case actions.GET_GAME_ERROR:
      return {
        ...state,
        gameFetch: actions.GET_GAME_ERROR,
      }
    case actions.SET_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state;
  }
}
