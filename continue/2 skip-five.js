/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let number = 55; number <= 85; number += 2) {
  if (number % 5 === 0) {
    
    continue;
  }
  console.log(number);
}
