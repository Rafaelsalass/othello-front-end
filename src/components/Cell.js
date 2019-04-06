import React from 'react';
import styled from 'styled-components';
import { EMPTY_SPACE, PLAYER_ONE, PLAYER_TWO } from '../utils/constants';
import { baseColors, transitions, commonStyles } from '../utils/theme';
import { MAKE_MOVE } from '../api/endpoints';

const Cell = (props) => {
  const handleClick = (event) => {
    const { x, y } = props;
    props.make_move(MAKE_MOVE(y, x));
  }
  return (
    <CellStyle
      {...props}
      onClick={handleClick}
    />
  );
}

export default Cell;

const CellStyle = styled.div`
  width: 100%;
  border-radius: 50%;
  display: block;
  text-align: center;
  ${transitions.defaultTransition};
  box-shadow:${commonStyles.defaultBoxShadow};
  ${props => props.height ? `height: ${props.height}px;` : 'height: 0px;'};
  ${
    props => {
      switch(props.value){
        case EMPTY_SPACE:
          return `background-color: ${baseColors.white};`;
        case PLAYER_ONE:
          return `background-color: ${baseColors.pink};`;
        case PLAYER_TWO:
          return `background-color: ${baseColors.grey};`;
        default:
          return `background-color: ${baseColors.white};`;
      }
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow:${commonStyles.defaulHovertBoxShadow};
  }
`;
