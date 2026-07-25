// Problem 8: Count Words in a Sentence

//without function
let string = "I have my own money";
let words = [];

// for (let s of string){
//     if(s===" "){
//         continue;
//     }else{
//         words.push(s);
//     }
// }
// console.log(words.length);

//with function
function wordCount(string) {
    for (let s of string) {
        if (s === " ") {
            continue;
        } else {
            words.push(s);
        }
    }
    return (words.length);
}
const count = wordCount(string);
console.log("Total word: ",count)