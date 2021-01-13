const Array = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let results = [];
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      const sumFirstLine = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      const sumSecondLine = arr[i + 1][j + 1];
      const sumThirdLine =
        arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      results = [...results, sumFirstLine + sumSecondLine + sumThirdLine];
    }
  }
  console.log(Math.max(...results));
}
hourglassSum(Array);
