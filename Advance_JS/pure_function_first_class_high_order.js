//programming paradigm => 1.object oriented paradigm,
//                        2.functional paradigm

//pure function rules:
// 1. it gives same result every time if the arguments are same
// 2. it doesn't cause any obsevable side effects


// pure function
function myFunc (a,b){
    return a+b;
}
console.log(myFunc(5,6))
console.log(myFunc(5,6))
console.log(myFunc(5,6))
console.log(myFunc(5,6))

//impure function => change hocche
let sum=0;
function myFunction (num){
    return sum+=num
}
console.log(myFunction(8))
console.log(myFunction(8))
console.log(myFunction(8))
console.log(myFunction(8))


