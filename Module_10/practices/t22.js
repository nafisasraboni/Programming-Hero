const mixedArray = [1, "two", 3, "four", 5, "six"];
let str=[];
let num=[];
for(let i=0;i<mixedArray.length;i++){
    if(typeof(mixedArray[i])==='string'){
        str.push(mixedArray[i]);       
    }else{
        num.push(mixedArray[i]);      
    }
}
console.log("String:",str);
console.log("numbers:", num);