// Problem 10: Find the Smallest Number in an Array

let number = [2,3,4,5,6,8];
let smallest = number[0];

// for(let i=0;i<number.length;i++){
//     if(number[i]<smallest){
//         smallest=number[i];
//     } 
// }
// console.log(smallest);

//with function
function findSmallest(num) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] < smallest) {
            smallest = number[i];
        }
    }
    return (smallest);
}
const small = findSmallest(number);
console.log("This is the smallest number:", small);