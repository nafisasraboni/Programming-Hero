//Build an online shopping checkout system that verifies stock availability, user login, payment status, and membership. Apply discounts for premium members and show different checkout messages based on all conditions — combine comparison operators, logical operators, if-else, nested if, and ternary operator.

const hasStock = true;
const username = "Moon";
const password = "moonx.dev";
const hasMembership = true;
const correctUsername = "Moon";
const correctPassword = "moonx.dev";

if(!hasStock){
    console.log("Stock out! Try few days later.");
}else if(username===correctUsername){
    if(password===correctPassword){
        console.log("Login successful!!");
        if(hasMembership){
            let productPrice = 1000;
            let discount =productPrice*40/100;
            productPrice = (productPrice - discount)
            console.log("You get 40% discount: "+ productPrice);
        }else{
            console.log("No discount.")
        }
        const isPaid = false;
        isPaid ? console.log("Payment Done!"):console.log("Payment not done")
    }else{
        console.log("Incorrect Password");
    }
}else{
     console.log("Incorrect Username");
}