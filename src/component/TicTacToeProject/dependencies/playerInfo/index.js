import React, { useState } from 'react'


const Player = ({ initialName, symbol }) => {

    const [isPlayerName,setisPlayerName]=useState(initialName);
    const [isEdit, setIsEdit] = useState(false);

    const onHandleChange =(e)=>{
        setisPlayerName(e.target.value)
    }

    const editButton = () => {
        setIsEdit((isEdit) => !isEdit)
    }

    const playerName = () => {
        if (isEdit) {
            return <input type='text' value={isPlayerName} required onChange={onHandleChange} />
        } else {
            return <span className="player-name">{isPlayerName}</span>
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