const numbers = [78,89,90,91,92,93,94,95];
console.log(numbers.reverse());

//unshift use kore reverse
const names = ["Mithila","Ena","Payel","Hasina"];
const nameReverse = [];
for(const name of names){
    nameReverse.unshift(name);
    console.log(nameReverse);
}

//reverse for loop use
const p=[1,2,3,4];
for(let i=p.length-1;i>=0;i--){
    console.log(i,p[i]);
}