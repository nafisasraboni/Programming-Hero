// Problem 1: Check if a Number is Even or Odd

//without function
const number = 67;
if(number%2===0){
    console.log("This is an even number")
}else{
    console.log("This is an odd number")
}

//with function
function EvenOddCheck(number) {
    if (number % 2 === 0) {
        return "This is an even number"
    } else {
        return "This is an odd number"
    }
    return EvenOddCheck;
}
const finalResult = EvenOddCheck(97);
console.log(finalResult)
