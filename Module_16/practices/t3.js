const generateReceipt = (customerName,items,total)=>{
    if(Array.isArray(items) && items.length!==0){
        return `Receipt for ${customerName} 
        Items: ${items} 
        Total: ৳ ${total}` 
    }else{
        return "Invalid"
    }
}
console.log(generateReceipt("Tanvir", [], 0))