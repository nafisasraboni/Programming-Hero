/* Given an array of product objects { name, stock }, return only the products where stock is greater than 0.
Input: 
[{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] 
Output: 
[{ name: "Pen", stock: 5 }, { name: "Notebook", stock: 2 }]
 */

const getAvailableProducts=(products)=>{
    let greaterStockProducts = products.filter(product=>{
        if(product.stock>=0){
            return product.stock;
        }
    })
    return greaterStockProducts;
} 
console.log(getAvailableProducts([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] ))