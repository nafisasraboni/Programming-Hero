"use strict";
/* একটি function লেখো যা একটি number নিয়ে check করবে সেটা even কি না।
Input:
isEven(8)
Output:
true
 */
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(8));
