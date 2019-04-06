import {
  API_KEY,
  BASE_URL,
} from './constants';

export const GET_GAME = () => {
  return `${BASE_URL}?token=${API_KEY}`;
};

export const MAKE_MOVE = (x, y) => {
  return `${BASE_URL}/movements?token=${API_KEY}&x=${x}&y=${y}`;
}

export const RESET_GAME = () => {
  return `${BASE_URL}?token=${API_KEY}`;
}
