/* Shopping Cart Item Counter 

Create a function named createCartCounter().

Initially, the cart should contain 0 items.
The returned function should take quantity as an argument.
Each time the function is called, increase the item count according to the given quantity.
Return the total number of items in the cart.
Do not use any global variable.

Expected:

const cart = createCartCounter();

console.log(cart(2)); // 2
console.log(cart(3)); // 5
console.log(cart(1)); // 6 */

const createCartCounter=()=>{
  let item = 0;
  const quantityCount=(quantity) =>{
    item+=quantity;
    return item;
  }
  return quantityCount;
}
const cart = createCartCounter();

console.log(cart(2)); // 2
console.log(cart(3)); // 5
console.log(cart(1)); // 6