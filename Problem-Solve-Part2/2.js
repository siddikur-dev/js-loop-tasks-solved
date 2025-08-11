// Find the friend with the smallest name.
const string = ["ron", "rafi", "rahim", "robin", "rashed"];

let smallestName = string[0];

for (const element of string) {
  if (element.length < smallestName.length) {
    smallestName = element;
  }
}
console.log(smallestName);
