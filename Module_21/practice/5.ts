/* একটি user object বানাও যেখানে name required, কিন্তু email optional।
Input:
{ name: "Amina" }
Output:
Name: Amina, Email: Not provided
 */

function object(person:{name:string,email?:string}):string{
    return `Name : ${person.name}, Email: ${person.email || "Not provided"}`
}
console.log(object({ name: "Amina" }))