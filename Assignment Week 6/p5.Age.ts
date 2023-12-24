/*Create a program that determines the category of a user-provided age. 
If the age is between 0 and 12, print "Child." 
If it's between 13 and 19, print "Teenager." Otherwise, print "Adult.*/
let age = 18;
if (age >= 0 && age <= 12) {
  console.log(` Your age is ${age}, You are Child.`);
} else if (age >= 13 && age <= 19) {
  console.log(` Your age is ${age}, You are Teenager.`);
} else {
  console.log(` Your age is ${age}, You are Adult.`);
}
