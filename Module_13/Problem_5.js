// Problem 5: Reverse a String

//without function
let string = "I am Sraboni";
//     const splitt= s.split("");
//     console.log(splitt)
//     const reverse = splitt.reverse();
//     const reverseJoin = reverse.join("");
//     console.log(reverseJoin)


//with function

function revStr(string){ 
    let splitt= string.split("");
    //console.log(splitt)
    let reverse = splitt.reverse();
    let reverseJoin = reverse.join("");
    console.log(reverseJoin);   
}
revStr(string);
