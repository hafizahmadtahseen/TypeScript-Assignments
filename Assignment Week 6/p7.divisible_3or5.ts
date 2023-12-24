// Write a program that checks if
// the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
let num = 74;
if (num % 3 == 0 && num % 5 == 0) {
  console.log(`The number ${num} is divisible by both 3 & 5`);
} else if (num % 3 == 0) {
  console.log(`The number ${num} is divisible by only 3`);
} else if (num % 5 == 0) {
  console.log(`The number ${num} is divisible by only 5`);
} else {
  console.log(`The number ${num} is not divisible by 3 or 5`);
}
