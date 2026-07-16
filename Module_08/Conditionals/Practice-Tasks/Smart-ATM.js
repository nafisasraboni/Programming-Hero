//Build an ATM withdrawal system that checks whether the user is logged in, has enough balance, and does not exceed the daily withdrawal limit. Show different messages based on success or failure — combine comparison operators, logical operators, if-else, nested if, and ternary operator.

const isLoggedIn = true;
const balance = 12000;
const withdrawAmount = 5000;
const dailyLimit = 10000;
const isCardBlocked = false;

if (!isLoggedIn) {
    console.log("Please login!!");
} else if (!isCardBlocked) {
    console.log("Proceed to withdraw!");
    if (withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            if (withdrawAmount <= dailyLimit) {
                console.log("Withdraw successful");
            } else {
                console.log("Try again tomorrow!");
            }
        } else {
            console.log("Insufficient balance!!");
        }
    } else {
        console.log("Put a positive amount!")
    }
} else {
    console.log("Do necessary work to unblock your card")
}