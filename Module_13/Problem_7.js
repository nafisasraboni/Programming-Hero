// Problem 7: Check if a String is a Palindrome

//without function
let string = "civic";

// let splitt = string.split("");
// let reverse = splitt.reverse();
// let revJoin = reverse.join("");
// console.log(revJoin);

// if(string === revJoin){
//     console.log("This string is palindrome")
// }else{
//     console.log("This string is not palindrome") 
// }

//with function
function palindromeCheck(string) {
    let splitt = string.split("");
    let reverse = splitt.reverse();
    let revJoin = reverse.join("");
    console.log(revJoin);

    if (string === revJoin) {
        return ("This string is palindrome")
    } else {
        return ("This string is not palindrome")
    }
}
const palindrome= palindromeCheck(string)
console.log(palindrome)