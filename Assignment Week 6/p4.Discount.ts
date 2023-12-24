// Write a program that calculates the discount for a product based on its price.
// If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let act_price = 50;
if (act_price > 100) {
  let disc_price = act_price * 0.9;
  console.log(`10% Discounted price of $${act_price} = $${disc_price}`);
} else {
  let disc_price = act_price * 0.95;
  console.log(`5% Discounted price of $${act_price} = $${disc_price}`);
}
