//  - Write a program that takes temperature and check it.
// If it is cold then suggest the user to wear warm clothes and so on according to the weather
let out_temp = -50;
if (out_temp <= 21) {
  console.log(`It is Cold outside, Please wear warm clothes`);
} else if (out_temp >= 22 && out_temp <= 27) {
  console.log(`It is Pleasent outside, Please wear normal clothes`);
} else {
  console.log(`It is Hot outside, Please wear light clothes`);
}
