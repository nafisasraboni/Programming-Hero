// 14-4 : Debug a broken array problem(Multi bug edition)

//problem 1

let array = [2,3,4,5,67,8,9];
let newArr = [];
function getTwoValue(arr){
    
    for(let a of array){
       newArr = array.slice(array.length-2,array.length);
    }
    return newArr;
}
console.log(getTwoValue(array));