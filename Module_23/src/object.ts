const studentName1 = "Sraboni"
const studentAge1 = 23
const studentEmail1 = "nafisasraboni@gmail.com"

const studentName2 = "Moon"
const studentAge2 = 26
const studentEmail2 = "muntakim@gmail.com"

const studentName3 = "Payel"
const studentAge3 = 29
const studentEmail3 = "payel@gmail.com"

const sraboni ={
    name:"Sraboni",
    age:23,
    email:"nafisasraboni@gmail.com"
}
const moon ={
    name:"Moon",
    age:26,
    email:"muntakim@gmail.com"
}
const payel ={
    name:"Payel",
    age:29,
    email:"payel@gmail.com"
}

const student=(name:string,age:number,email:string)=>{
    const obj = {name,age,email}
    return obj
}
console.log(student("Sraboni",23,"nafisasraboni@gmail.com"))