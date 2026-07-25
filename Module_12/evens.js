const numbers = [12, 87, 14, 51, 36, 46];
let evenNum = [];

function ev(array) {
    for (let num of numbers) {
        console.log(num);
        if (num % 2 === 0) {
            evenNum.push(num);
        }
    }
    console.log(evenNum);
    return evenNum;
}
const evenNumbers = ev(numbers);
console.log("returnning the even numbers:",evenNumbers)
