let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatten = [];
for (let arr of nestedArray) {
    if (Array.isArray(arr)) {
        for (let num of arr) {
            if (Array.isArray(num)) {
                flatten.push(...num);
            } else {
                flatten.push(num);
            }
        }
    }
}
console.log(flatten)