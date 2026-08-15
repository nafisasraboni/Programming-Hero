/* একটি TypeScript program বানাও যেখানে একজন user-এর নাম, বয়স, email, skills, আর active status থাকবে। এরপর সব তথ্য print করবে।
Input:
{
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true
}
 */

function programTypeScript (obj: {
    name: string,
    age: number,
    email: string,
    skills: string[],
    active: boolean
}){
    //let tsProgram1 = {...tsProgram }
    return obj;
}
console.log(programTypeScript({
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
}))