import React from "react";

const GameBoard = (props) => {
  const { onSelectSquare, board } = props;

  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol>
                {row.map((playerSymbol, colIndex) => {
                  return (
                    <li key={colIndex}>
                      <button
                        onClick={() => onSelectSquare(rowIndex, colIndex)}
                        disabled={playerSymbol !== null}
                      >
                        {playerSymbol}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default GameBoard;
