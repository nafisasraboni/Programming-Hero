type GeneralPatient={
    name: string,
    age: number,
    type:"general"
}

type EmergencyPatient={
    name: string,
    age: number,
    type: "emergency",
    emergencyLevel: number
}


function getPatientStatus(patient: GeneralPatient | EmergencyPatient):string{
    if(patient.type==="general"){
        return `General patient`
    }else{
        return patient.emergencyLevel===1?  "Critical emergency" : patient.emergencyLevel===2?  "Serious emergency" : patient.emergencyLevel===3? "Moderate emergency" : "Invalid"
    }
}
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }))
console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 }))
console.log(getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 }))