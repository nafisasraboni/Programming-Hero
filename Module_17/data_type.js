// data types : 1. primitive (string,number,boolean,undefined,null)

let name = "Sraboni";
let age = 23;
let isMarried = false;
let salary = null;
let universityResult = undefined;

let name2 = name;

name = "Payel";
console.log(name2)
console.log(name)

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof salary);
// console.log(typeof universityResult);

// 2. Non-primitive (function, object, array)

let student = {
    name : "Nafisa",
    age : 22,
}

let arr = [2,3,4,5];

function add(a,b){
    return a+b;
}
//console.log(add(5,6))

// console.log(typeof student)
// console.log(typeof arr)
// console.log(typeof add)

let student2 = {...student};

student.id = 223311064;
console.log(student)
console.log(student2)