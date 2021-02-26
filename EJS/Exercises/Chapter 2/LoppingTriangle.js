function LoopingATriangle(num) {
  let temp = "#";
  for (let i = 1; i <= num; i++) {
    console.log(temp);
    temp += "#";
  }
}

LoopingATriangle(15);
