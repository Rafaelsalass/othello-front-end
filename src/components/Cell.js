import React, { Component } from 'react';
import styled from 'styled-components';
import { EMPTY_SPACE, PLAYER_ONE, PLAYER_TWO } from '../utils/constants';
import { baseColors, transitions, commonStyles } from '../utils/theme';

class Cell extends Component{
  render() {
    return (
      <CellStyle
        {...this.props}
      />
    );
  }

  calculateHeight = (id) => {
    const width = document.getElementById(id).offsetWidth;
    this.setState({
      height: width,
    });
  }
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
