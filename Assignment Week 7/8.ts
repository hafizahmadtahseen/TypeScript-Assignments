/*Implement a program that takes a list of temperatures in Celsius as input from the user.
Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array.
Use a for loop to perform the conversion for each temperature.*/
function CtoF(c: number[]) {
  let f: number[] = [];
  for (let i = 0; i < c.length; i++) {
    f[i] = (c[i] * 9) / 5 + 32;
  }
  console.log(f);
}
CtoF([0, 55, -32, -100]);
