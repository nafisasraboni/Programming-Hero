/*
  Problem: Filtered Cart Total (Chaining filter -> map -> reduce)
  getExpensiveItemsTotal(cart, minPrice) — from the cart, keep only
  items priced at or above minPrice, then calculate the total cost
  (price * qty) of just those items — all in ONE chained expression.

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Headphone", price: 800, qty: 1 },
      { name: "Notebook", price: 50, qty: 2 },
      { name: "Watch", price: 1500, qty: 1 },
    ]
    minPrice = 500

  Output:
    2300   (800*1 + 1500*1)*/

const getExpensiveItemsTotal = (cart, minPrice) => {

    let total = cart.filter((item) => item.price >= minPrice)
        .map((item) => item.price * item.qty)
        .reduce((accumulator, element) => accumulator = accumulator + element, 0)

    // let filterItems = cart.filter(item=>{
    //     return item.price>=minPrice
    // })
    // let mapItems = filterItems.map(item=>{
    //     return item.price*item.qty
    // })
    // let reduceItems = mapItems.reduce((accumulator,element)=>{
    //     accumulator = accumulator+ element
    //     return accumulator
    // },0)
    
    return total
}
console.log(getExpensiveItemsTotal(cart = [
    { name: "Pen", price: 20, qty: 3 },
    { name: "Headphone", price: 800, qty: 1 },
    { name: "Notebook", price: 50, qty: 2 },
    { name: "Watch", price: 1500, qty: 1 },
],
    minPrice = 500))