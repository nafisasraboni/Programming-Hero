// 14-2 : return the sum of all numbers from 1 to n

const range = 9;
let sum = 0;
function summ(range) {
    for (let i = 0; i <= range; i++) {
        sum += i;
    }
    return (sum);
}
console.log(summ(range));

// 14-2.1 : return the sum of all numbers in the array

let array = [12.98, 23.6767, 34.86756, 45.34, 67.676667, 89.6786, 66.98]
let sumA = 0;
function summA(array) {
    for (let i = 0; i < array.length; i++) {
        sumA += Number(array[i].toFixed(3));
    }
    return (sumA);
}
console.log(summA(array));


//14-3.1 : broken loop

let array3 = [2, 3, 4, 5, 6, 67, 88, 86];
let evenNum = [];

function even(num) {
    for (let a of array3) {
        if (a % 2 === 0) {
            evenNum.push(a);
        }
    }
    return evenNum.length;
    
}
console.log(even(array3))


