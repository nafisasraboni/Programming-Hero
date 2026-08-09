// function studentInfo(cb){
//     //console.log(callback);
//     cb();
// }

// function myInfo(){
//     let aboutMe = {
//         name : "Nafisa",
//         age:67
//     }
//     console.log (aboutMe);
// }

// console.log(studentInfo(myInfo))

// function calculator(a,b,cb){
//     let sum = a+b;
//     cb(sum);
// }
// function totalResult(result){
//     console.log(result)
// }

// calculator(5,5,totalResult);



function registerStudent(cb){
    console.log("User is registering. Need more data");

    cb();
    return cb();
}

function userBasicInfo(){
    let student={
        name:"Moon",
        age:26,
        town:"Raj"
    }
    return student;
}
console.log(registerStudent(userBasicInfo));



function fruitPrice(cb){
    cb();
    return cb();
}
function total(mango,apple,banana){
    let sum = 250+676+453;
    return sum;
}
console.log(fruitPrice(total))