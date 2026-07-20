const numbers = [1, 2, 3, 4, 5, 6];
let lowest = numbers[0];
let highest = numbers[0];

for (let num of numbers) {
    if (num < lowest) {
        lowest = num;
    }
    if (num > highest) {
        highest = num;
    }
}
console.log("Lowest number:", lowest);
console.log("highest number:", highest);
