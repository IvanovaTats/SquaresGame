import React from "react";
import Cell from "../Cell";

const Board = ({ size, ...passThroughProps }) => {
  const matrix = [];

  for (let y = 0; y < size; y++) {
    const line = [];
    for (let x = 0; x < size; x++) {
      line.push(<Cell index={y * size + x} {...passThroughProps} />);
    }

    matrix.push(<div>{line}</div>);
  }

  return <div>{matrix}</div>;
};

export default Board;
