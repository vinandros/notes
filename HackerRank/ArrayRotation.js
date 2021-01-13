//Array rotation

const arr = [1, 2, 3, 4, 5];
const countRotation = 4;

// Complete the rotLeft function below.
function rotLeft(a, d) {
  const arr = a;
  const rotation = d;
  let result = arr;
  for (let i = 0; i < rotation; i++) {
    // const [first, ...rest] = result;
    // result = [...rest, first];
    const first = result.shift(); //
    result.push(first); // much fast
  }
  console.log(result);
}

rotLeft(arr, countRotation);
