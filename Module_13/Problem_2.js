//Problem 2: Sum of a Range of Numbers (1 to N)


//without function
let range = 30;
let sum = 0;

// for (let i = 0; i <= range; i++) {
//     sum += i;
// }
// console.log(sum);


//with function
 function sumOfRange(array) {
     for(let i=0; i<=range; i++){
       sum += i;
    }
    return sum;
 }
 const finalSum = sumOfRange(range);
 console.log(finalSum);