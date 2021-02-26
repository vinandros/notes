// divisible by 3 print Fizz
// divisible by 5 print Buzz
// by both FizzBuzz

function FizzBuzz(limit) {
  for (let num = 1; num <= limit; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log("FizzBuzz");
      continue;
    }
    if (num % 3 == 0) {
      console.log("Fizz");
      continue;
    }
    if (num % 5 == 0) {
      console.log("Buzz");
      continue;
    }
    console.log(num);
  }
}

FizzBuzz(20);
