import React, { useState } from "react";
import Board from "../../components/Board";
import { calculateResult } from "./../../utils/calculateResult";

import "./index.scss";

const players = {
  first: 1,
  second: 2,
};

const Game = ({ firstPlayer, secondPlayer, size }) => {
  const [boardArray, setBoardArray] = useState(new Array(size * size).fill(0));
  const [activePlayer, setActivePlayer] = useState(players.first);
  const [firstPlayerSteps, setFirstPlayerStep] = useState(0);
  const [secondPlayerSteps, setSecondPlayerStep] = useState(0);

  const handleCellClick = (index) => {
    const newGameMatrix = boardArray.slice();
    newGameMatrix.splice(index, 1, activePlayer);
    setBoardArray(newGameMatrix);

    if (activePlayer === players.first) {
      setFirstPlayerStep(firstPlayerSteps + 1);
      setActivePlayer(players.second);
    } else {
      setSecondPlayerStep(secondPlayerSteps + 1);
      setActivePlayer(players.first);
    }
  };

  let winner = "";
  if (firstPlayerSteps + secondPlayerSteps === size * size) {
    const firstPlayerCount = calculateResult(boardArray, size, players.first);
    const secondPlayerCount = calculateResult(boardArray, size, players.second);
    
    winner =
      firstPlayerCount > secondPlayerCount
        ? firstPlayer
        : firstPlayerCount < secondPlayerCount
        ? secondPlayer
        : "it is draw!";
  }

  return (
    <div className="paper">
      <Board onCellClick={handleCellClick} size={size} color={activePlayer} />
      <div className="player">
        {firstPlayer}: {firstPlayerSteps}
      </div>
      <div className="player">
        {secondPlayer}: {secondPlayerSteps}
      </div>
      {!!winner && <h1 className="winMesaage">Congratulations {winner}!</h1>}
    </div>
  );
};

export default Game;
