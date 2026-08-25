const getAgeRatingAccess=(age:number):string=>{
    return age<7? "E (Everyone)" : age>=7 && age<=12 ? "E10+ (Everyone 10+)"
    : age>=13 && age<=16 ? "T (Teen)" : "M (Mature)"

}
console.log(getAgeRatingAccess(5))
console.log(getAgeRatingAccess(10))
console.log(getAgeRatingAccess(15))
console.log(getAgeRatingAccess(20))

