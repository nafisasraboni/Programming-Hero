const doubleNumbers = (numbers) =>{
    let doubledNum = numbers.map(number=>{
        number*=2;
        return number;
    })
    return doubledNum;
}
const numbers = [2, 5, 10, 7]
console.log(doubleNumbers(numbers))