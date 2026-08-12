/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.

const totalCalculator=(discount,...prices)=>{
  // let sum=0;
  // let total = 0;
  // for(let i=0;i<prices.length;i++){
  //   sum+=prices[i];
    let sum = prices.reduce(
      (accumulator,value)=>accumulator+value,0
    ); 
    let discountt = (sum*discount)/100;
    total = sum-discountt;
  return total;
  }

console.log(totalCalculator(10, 100, 200));


/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/

function mergeArrays(arr1,arr2){
  let merge = [...arr1,...arr2];
  let newArr=[...new Set(merge)];
  //console.log(newArr)  
  return newArr;  
}
console.log(mergeArrays([1,2,3],[2,3,4]))

