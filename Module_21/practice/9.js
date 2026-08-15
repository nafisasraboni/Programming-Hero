"use strict";
/* একটি number positive না negative তা ternary operator দিয়ে বের করো।
Input:
num = 5
Output:
Positive
 */
const isPositiveOrNegative = (num) => {
    return num > 0 ? "positive" : "Negative";
};
console.log(isPositiveOrNegative(5));
