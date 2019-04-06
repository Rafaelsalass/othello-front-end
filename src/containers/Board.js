import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from '../components/Cell';
import BoardStyle from './Board.style';
import actions from '../redux/Board/actions';
import { GET_GAME, RESET_GAME } from '../api/endpoints';

class Board extends Component{
  state = {
    height: null
  }

  componentDidMount() {
    this.calculateHeight('00');
    window.addEventListener('resize', (event) => {
      this.calculateHeight('00');
    });
    this.props.get_game(GET_GAME());
  }

  calculateHeight = (id) => {
    const width = document.getElementById(id).offsetWidth;
    this.setState({
      height: width,
    });
  }

  handleReset = () => {
    this.props.reset_game(RESET_GAME());
  }

  handleError = (error) => {
    switch (error){
      case 409:
        return 'Game is finished or position is not empty.';
      case 400:
        return 'The movement is invalid.';
      default: 
        return 'Keep on playing!';
    }
  }

  render() {
    const { game, make_move, get_game, error } = this.props;
    return (
      <BoardStyle>
        <div className='information'>
          <h3>
            {`Turn: ${game.currentPlayer === 'BLACK' ? 'black' : 'pink'}`}
          </h3>
          <h3>
            {`Pink: ${game.whiteCount}`}
          </h3>
          <h3>
            {`Black: ${game.blackCount}`}
          </h3>
        </div>
        <p>
          {this.handleError(error)}
        </p>
        <div className='board'>
          {
            game.boardRows.map((row, rowIndex) => {
              return row.map((column, columnIndex) => {
                return(
                  <Cell
                    id={`${rowIndex}${columnIndex}`}
                    key={`${rowIndex}${columnIndex}`}
                    value={game.boardRows[rowIndex][columnIndex]}
                    x={rowIndex}
                    y={columnIndex}
                    height={this.state.height}
                    get_game={get_game}
                    make_move={make_move}
                    GET_GAME={GET_GAME}
                  />
                );
              });
            })
          }
        </div>
        <div className='control'>
          <button onClick={this.handleReset}>
            Reset Game
          </button>
        </div>
      </BoardStyle>
    );
  }
}

export default connect(
  state => ({
    board: state.board.board,
    game: state.board.game,
    error: state.board.error,
  }),
  {
    get_game: actions.get_game,
    make_move: actions.make_move,
    reset_game: actions.reset_game,
  }
)(Board);
