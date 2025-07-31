// Display sum of all the odd numbers from 81 to 131.
let number = 81;
let sumOdd = 0;
while (number <= 131) {
  //   console.log(number);
  sumOdd += number;
  number += 2;
}
// console.log("sumOdd", sumOdd);
// Display sum of all the even numbers from 206 to 311.
let i = 206;
let sumEven = 0;
while (i <= 311) {
  if (i % 2 === 0) {
    console.log(i);
  }
  sumEven += i;
  i += 2;
}
console.log("sumEven", sumEven);
