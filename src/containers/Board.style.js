import styled from 'styled-components';
import { baseColors } from '../utils/theme';

const BoardStyle = styled.div`
  color: ${baseColors.white};

  .board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    max-width: 450px;
    grid-gap: 15px;
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0px auto;
    align-items: center;
    justify-content: center;
  }

  .information {
    display: flex;
    max-width: 600px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    h3 {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  p {
    text-align: center;
    margin: 0 auto;
  }

  .control {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    button {
      text-align: center;
      background-color: ${baseColors.pink};
      color: ${baseColors.white};
      border: none;
      width: 200px;
      height: 25px;
      text-transform: uppercase;
      border-radius: 3px;
    }
  }

`

export default BoardStyle;
