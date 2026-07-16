//Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).

const isAdmin = false;
const username = "Sraboni";
const password = 12345678;
const isPaid = true;

const correctUsername = "Sraboni";
const correctPass = 12345678;

if (!isPaid) {
    console.log("Please pay first!!");
}else if(username === correctUsername){
    if(password === correctPass){
        console.log("You are successfully logged in!");
        isAdmin ? console.log("Welcome Admin!") : console.log("Welcome User!")
    }else{
        console.log("Incorrect password");
    }
}else{
    console.log("Incorrect username");
}




