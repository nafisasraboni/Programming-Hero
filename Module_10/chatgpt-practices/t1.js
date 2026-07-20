//Student Marks Analyzer

let marks = [45, 78, 90, 32, 67, 90, 21, 78, 55];

//1
console.log("Mark: ", marks);

//2
for (let m of marks) {
    if (m >= 40) {
        console.log("You are passed. You got: ", m)
    }
}

//3
let failed = [];
for (let m of marks) {
    if (m < 40) {
        failed.push(m)
    }
}
console.log("Total failed : ", failed.length);

//4 & 5
let highest = marks[0];
let lowest = marks[0];
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < lowest) {
        lowest = marks[i];
    }
    if (marks[i] > highest) {
        highest = marks[i];
    }
}
console.log("Lowest mark: ", lowest);
console.log("Highest mark: ", highest);

//6
console.log(marks.includes(100));

//7
console.log(marks.shift());
console.log(marks);

//8
marks.unshift(88);
console.log(marks);

//9
marks.push(65);
console.log(marks);

//10
for (let m of marks) {
    if (m > 70) {
        console.log(m);
    }
}

//11
console.log(marks.indexOf(67));

//12
let newMarks = [81, 50, 61];

//13
let allMarks = marks.concat(newMarks);
console.log(allMarks);
const sorted = allMarks.sort();
console.log(sorted);

//14
let five = allMarks.slice(0, 5);
console.log(five);

//15
let cut = allMarks.splice(11, 2);
console.log(cut);