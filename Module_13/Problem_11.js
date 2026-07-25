// Problem 11: Sum and Average of an Array

//without function
const number = [2, 3, 4, 5, 6, 7, 8, 9];
let totalElement = number.length;
let sum = 0;
let average = 0;

// for (let n of number){
//     sum+=n;
//     average = (sum/totalElement);
// }
// console.log(sum);
// console.log(average);

//with function
function sumAverage(num) {
    for (let n of number) {
        sum += n;
        average = (sum / totalElement);
    }
    return(sum);
    return(average);
}
const getSumAverage = sumAverage(number);
console.log("Sum of this array:",sum)
console.log("Average of this array:",average)