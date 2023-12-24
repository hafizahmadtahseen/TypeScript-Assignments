// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax
// if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
let units_consumed = 600;
if (units_consumed > 100 && units_consumed <= 200) {
  console.log(
    `Bill for consumed ${units_consumed} Units with 10% Tax =  ${
      units_consumed + units_consumed * 0.1
    }`
  );
} else if (units_consumed > 200 && units_consumed <= 500) {
  console.log(
    `Bill for consumed ${units_consumed} Units with 15% Tax =  ${
      units_consumed + units_consumed * 0.15
    }`
  );
} else if (units_consumed > 500) {
  console.log(
    `Bill for consumed ${units_consumed} Units with 10% Tax =  ${
      units_consumed + units_consumed * 0.25
    }`
  );
}
