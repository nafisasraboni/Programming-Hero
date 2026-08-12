const data = [1, [2, 3], [4, 5], 6];
const flatten =[];
for (let d of data){
    if(Array.isArray(d)){
        flatten.push(...d);
    }else{
        flatten.push(d);
    }
}
console.log(flatten);
let sum =0;
for(let f of flatten){
    sum+=f;
}
console.log("Flatten sum:",sum);