interface Product {
    name: string,
    price: number
}
const calculateCartTotal = (product: Product[]): number => {
    let total = product.reduce((accumulation, currentvalue) => {
        accumulation += currentvalue.price
        return accumulation
    }, 0)
    return total

}
const product = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];

console.log(calculateCartTotal(product));
