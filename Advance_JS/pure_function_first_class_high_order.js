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


// first class function rules:
// 1. A function can be stored as a variable
// 2. A function can be stored as an array
// 3. A function can be stored as an object
// 4. We can create a function as we need

//first class function rule 1:
let func = function(a,b){
    return a+b
}
console.log(func(4,5))
//or,
function funct(a,b){
    return a+b
}
let functi= funct;
console.log(functi(4,5))

//first class function rule 2:
let arr=[];
arr.push(func)
console.log(arr[0](100,300))

//first class function rule 3:
let myObj ={function : func} // or {func} es6 addition
console.log(myObj.function(650,765))

//first class function rule 4:
function outerFunc(){
    function innerFunc(){
        console.log("Insidious")
    }
    innerFunc();
}
outerFunc();



// Higher order function rules:
// 1. We can pass a function as an argument
// 2.We can return function from another function

function myFunc (a,b){
    return a+b;
}
function myFunc2(a,b,c,d,myFunc){
    return function(){
        let sum = myFunc(a,b)
        let multiply = sum*c*d
        return multiply;
    }
}
let total = myFunc2(5,9,54,67,myFunc)
console.log(total())

