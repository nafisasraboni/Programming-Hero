//1
function greet (name = 'Guest'){
    return `Hello!, ${name}`;
}
const gree = greet()
console.log(gree);

//2
function coffee(spoon = 1){
    return 'I will get '+ spoon +' spoon of suger';
}
console.log(coffee())