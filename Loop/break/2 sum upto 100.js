// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let number = 1;
let sum = 0;
while (number <= 100) {
  if (number > 100) {
    break;
  }
  sum += number;
  console.log(number);
  console.log(number, "number", " total sum:", sum);
  number++;
}
