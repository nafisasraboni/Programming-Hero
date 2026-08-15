"use strict";
/* একটি variable undefined হলে default value print করো।
Input:
username = undefined
Output:
Guest
 */
const checkVariable = (variable = "Guest") => {
    if (variable === undefined) {
        return `${variable}`;
    }
    else {
        return `${variable}`;
    }
};
console.log(checkVariable("undefined"));
