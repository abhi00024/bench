import React, { useState } from 'react'


const Player = ({ name, symbol }) => {

    const [isEdit, setIsEdit] = useState(false);

    const editButton = () => {
        setIsEdit((isEdit) => !isEdit)
    }

    const playerName = () => {
        if (isEdit) {
            return <input type='text' value={name} required />
        } else {
            return <span className="player-name">{name}</span>
        }
    }

    return (
        <>
            <li>
                <span className="player">
                    <span className="player-name">{playerName()}</span>
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={editButton}>{isEdit ? "Save" : "Edit"}</button>
            </li>
        </>
    )
}

export default Player