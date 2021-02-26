function chessBoard(size = 8) {
  const space = " ";
  const chart = "#";
  const nL = "\n";
  let result = "";

  let num = 0;
  while (num < size) {
    let raw = "";
    while (raw.length < size) {
      if (raw.length % 2 !== 0) {
        if (num % 2 == 0) {
          raw += chart;
        } else {
          raw += space;
        }
      } else {
        if (num % 2 == 0) {
          raw += space;
        } else {
          raw += chart;
        }
      }
    }

    raw += nL;
    num++;
    result += raw;
  }
  console.log(result);
}

chessBoard(24);
