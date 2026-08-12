const numbers = [3, 4, 3, 2, 6, 5, 8];

function sumOfArray(array) {
    console.log(array);
    let sum = 0;
    for (let n of array) {
        console.log(n);
        sum += n;
    }
    console.log("Total sum : ", sum);
    return sum;
}
const res = sumOfArray(numbers)
console.log(res)