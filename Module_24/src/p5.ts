interface Student {
    name: string,
    marks: number[]
}

interface StudentResult{
    name: string,
    average:number,
    result:string
}
function getStudentResult(student: Student):StudentResult {

    if (student.marks.length === 0) {
        return {
        name : student.name,
        average : 0,
        result : "Can not be published"
    }
    }

    let average = student.marks.reduce((accumulator, currentValue) => {
        accumulator += currentValue;
        return accumulator
    }, 0)
    let averageMarks = average / student.marks.length

    return {
        name : student.name,
        average : averageMarks,
        result : averageMarks>=40 ? "passed":"failed"
    }
}
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}
))