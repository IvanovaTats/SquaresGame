import React, { useState } from "react";

import "./index.scss";

const cellColors = {
  red: 1,
  white: 2,
};

const Cell = ({ onCellClick, color, index }) => {
  const [isDisabled, setDisabled] = useState(false);
  const [cellStyle, setCellStyle] = useState("cell");

  const onClick = () => {
    const style =
      color === cellColors.red ? "cell cell_red" : "cell cell_white";
    setCellStyle(style);
    setDisabled(true);    
    onCellClick(index);
  };

  return (
    <button
      className={cellStyle}
      onClick={onClick}
      disabled={isDisabled}
    ></button>
  );
};

export default Cell;
