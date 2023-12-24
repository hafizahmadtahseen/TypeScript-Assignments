// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
let days = 553;
let week = Math.floor(days / 7);
let dayss = days % 7;
console.log(`${days} Days = ${week} weeks and ${dayss} days`);
export {};
