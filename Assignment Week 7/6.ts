/*- Write a program having an array of numbers
if the number is negative it should remove the negative number from the array.*/
let pNum: number[] = [-5, 2, -66, -98, 757, 0, 5, -110];

for (let i = 0; i < pNum.length; i++) {
  for (let j = 0; j <= i; j++) {
    if (pNum[i] < 0) {
      pNum.splice(i, 1);
    }
  }
}
console.log(pNum);
