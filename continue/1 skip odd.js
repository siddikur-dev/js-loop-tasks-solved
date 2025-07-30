/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let number = 1;
while (number <= 40) {
  if (number % 2 !== 0) {
    number++;
    continue;
  }
  console.log(number);
  number++;
}
