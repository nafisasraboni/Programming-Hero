const numbers = [3,4,5,6,3,4,7,9,1,4,3];
const unique =[];
for(let num of numbers){
    if(unique.includes(num)){
        continue;
    }else{
        unique.push(num);
    }
}
console.log(unique);