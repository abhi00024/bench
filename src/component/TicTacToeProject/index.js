import React, { useState } from "react";
import gameLogo from "../../assest/game-logo.png"
import "./index.css"
import Player from "./dependencies/playerInfo";
import GameBoard from "./dependencies/GameBoard";
import LogFile from "./dependencies/LogFile";
import { WINNING_COMBINATIONS, deriveActivePlayer, initialBoard } from "./dependencies/util";
import GameOver from "./dependencies/GameOver";


const TicTacToe = () => {
    let winner;
    const [gameTurn, setGameTurn] = useState([])

    const activePlayer = deriveActivePlayer(gameTurn);

    let gameBoard = [...initialBoard.map(array => [...array])];

    gameTurn.forEach(({ square, player }) => {
        const { row, col } = square;
        gameBoard[row][col] = player;
    });

    const winningCombination = WINNING_COMBINATIONS.find(combination => {
        const [firstRow, secondRow, thirdRow] = combination.map(({ row, column }) => gameBoard[row][column]);
        return firstRow && firstRow === secondRow && firstRow === thirdRow;
    });

    if (winningCombination) {
        winner = gameBoard[winningCombination[0].row][winningCombination[0].column];
    }

    const hasDraw = gameTurn.length === 9 && !winner;

    const handleRestart = () => {
        setGameTurn([]);
    }


    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameTurn((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
            return updatedTurns
        });
    }

    return (
        <>
            <header>
                <img src={gameLogo} alt="no-logo" />
                <h1>TicTacToe</h1>
            </header>
            <main>
                <div id="game-container" >
                    <ol id="players" className="highlight-player">
                        <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
                        <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
                    </ol>
                    {(winner || hasDraw) &&
                        <GameOver
                            winner={winner}
                            onRestart={handleRestart}
                        />}
                    <GameBoard
                        onSelectSquare={handleSelectSquare}
                        board={gameBoard}
                    />
                </div>
                <LogFile turns={gameTurn} />
            </main>
        </>
    );
};

export default TicTacToe;
