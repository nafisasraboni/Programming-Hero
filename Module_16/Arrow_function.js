// Traditional function

// function sayGreet(name){
//     return `Hello! ${name}`
// }
// console.log(sayGreet("Tootyy Frooty"))

// Arrow function syntax
const sayyGreet = name=> `Hello! ${name}`; //implicit function
console.log(sayyGreet("Tootyyyyyy Frooty"))

// empty parameter 
const sayHi = ()=> `HI`;
console.log(sayHi())

//multiple parameter
const sayMewAndBhow = (a,b) =>{
return `Hello! ${a+b}`
}
console.log(sayMewAndBhow(78,90))

console.log(this) // global parameter

//this in traditional function

let student = {
    name : "Rahim",
    age : 29,
    showName : function(){
        return `${this.name}`
    },
    showAge : ()=>{   //this in arrow function
        return `${this.age}`
    }
}
console.log(student.showName())
console.log(student.showAge())