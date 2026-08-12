//slice
const fruits = ["Mango","Banana","Apple","Kiwi","strawberry"];
console.log(fruits.slice(1,4))

//reduce
let nums = [10,20,30,40,50];
let sum = nums.reduce((accumulator,element,ind,arr)=>{
    console.log(accumulator,element,ind,arr)
    return accumulator+element
},0)
console.log(sum)