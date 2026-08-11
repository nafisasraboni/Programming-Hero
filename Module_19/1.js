/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/

const bulkDiscountApplier = (prices, rate) => {
    let applyDiscount = prices.map(price => {
        let discount = 0;
        let totalPrice = 0;
        discount = (price * rate) / 100;
        totalPrice = price - discount;
        return totalPrice;
    })
    return applyDiscount;
}
prices = [500, 1000, 250];
rate = 10;
console.log(bulkDiscountApplier(prices,rate))
console.log(prices)


/*
  Problem 2: Passing Students Filter
  getPassingStudents(students, threshold) — return only the students
  whose marks are greater than or equal to the given threshold.

  Input:
    students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
    ]
    threshold = 60

  Output:
    [
      { name: "Rafi", marks: 75 },
      { name: "Utsho", marks: 60 },
    ]
*/

const getPassingStudents = (students, threshold) =>{
    let newStuInfo = students.filter(student=>{
        let {name,marks}=student;
        if(marks>=threshold){
           return true 
        }else{
            return false
        }
    })
    return newStuInfo   
}
console.log(getPassingStudents(students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
    ],
    threshold = 60))