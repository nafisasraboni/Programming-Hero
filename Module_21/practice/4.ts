/* একটি tuple বানাও যেখানে একজন মানুষের নাম আর বয়স থাকবে।
Input:
["Amina", 22]
Output:
Amina is 22 years old.
 */


const personTuple=(person:[name:string,age:number]):string=>{
    return `${person[0]} is ${person[1]} years old`

}
console.log(personTuple(["Amina", 22]))