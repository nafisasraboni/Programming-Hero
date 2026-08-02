//array destructuring

const numbers = [1,3,45,67,78,7];
//console.log(numbers[0])

const [first,second,,fourth,,sixth] = numbers;
console.log(first,second,fourth,sixth)

//object destructuring

const student ={
    name : "Moon",
    age:26,
    roll:56,
    marks:{
        math:44,
        science:50,
        bangla:99
    }
}

const {name:changeName , age, roll, marks:{bangla,science,math}} = student;
console.log(changeName,age,roll,bangla,science,math)

console.log(student.name,student.age,student.roll)