//scope
// 3 types : global, block, function

// 1. global Scope

let name = "Nafisa"

if(true){
    console.log(name)
}

for(let i=0;i<=7;i++){
    console.log(name)
}

// 2.block scope

if(true){
    let age = 90
    console.log(age)
}
//console.log(age)

// 3.Function scope
function add(a,b){
    let sum = a+b;
    return sum;
}
console.log(add(9,8))
console.log(sum)