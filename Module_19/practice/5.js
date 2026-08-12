/* Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce 
Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.
Input: 
products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 
Output: 144
 */

const getDiscountedTotalForCategory = (products, category) => {
    let total = products.map(product => (product))
        .filter(item => {
            if (item.category === category) {
                return item.category;
            }
        }).reduce((accumulator, item) => {
            let discount = 0.1;
            accumulator = accumulator + (item.price - (item.price * discount))
            return accumulator
        }, 0)

    return total
}
console.log(getDiscountedTotalForCategory([{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery"))
