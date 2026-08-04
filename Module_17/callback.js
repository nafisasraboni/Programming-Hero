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

function calculator(a,b,cb){
    let sum = a+b;
    cb(sum);
}
function totalResult(result){
    console.log(result)
}

calculator(5,5,totalResult);