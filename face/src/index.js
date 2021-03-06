import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function Square(props){
  
    return (
      <button 
        className='square' 
        onClick={()=> props.onClick()}
      >
          {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: false
    }
  }

  resetGame() {
    let squares = Array(9).fill(null);
    let xIsNext = true;
    let winner = false;
    this.setState({squares: squares, xIsNext: xIsNext, winner: winner})
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (!this.state.winner) {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      
      const winner = calculateWinner(squares);
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        winner: winner
      });
    }
  }

  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />;
  }

  render() {
    
    let status = '';
    if (this.state.winner) {
      status = 'Winner : ' + this.state.winner;
    } else {
      status = 'Next Player:' + (this.state.xIsNext ? 'X' : 'O');
    }

    return(
      <div>
        <div className='Status'>
          {status}
        </div>
        <div className='board'>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        </div>

        <div className='reset'>
          <button className='b_reset' onClick={() => this.resetGame()}>
            Reset Game
          </button>
        </div>
      </div>
    )
  }
}



class Game extends React.Component {
  // constructor(){
  //   super(props);
  //   this.state = {};
  // }

  renderBoard(params) {
    return <Board />;
  }

  render(){
    return (
      <div className='game'>
        <div className='board'>
          <Board />
        </div>
      </div>
      
    )
  }
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
    <Board />,
  // </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}