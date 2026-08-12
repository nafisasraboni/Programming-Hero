const extractEmployeeInfo = (employeeObj) =>{
    if(!employeeObj.employee.fullName){
        return "Invalid"
    }else{
        let {employee:{fullName, department},skills:[firstName="No Skills"]} = employeeObj
        return `${fullName} works in ${department} and knows ${firstName}`
    }

}
console.log(extractEmployeeInfo({
  employee: {
    fullName: "Sadia",
    department: "IT"
  },
  skills: ["JavaScript", "React"]
}))