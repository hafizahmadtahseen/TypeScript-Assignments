/*- Create a function that takes an array, an index, and a value as parameters.
Inside the function, use the splice method to insert the value at the specified index in the array.
Return the modified array.*/

function insertinarray(array: any[], index: number, value: any) {
  array.splice(index, 0, value);
  return console.log(array);
}
insertinarray([25, 75, 88, 90], 3, 55);
