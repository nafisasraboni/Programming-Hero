// const commitment = "I will work hard.";

// const parts = commitment.split("");
// console.log(parts);

// //reverse
// const reversedParts = parts.reverse();
// const reverseCommitment = reversedParts.join("");
// const check = Array.isArray(reversedParts);
// console.log(reverseCommitment);
// console.log(check);

// //for loop diye 

// let reverseCom = '';
// for (const letter of commitment){
//     reverseCom = letter + reverseCom;
//     console.log(letter, "=>", reverseCom);
// }

let name = "My name is Cindrella.";
console.log(name);

const spName = name.split("");
//console.log(spName);

const revSpName = spName.reverse();
//console.log(revSpName);

const joRevSpName = revSpName.join("");
console.log(joRevSpName);

//for loop
let reverse = "";
for(let n of name){
    reverse = n + reverse;
    console.log(n,"=>",reverse);
}