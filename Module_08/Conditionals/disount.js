const amount = 7500;

if(amount > 7500){
    const discount=30;
    const disAmount= amount/100*discount;
    const payment = amount - disAmount;
    console.log("Payment after discount: " + payment);
}else if(amount>1000){
    const discount=10;
    const disAmount= amount/100*discount;
    const payment = amount - disAmount;
    console.log("Payment after discount: " + payment);
}else{
    console.log("No discount");
}