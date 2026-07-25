//Problem 2: Sum of a Range of Numbers (1 to N)


//without function
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

// for (let num of Numbers) {
//     sum += num;
// }
// console.log(sum);

//with function
function sumOfRange(array) {
    for (let num of Numbers) {
        sum += num;
    }
    return sum;
}
const finalSum = sumOfRange(Numbers);
console.log(finalSum);