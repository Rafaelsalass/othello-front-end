const actions = {
  GET_GAME: 'GET_GAME',
  get_game: (url) => ({
    type: actions.GET_GAME,
    url: url,
  }),
  GET_GAME_SUCCESS: 'GET_GAME_SUCCESS',
  GET_GAME_ERROR: 'GET_GAME_ERROR',
  MAKE_MOVE: 'MAKE_MOVE',
  make_move: (url, x, y) => ({
    type: actions.MAKE_MOVE,
    url: url,
    x: x,
    y: y,
  }),
  MAKE_MOVE_SUCCESS: 'MAKE_MOVE_SUCCESS',
  MAKE_MOVE_ERROR: 'MAKE_MOVE_ERROR',
  RESET_GAME: 'RESET_GAME',
  reset_game: (url) => ({
    type: actions.RESET_GAME,
    url: url,
  }),
  SET_ERROR: 'SET_ERROR',
};

export default actions;
