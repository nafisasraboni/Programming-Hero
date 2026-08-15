"use strict";
/* একটি function বানাও যা যেকোনো সংখ্যক number নিয়ে তাদের sum করবে।
Input:
sumAll(1, 2, 3, 4)
Output:
10
 */
function sumAll(...nums) {
    let reduced = nums.reduce((accumulator, value) => {
        accumulator = accumulator + value;
        return accumulator;
    }, 0);
    return reduced;
}
console.log(sumAll(1, 2, 3, 4));
