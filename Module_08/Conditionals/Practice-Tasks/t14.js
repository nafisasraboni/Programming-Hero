//Using age and hasID, use nested if-else to check whether someone is eligible to vote.

const age = 32;
const hasID = true;

if(age>=18){
    if(hasID){
        console.log("Eligible for vote");
    }else{
        console.log("Get a voter ID");
    }
}else{
    console.log("Grow Up little kiddo");
}