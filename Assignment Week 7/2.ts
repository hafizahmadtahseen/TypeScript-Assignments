/*- Implement a simple shopping cart program using an array.
Create functions to add items, remove items, and update quantities using the splice method.
Print the cart's contents after each operation*/

let myCart: any[] = [];
function additem(item: string) {
  myCart.splice(0, 0, item);
  console.log(`${item} is added! `);
  console.log(myCart);
}
function removeitem(item: string) {
  for (let i = 0; i < myCart.length; i++) {
    if (myCart[i] == item) {
      myCart.splice(i, 1);
      console.log(`${item} is removed `);
    }
  }
  console.log(myCart);
}

additem("Mango");
additem("Banana");
additem("Orange");
additem("Kiwi");
removeitem("Mango");
