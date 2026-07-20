const data = [1, [2, 3], "Hello", ["World", 4]];
const flatten =[];
for (let d of data){
    if(Array.isArray(d)){
        flatten.push(...d);
    }else{
        flatten.push(d);
    }
}
console.log(flatten)
let str =[];
let num =[];
for(let f of flatten){
    if(typeof(f)==='string'){
        str.push(f);
    }else{
        num.push(f)
    }
}
console.log(str);
console.log(num);
