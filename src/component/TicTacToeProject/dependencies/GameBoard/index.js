import React, { useState } from 'react'
import { initialBoard } from '../util'

const GameBoard = (props) => {
    
    const {
        onSelectSquare,
        activePlayerSymbol
    }=props

    const [gameBoard, setgameBoard] = useState(initialBoard);

    const handleSelectSquare=(rowIndex,colIndex)=>{
        setgameBoard((prevGameBoard)=> {
            const updateBoard =[...prevGameBoard.map(innerArray=>[...innerArray])]
            updateBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateBoard
        });
        onSelectSquare()
    }

    return (
        <>
            <ol id='game-board'>
                {
                    gameBoard.map((row, rowIndex) => {
                        return(
                        <li key={rowIndex}>
                            <ol>
                                {row.map((playerSymbol,colIndex)=>{
                                    return(
                                    <li key={colIndex}>
                                        <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                                    </li>
                                    )
                                })}
                            </ol>
                        </li>
                        )
                    })
                }
            </ol>
        </>
    )
}

export default GameBoard