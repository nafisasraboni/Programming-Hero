// key, values and entries method

const user = {
    name : "Moon",
    age:26,
    roll:56
}
const keys = Object.keys(user)
const values = Object.values(user)
const entries = Object.entries(user)
console.log(keys)
console.log(values)
console.log(entries)

for (let e of entries){
    const [key,value]=e;
    console.log(key,value)
}


// delete, seal and freeze method

delete user.age;
console.log(user);

//seal 
const bankAccount ={
    num : "1234",
    balance: 5000
}

console.log(Object.seal(bankAccount))
delete bankAccount.num;
console.log(bankAccount);

//freeze

const birthCertificate = {
    name : "mew",
    bd_date:"22.07.03"
}

Object.freeze(birthCertificate);

console.log(birthCertificate)
delete birthCertificate.name;
console.log(birthCertificate)

birthCertificate.name ="Sraboni"
console.log(birthCertificate)