// Problem 9: Find the Largest Number in an Array

//without function
let number = [2, 3, 4, 5, 6, 8];
let largest = number[0];

// for(let i=0;i<number.length;i++){
//     if(number[i]>largest){
//         largest=number[i];
//     } 
// }
// console.log(largest);


//with function
function findLargest(num) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] > largest) {
            largest = number[i];
        }
    }
    return (largest);
}
const large = findLargest(number);
console.log("This is the largest number:", large);