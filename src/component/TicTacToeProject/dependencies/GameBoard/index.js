import React from 'react'
import { initialBoard } from '../util'

const GameBoard = () => {
    return (
        <>
            <ol id='game-board'>
                {
                    initialBoard.map((row, rowIndex) => {
                        return(
                        <li key={rowIndex}>
                            <ol>
                                {row.map((playerSymbol,colIndex)=>{
                                    return(
                                    <li key={colIndex}>
                                        <button>{playerSymbol}</button>
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