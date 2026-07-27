// 14-1 : broken conditionals

function checkAdult(age){
    if((age>=18)){
        return "adult";
    }
    return "minor";
}
console.log(checkAdult(17))


// 14-2 : broken conditionals(2)

function canApply(age,hasNID){
    if(age>=18 && hasNID){
        return "Eligible"
    }
    return "not eligible"
}
console.log(canApply(14,true))


// 14-3 : broken conditionals(3)

function eligible(attendence,marks){
    if(attendence>=90 && marks>=80){
        return "eligible for scholarship";
    }else if(attendence>=80 && marks>=50){
        return "eligible for final exam";
    }else{
        return "not eligible";
    }
}
console.log(eligible(85,45));