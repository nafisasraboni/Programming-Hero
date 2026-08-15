"use strict";
/* দুইটি array merge করো spread operator ব্যবহার করে।
Input:
[1, 2, 3]
[4, 5, 6]
Output:
[1, 2, 3, 4, 5, 6]
 */
const mergeArray = (array1, array2) => {
    let mergedArr = [...array1, ...array2];
    return mergedArr;
};
console.log(mergeArray([1, 2, 3], [4, 5, 6]));
