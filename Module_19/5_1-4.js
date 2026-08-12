const performOperation = (a, b, operation) => {
    return operation(a,b);
}
const add = (a,b) => {
    return a + b;  
}
const subtract = (a,b) => {
    return a - b;  
}
const multiply = (a,b) => {
    return a * b;  
}
const division = (a,b) => {
    return a / b;  
}

console.log(performOperation(10, 5, add))
console.log(performOperation(10, 5, subtract))
console.log(performOperation(10, 5, multiply))
console.log(performOperation(10, 5, division))