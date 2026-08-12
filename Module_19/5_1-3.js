const calculateTotal=(salaries)=>{
    let totalSalary = salaries.reduce((accumulator,currentValue)=>{
        return accumulator+currentValue;
    },0)
    return totalSalary;
}
console.log(calculateTotal([15000, 20000, 18000, 25000]))