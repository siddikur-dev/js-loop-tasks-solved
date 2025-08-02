// For this object below add a property named passenger capacity with value 5

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car.passengerCapacity = 5;
// console.log(car);

for (let carr in car) {
  console.log(carr);
}

// String Reverse

let name = "My Name Is Siddikur Rahman";
let temp = "";

for (i = 0; i <= name.length; i++) {
  let Reverse = name[i] + temp;
  console.log(Reverse);
}
