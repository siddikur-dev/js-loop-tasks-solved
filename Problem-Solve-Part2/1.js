// Find the lowest number in the array below.

function lowestNumber(number) {
  let lowest = number[0];
  for (const minNumber of number) {
    if (minNumber < lowest) {
      lowest = minNumber;
    }
  }
  return lowest;
}
const heights2 = [167, 190, 120, 165, 137];

console.log("Minimum Number Array Below:", lowestNumber(heights2));
