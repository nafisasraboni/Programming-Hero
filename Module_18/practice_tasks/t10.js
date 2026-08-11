/* Immutable Array Update) Return a new array with the value at index replaced by newValue, without mutating the original array.
Input:  cloneAndUpdate([5, 10, 15], 1, 99)
Output: [5, 99, 15]
(original array still [5, 10, 15])
 */

function cloneAndUpdate(arr, index, newValue){
    let newarr=[...arr];
    newarr[index]=newValue;
    return newarr;
}
let arr = [5, 10, 15]
console.log( cloneAndUpdate(arr, 1, 99))
console.log(arr)