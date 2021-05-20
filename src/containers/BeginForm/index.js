import React, { useState } from "react";

import SizeSwitcher from "./../../components/SizeSwitcher";

import "./index.scss";

const BeginForm = ({ onStartClick }) => {
  const [size, setSize] = useState(null);
  const [firstPlayer, setFirstPlayer] = useState("");
  const [secondPlayer, setSecondPlayer] = useState("");

  const handleStartClick = () => {
    onStartClick(size, firstPlayer, secondPlayer);
  };

  return (
    <>
      <h1 className="welcome">Welcome to "Squares" game!</h1>
      <h2>Please enter players names</h2>
      <h3>First player:</h3>
      <input
        type="text"
        value={firstPlayer}
        onChange={(e) => setFirstPlayer(e.target.value)}
        placeholder="Mike"
      />
      <div>
        <h3>Second player:</h3>
        <input
          type="text"
          value={secondPlayer}
          onChange={(e) => setSecondPlayer(e.target.value)}
          placeholder="Bob"
        />
      </div>
      <div>
        <h2>Please choose matrix size.</h2>
        <SizeSwitcher onChange={(size) => setSize(size)} />
        <div>
          <button className="start-button" onClick={handleStartClick}>{"Start"}</button>
        </div>
      </div>
    </>
  );
};

export default BeginForm;
