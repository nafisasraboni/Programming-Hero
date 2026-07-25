// number parameter
function comp(num1,num2){
    const sum = num1+num2;
    return sum; 
}
const res = comp(555,777);
console.log("Total:",res);

// string parameter
function name(name){
    const add = name + ' ' +"Chowdhury";
    return add; 
}
const fullName = name("Nafisa");
console.log("Fullname:",fullName);

//boolean parameter
function adult(isAdult,age){
    if(isAdult === true){
        return true;
    }else{
        return false;
    }
}
const boy=adult(true,21);
console.log("Is he adult? = ",boy);

//array parameter
function firstElementDouble (array){
    const doubleFirstElement = num[0]*2;
    return doubleFirstElement;
}
const num = [1,2,3,4,5];
const double = firstElementDouble(num);
console.log(double)

//object parameter
const student = {
    name : "Faiza",
    age : 21,
    hobby : "Photography"
}

function stu (student){
    console.log(student);
    const hob = student.hobby;
    return hob;

}
const studd=stu(student);
console.log(studd)
