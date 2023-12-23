//  - Create a function that takes a positive integer as parameter and uses a for loop to calculate and
// return the factorial of that number.
function factorial(Number: number) {
  if (Number > -1) {
    let result: number = 1;
    for (let i = 1; i <= Number; i++) {
      result = result * i;
    }
    console.log(`${Number}! = ${result}`);
  } else {
    console.log(
      `The Entered number is Negative Integer, Enter Positive Integer!`
    );
  }
  return;
}
factorial(5);
