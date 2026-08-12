/* Return { first, rest } where first is the first element and rest is an array of all remaining elements.
Input:  [10, 20, 30, 40]
Output: { first: 10, rest: [20, 30, 40] }
*/

function splitFirstRest(arr){
    let [first,...rest] = arr;
    return {first,rest:rest}
}
console.log(splitFirstRest ([10, 20, 30, 40]))