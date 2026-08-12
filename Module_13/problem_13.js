// Problem 13: Loop Through an Object's Properties

//without function
const student = {
    name: "Nafisa",
    cgpa: 3.71,
    age: 23,
    id: 223311064
}
// for(let key in student){
//     console.log(key,":",student[key])
// }

//with function
function findObject(student) {
    for (let key in student) {
        console.log(key, ":", student[key])
    }
}
findObject(student);
