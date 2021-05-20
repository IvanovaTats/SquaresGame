export function calculateResult(boardArray, size, player) {
  let processedCells = [];
  let playerCells = [];
  let maxCount = 0;
  let cellIndex = boardArray.indexOf(player);

  while (cellIndex >= 0) {
    playerCells.push(cellIndex);
    let nextCell = 0;

    while (playerCells.length >= nextCell) {
      cellIndex = playerCells[nextCell];
      // find neighbour's indexes
      const nextCellIndex = cellIndex + 1;
      const underCellIndex = cellIndex + size;

      //check if neighbours are the same player
      if (
        boardArray[nextCellIndex] === player &&
        !playerCells.includes(nextCellIndex)
      ) {
        playerCells.push(nextCellIndex);
      }
      if (
        boardArray[underCellIndex] === player &&
        !playerCells.includes(underCellIndex)
      ) {
        playerCells.push(underCellIndex);
      }
      
      //take next cell in playersCells & update to first neighbour
      nextCell++;
    }

    //check if player has cells
    cellIndex = boardArray.findIndex((el, index) => {
      return (
        el === player &&
        !playerCells.includes(index) &&
        !processedCells.includes(index)
      );
    });

    maxCount = playerCells.length > maxCount ? playerCells.length : maxCount;
    processedCells = [processedCells, ...playerCells];

    playerCells.length = 0;
  }

  return maxCount;
}
