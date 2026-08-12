const companyInfo = (companyObj) => {
     if(!companyObj.company.companyName){
        return "Invalid"
     }else{
        let {company:{companyName="Unknown",location},employees:[{name,role="No Role"}]}=companyObj
        return `${companyName} (${location}) hired ${name} as ${role}.`
     }
}
console.log(companyInfo({
  company: {
    companyName: "Google",
    location: "USA"
  },
  employees: [
    {
      name: "Alice",
      role: "Engineer"
    }
  ]
}))