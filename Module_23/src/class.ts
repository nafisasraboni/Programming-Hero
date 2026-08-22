/*
name
email
age
marks
*/   

class Student{
    name:string 
    email:string 
    age:number 
    marks:number 

    // constructor ---> special method
    constructor(name:string, email:string ,age:number,marks:number){
        this.name=name;
        this.email=email;
        this.age=age;
        this.marks=marks;
    }
}

//instantiate
//instance

const sra = new Student("Sraboni","s@gmail.com",23,100);
const payel = new Student("Poo","p@gmail.com",31,110);

console.log(sra)
console.log(payel)