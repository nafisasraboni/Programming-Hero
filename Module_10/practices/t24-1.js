const data = [10, [20, 30], 40, [50, 60]];
let mixData =[];

for(let d of data){
    if(Array.isArray(d)){
        for(let m of d){
            if(Array.isArray(m)){
                mixData.push(...m);
            }else{
               mixData.push(m); 
            }
        }
    }else{
        mixData.push(d);
    }
}
console.log("The new array is: ",mixData );