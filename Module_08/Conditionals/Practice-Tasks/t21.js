// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

let cartTotal = 1400;
let isUser= true;

if(cartTotal>1000){
    if(isUser){
    let discount = (cartTotal*20)/100 ;
    console.log("Discount: "+discount); 
    }else{
    let discount = (carTotal*10)/100 ;
    console.log("Discount: "+discount); 
    }      
}else{
    console.log("No discount");
}