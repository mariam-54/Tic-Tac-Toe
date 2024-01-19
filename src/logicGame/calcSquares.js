const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function calcWinner(squares) {
  for (let i = 0; i < lines.length; i++) {
    const [x, y, z] = lines[i];
    if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
      return {
        winner: squares[x],
        line: lines[i],
      };
    }
  }
  return null;
}

export function calcBestStep(squares, player) {
  const getArrayDuplicatedCount = (arr) => {
    let count = 0;
    arr.forEach((i) => {
      if (squares[i] === player) {
        count += 1;
      }
    });
    return count;
  };

  const sortedLines = lines.sort((x, y) => {
    const xcount = getArrayDuplicatedCount(x);
    const ycount = getArrayDuplicatedCount(y);
    return ycount - xcount;
  });

  for (let i = 0; i < sortedLines.length; i++) {
    let value = sortedLines[i].find((element) => {
      if (squares[element] === "") {
        return element + "";
      }
      return null;
    });
    if (!value) {
      continue;
    } else {
      return +value;
    }
  }
  return null;
}
