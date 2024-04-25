import React from "react";

const LogFile = (props) => {
  const { turns } = props;
  return (
    <>
      <ol id="log">
        {turns.map((turns) => (
          <li key={`${turns.square.row}${turns.square.col}`}>
            {turns.player}selected {turns.square.row},{turns.square.col}
          </li>
        ))}
      </ol>
    </>
  );
};

export default LogFile;
