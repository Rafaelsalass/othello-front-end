import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from '../components/Cell';
import BoardStyle from './Board.style';

class Board extends Component{
  state = {
    height: null
  }

  componentDidMount() {
    this.calculateHeight('00');
    window.addEventListener('resize', (event) => {
      this.calculateHeight('00');
    });
  }

  calculateHeight = (id) => {
    const width = document.getElementById(id).offsetWidth;
    this.setState({
      height: width,
    });
  }

  render() {
    const { board } = this.props;
    return (
      <BoardStyle>
        <div className='board'>
          {
            board.map((row, rowIndex) => {
              return row.map((column, columnIndex) => {
                return(
                  <Cell
                    id={`${rowIndex}${columnIndex}`}
                    key={`${rowIndex}${columnIndex}`}
                    value={board[rowIndex][columnIndex]}
                    x={rowIndex}
                    y={columnIndex}
                    height={this.state.height}
                  />
                );
              });
            })
          }
        </div>
      </BoardStyle>
    );
  }
}

export default connect(
  state => ({
    board: state.board.board,
  }),
  {
  }
)(Board);
