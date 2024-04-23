import React from "react";
import gameLogo from "../../assest/game-logo.png"
import "./index.css"
import Player  from "./dependencies/playerInfo";
import GameBoard from "./dependencies/GameBoard";

const TicTacToe = () => {
    
    return (
        <>
            <header>
                <img src={gameLogo} alt="no-logo" />
                <h1>TicTacToe</h1>
            </header>
            <main>
                <div id="game-container">
                    <ol id="players">
                   <Player initialName="Player 1" symbol ="X"/>
                   <Player initialName="Player 2" symbol ="O"/>
                    </ol>
                    <GameBoard />
                </div>
            </main>
        </>
    );
};

export default TicTacToe;
