function degreeCelsiusToFahrenheit(Degree) {
  let Deg = (Degree * 9) / 5 + 32;
  return Deg;
}

const result = degreeCelsiusToFahrenheit(26);
console.log("Fahrenheit:", result);
