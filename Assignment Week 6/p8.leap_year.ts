// Write a program that checks if the given year is leap year or not.
let ifleapyear = 2500;
if (ifleapyear % 4 == 0) {
  if (ifleapyear % 100 !== 0) {
    console.log(`The Year ${ifleapyear} is a Leap Year`);
  } else if (ifleapyear % 100 == 0 && ifleapyear % 400 == 0) {
    console.log(`The Year ${ifleapyear} is a Leap Year`);
  } else {
    console.log(`The Year ${ifleapyear} is Not a Leap Year`);
  }
} else {
  console.log(`The Year ${ifleapyear} is Not a Leap Year`);
}
