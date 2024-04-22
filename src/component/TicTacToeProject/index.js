import React from "react";
import gameLogo from "../../assest/game-logo.png"
import "./index.css"
import Player  from "./dependencies/playerInfo";

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
                   <Player name="Player 1" symbol ="X"/>
                   <Player name="Player 2" symbol ="O"/>
                    </ol>
                    GAME BOARD
                </div>
            </main>
        </>
    );
};

export default TicTacToe;
