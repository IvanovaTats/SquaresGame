import React from "react";

import "./index.scss"

const SizeSwitcher = ({ onChange }) => {
  const gameSizes = [3, 4, 5, 6, 7];

  return gameSizes.map((size) => {
    return (
      <button
        className="button"
        key={size.toString()}
        onClick={(e) => onChange(size)}
      >
        {size}
      </button>
    );
  });
};

export default SizeSwitcher;
