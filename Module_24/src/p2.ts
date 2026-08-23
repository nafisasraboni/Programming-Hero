const getStockStatus=(currentStock:number):string=>{
    if(currentStock===0){
        return `"Out of Stock"`
    }else if(currentStock>=1 && currentStock<=5){
        return `"Almost Sold Out"`
    }else if(currentStock>=6 && currentStock<=20){
        return `"Available"`
    }
    return `"In Stock"`
}
console.log(getStockStatus(0));
console.log(getStockStatus(3));
console.log(getStockStatus(12));
console.log(getStockStatus(50));

// boundary values to double-check:
console.log(getStockStatus(5));
console.log(getStockStatus(6));
console.log(getStockStatus(20));
console.log(getStockStatus(21));
