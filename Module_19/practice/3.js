/* Task 3: findProductByName(products, name) — find() 
Given an array of product objects, return the first product matching the given name, or undefined if not found.
Input: 
products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag" 
Output: 
{ name: "Bag", price: 500 }
 */

function findProductByName(products, name){
    let findMatchingProduct = products.find(product=>{
        if(product.name===name){
            return product.name
        }else{
            return undefined;
        }
    })
    return findMatchingProduct;
}
console.log(findProductByName([{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag" ))