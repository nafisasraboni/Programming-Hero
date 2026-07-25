// Problem 6: Count Vowels in a String

let string = "i am not a kid";
let vowelCount=[];
// let vowel = ['a', 'e', 'i', 'o', 'u'];

// for (let s of string) {
//         if (s === 'a'||s === 'e'||s === 'i'||s === 'o'||s === 'u') {
//             console.log("Vowel");
//         } else {
//             console.log("no vowel")
//         }
// }

function checkVowel(string) {
    for (let s of string) {
        if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
            console.log("Vowel");
            vowelCount.push(s);

        } else if(s === " "){
            console.log("Gap");
        }else{
            console.log("Consonent")
        }
    }
    return vowelCount.length;
}
const count=checkVowel(string)
console.log("Total number of vowel:",count)