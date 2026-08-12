const data = ["A", ["B", "C"], "D", ["E"]];
let string = [];
for(let d of data){
    if(Array.isArray(d)){
        string.push(...d);
    }else{
        string.push(d);
    }
}
console.log(string);

