import React, { useState } from "react";
import BeginForm from "./../containers/BeginForm";
import GameBoard from "../containers/GameBoard";

import "./home.scss"

const Game = () => {
  const [isStarted, setStarted] = useState(false);
  const [size, setSize] = useState(0);
  const [firstPlayer, setFirstPlayer] = useState("");
  const [secondPlayer, setSecondPlayer] = useState("");

  const handleStart = (size, firstPlayer, secondPlayer) => {
    setStarted(true);
    setSize(size);
    setFirstPlayer(firstPlayer);
    setSecondPlayer(secondPlayer);
  };

  return (
    <div className="page">
      <BeginForm onStartClick={handleStart} />
      {isStarted && <GameBoard size={size} firstPlayer={firstPlayer} secondPlayer={secondPlayer}/>}
    </div>
  );
};

export default Game;
