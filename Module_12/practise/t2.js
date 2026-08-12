const person = {
    name:"Nadia",
    age:23,
    natinality:"Bangladeshi"
}
function voter(object){
    console.log("This is the object:",object);
    const check = person.age;
    if(check>=18){
        return true;
    }else{
        return false;
    }
}
const verify = voter(person)
console.log("Is he a voter? = ",verify)