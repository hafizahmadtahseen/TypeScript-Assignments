/*- Create a function that takes an array of numbers as parameter.
Use a for loop to calculate and return the sum of all the numbers in the array.*/
function arraysum(u: number[]) {
  let sum = 0;
  for (let i = 0; i < u.length; i++) {
    sum = sum + u[i];
  }
  console.log(sum);
}
arraysum([5, 5, 10, -10, 100]);
