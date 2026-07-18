//includes

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(5));

const hair =["buns","Ponytail","Openhair","messybun"]
const add = hair.includes("Ponytail");
console.log(add)

//concat
const num1=[2,3,4,5,6];
const num2=[7,8,9,0,1];
const addThem = num1.concat(num2)
console.log(addThem)

//join
const num3=[2,3,4,5,6];
console.log(num3.join("lala,"));//space/onno kichu add hobe

//indexof
const position = num3.indexOf(3)
console.log(position) 

//isArray
console.log(Array.isArray(num3))
console.log(Array.isArray(45))