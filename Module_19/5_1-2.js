const getEvenNumbers = (numbers) => {
    let evenNums = numbers.filter((number) => {
        return number % 2 === 0
    })
    return evenNums;
}
let numbers = [1, 4, 7, 10, 13, 20, 25];
console.log(getEvenNumbers(numbers))