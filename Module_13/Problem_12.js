// Problem 12: Filter Numbers Greater Than a Value

//without function
let number = [3, 4, 5, 6, 7, 8, 9, 10, 11];
let value = 7;
let number1 = [];

// for (let n of number){
//     if(n<=value){
//         continue;
//     }else{
//         number1.push(n);
//     }
// }
// console.log(number1);

//with function
function filter(num,value) {
    for (let n of number) {
        if (n <= value) {
            continue;
        } else {
            number1.push(n);
        }
    }
    return(number1);
}
const finalFilter = filter(number,value);
console.log(finalFilter)