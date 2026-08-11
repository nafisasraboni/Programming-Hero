/* Given an employee object that may or may not have a manager property, return the manager's name safely, or undefined if missing.
Input:  { name: "Mim", manager: { name: "Tanvir" } }
Output: "Tanvir"

Input:  { name: "Rafi" }
Output: undefined
 */

const getManagerName = (employee) => {
    return employee?.manager?.name
}
console.log(getManagerName({ name: "Rafi" }))