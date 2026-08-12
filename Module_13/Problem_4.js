// Problem 4: FizzBuzz (1 to N)
// loop through numbers from 1 to n. If a number is 
// divisible by 3, print "Fizz"; if divisible by 5, 
// print "Buzz"; if divisible by both, print "FizzBuzz"; 
// otherwise, print the number itself.


//without function
let numbers = 10;
// for (let i = 1; i <= numbers; i++) {
//     if (i % 3 === 0) {
//         console.log("Divided by 3 : Fizz")
//     }
//     if (i % 5 === 0) {
//         console.log("Divided by 5 : Buzz")
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("Divided by both : FizzBuzz")
//     } else {
//         console.log("Divided by none : ",i);
//     }
// }

//with function
function FizzBuzzProblem(numbers) {
for (let i = 1; i <= numbers; i++) {
    if (i % 3 === 0) {
        console.log("Divided by 3 : Fizz")
    }
    if (i % 5 === 0) {
        console.log("Divided by 5 : Buzz")
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Divided by both : FizzBuzz")
    } else {
        console.log("Divided by none : ",i);
    }
}
}
FizzBuzzProblem(numbers);

