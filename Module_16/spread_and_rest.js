// array spread

let numbers = [2,3,4,5,67,76];
console.log(...numbers);

// 
let maxNumbers = Math.max(...numbers);
let minNumbers = Math.min(...numbers)
console.log(maxNumbers)
console.log(minNumbers)

let num2 = [...numbers,400,566,778]
numbers.push(20000000)
console.log(numbers)
console.log(num2)

//object spread
let student = {
    name : 'Moon',
    id : 223311056,
    section : 'B'
}

let stu2 = {...student}
console.log(stu2)

// Rest operator
function sum(a,b,c,...restNumbers){
    let sum = 0;
    for(let num of restNumbers){
        sum+=num;
    }
    return a+b+c+sum;
}
console.log(sum(3,4,5,6,77,88,33,32,45,67,43,44,55,66,99))