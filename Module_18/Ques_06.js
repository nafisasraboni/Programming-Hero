/*
  Problem 1: Add Grade to Each Student (Without Changing Original)
  
  You have an array of student objects, each with name and marks.
  Create a NEW array where every student also has a "grade" field,
  based on their marks. The ORIGINAL array must stay exactly the same.

  Grading rule:
    marks >= 90 -> "A+"
    marks >= 80 -> "A"
    marks >= 60 -> "B"
    below 60    -> "Fail"

  Input:
    [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ]

  Output (new array):
    [
      { name: "Rafi", marks: 85, grade: "A" },
      { name: "Karim", marks: 45, grade: "Fail" }
    ]

  Original array must remain untouched (no "grade" field added to it).
*/
let studentObject = [
    { name: "Rafi", marks: 85 },
    { name: "Karim", marks: 45 }
];
const addGrade = (studentObject) => {
    const modifiedObject = studentObject.map(student => {
        const { name, marks } = student;
        let stu_obj = { name, marks }
        if (marks >= 90) {
            stu_obj.grade = "A+"
        } else if (marks >= 80) {
            stu_obj.grade = "A"
        } else if (marks >= 60) {
            stu_obj.grade = "B"
        } else {
            stu_obj.grade = "Fail"
        }
        return stu_obj;

    })
    return modifiedObject;
}
console.log(addGrade(studentObject))
console.log(studentObject)

/*
  Problem 2: Cart Total Calculator
  
  You have an array of cart items, each with a name, price, and qty
  (quantity). Calculate:
    1. Total number of items in the cart (sum of all qty)
    2. Total cost (sum of price x qty for each item)

  Then print one final message using a template string:
    "Total: X items, Y Taka"

  Input:
    [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]

  Output:
    "Total: 3 items, 300 Taka"

  Bonus: if the cart is missing (null/undefined), don't crash —
  print "Total: 0 items, 0 Taka" instead.
*/

const totalCalculator = (array)=>{
    let totalItems = 0;
    let totalPrice = 0;

    for(let a of array){
        totalItems+=a.qty;
        totalPrice+=a.price*a.qty;
    }
    return `Total: ${totalItems ? totalItems : 0} items, ${totalPrice? totalPrice : 0} Taka`
}
const array = [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]
console.log(totalCalculator(array));