import axios from 'axios';

export const apiGetGame = (url) => axios.get(url)
  .then(response => response.data)
  .catch(err => {
    console.log(err);
    return err;
  });

export const apiMakeMove = (url) => axios.post(url)

export const apiResetGame = (url) => axios.delete(url)
  .then(response => response.data)
  .catch(err => {
    return err;
  });
