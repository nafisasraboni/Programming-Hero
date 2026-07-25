// Problem 15: Return All Even Numbers, Then Their Sum


//without function
let array = [6, 8, 3, 5, 23, 24, 54, 21, 4];
let EvenNum = [];
let sumEvenNum = 0;

// for(let n of array){
//     if(n%2===0){
//         console.log(n);
//         EvenNum.push(n);
//         sumEvenNum+=n;
//     }
// }
// console.log("EvenNum = ",EvenNum);
// console.log("Sum = ",sumEvenNum);

//with function
function sumEven(num) {
    for (let n of array) {
        if (n % 2 === 0) {
            //console.log(n);
            EvenNum.push(n);
            sumEvenNum += n;
        }
    }
    return("EvenNum = ", EvenNum);
    return("Sum = ", sumEvenNum);
}
const sum_even_all = sumEven(array);
console.log("All even numbers : ",EvenNum)
console.log("Total sum : ",sumEvenNum)