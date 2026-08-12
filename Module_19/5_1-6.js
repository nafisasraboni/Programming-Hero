const calculatePrice=(price, operation)=>{
    return operation(price);
}
const discount10=(price)=>{
    let discount=10;
    return price-((price*discount)/100)
}

const addTax15 = (price)=>{
    let tax =15;
    return price+((price*tax)/100)
}

const doublePrice = (price)=>{
    return price*=2;
}

console.log(calculatePrice(1000, discount10));
console.log(calculatePrice(1000, addTax15));
console.log(calculatePrice(1000, doublePrice));