import React from 'react'

const GameOver = (props) => {

    const {
        winner,
        onRestart
    } = props

    return (
        <>
            <div id="game-over">
                <h2>Game Over!</h2>
                {winner && <p>{winner} won!</p>}
                {!winner && <p>It's a draw!</p>}
                <p>
                    <button onClick={onRestart}>Rematch</button>
                </p>
            </div>
        </>
    )
}

export default GameOver