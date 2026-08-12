/*
  Problem 2: Fix the Mutation Bug — Discount Preview
  previewDiscount(cart) — should return a NEW array showing what each
  cart item's price WOULD be after a 10% discount, WITHOUT changing
  the original cart. The buggy version below accidentally mutates the
  original objects because objects/arrays are passed by REFERENCE — writing to item.price inside map() edits the
  very same object the original cart array points to.

  Input:
    cart = [
      { name: "Pen", price: 100 },
      { name: "Bag", price: 500 },
    ]

  Output (new array; original cart price fields unchanged):
    [
      { name: "Pen", price: 90 },
      { name: "Bag", price: 450 },
    ]
*/

// ekhane array spread kore lav nai...object er property er value jeno change 
// na hoi sei jonno,,,array er moddher element spread kore nite hbe...jate original change na hoi.

const previewDiscount = (cart) => {
    let discount = 10;
  return cart.map((item) => {
    let item1={...item}
    item1.price = item1.price - ((item1.price * discount)/100); 
    return item1;
  });
};
const cart =  [
      { name: "Pen", price: 100 },
      { name: "Bag", price: 500 },
    ]
console.log(previewDiscount(cart))
console.log(cart)
