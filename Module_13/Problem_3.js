// Problem 3: Factorial of a Number

//without function
let factorial = 5;
let mul = 1;

// for (let i = 1; i <= factorial; i++) {
//     mul *= i;
// }
// console.log(mul);


//with function
 function mulOffactorial(factorial) {
     for(let i=1; i<=factorial; i++){
       mul *= i;
    }
    return mul;
 }
 const finalmul = mulOffactorial(factorial);
 console.log(finalmul);