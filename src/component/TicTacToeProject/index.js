import React, { useState } from "react";
import gameLogo from "../../assest/game-logo.png"
import "./index.css"
import Player  from "./dependencies/playerInfo";
import GameBoard from "./dependencies/GameBoard";

const TicTacToe = () => {
    const [activePlayer, setActivePlayer] = useState('X');

    const handleSelectSquare=()=>{
        setActivePlayer((currActivePlayer)=>currActivePlayer==='X'? 'O':"X");
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
                   <Player initialName="Player 1" symbol ="X" isActive={activePlayer==="X"}/>
                   <Player initialName="Player 2" symbol ="O" isActive={activePlayer==="O"}/>
                    </ol>
                    <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
                </div>
            </main>
        </>
    );
};

export default TicTacToe;
