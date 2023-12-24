// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
let temp = 32;
let unit = "F";
if (unit == "C") {
  let Fhr = temp * (9 / 5) + 32;
  console.log(`Temperature ${temp}°C = ${Fhr}°F`);
}
if (unit == "F") {
  let Cnt = ((temp - 32) * 5) / 9;
  console.log(`Temperature ${temp}°F = ${Cnt}°C`);
}
