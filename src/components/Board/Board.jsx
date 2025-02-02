import './Board.css'
import React, { useState }  from 'react'
import Square from '../Square/Square';
 
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isBoardFull = squares.every(square => square !== null);
  const isTie = isBoardFull && winner === null;

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (index) => (
    <Square value={squares[index]} onClick={() => handleClick(index)}/>
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]             
    ];
  
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
   
  return (
    <div>   
      <div className="container">

        <div id="nextPlayerId" className="instructions">
          Next player:
          <span> { (xIsNext) ? 'X' : 'O'} </span>
        </div>

        <div id="winnerId" className="winner">
          {winner ? `Winner: ${winner}` : 'Winner: None'}
        </div>
        <div id="tieId" className="tie">
          {isTie ? 'It\'s a tie!' : ''}
        </div>

        <div className="board">
          <div className="row"  >
            {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
          </div>
          <div className="row">
            {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
          </div>
          <div className="row">
            {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
          </div>
        </div> 

        <button className="resetButton" onClick={resetGame}>Reset</button>

      </div>   
    </div>
  )
}

export default Board
