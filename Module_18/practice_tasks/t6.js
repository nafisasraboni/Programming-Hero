/* Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
Input:  
promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev")
Output: 
{ name: "Rafi", title: "Senior Dev" }
(original object still has title: "Junior Dev")
 */

const promoteEmployee=(employee, newTitle)=>{
    let employee2 ={...employee}
    let {name} = employee2
    return {name,title:newTitle}
}
const employee = { name: "Rafi", title: "Junior Dev" }
console.log(promoteEmployee(employee, "Senior Dev"))
console.log(employee)