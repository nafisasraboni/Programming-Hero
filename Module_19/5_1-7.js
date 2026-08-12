const myFilter = (numbers, callback) => {
    let resultArray = [];
    for (let num of numbers) {
        if (callback(num)) {
            resultArray.push(num)
        }
    }
    return resultArray;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers=myFilter(numbers,num=>{
    return num%2===0
});

console.log(evenNumbers)