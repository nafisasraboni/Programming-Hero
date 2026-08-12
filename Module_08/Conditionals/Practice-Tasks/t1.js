//Take two variables price1 and price2, and compare them using all comparison operators (==, ===, !=, !==, >, <, >=, <=), printing each result with console.log.

const price1 = 30000;
const price2 = 40000;

if(price1==price2){
    console.log("Loose Equal");
}

if(price1===price2){
    console.log("Strict Equal");
}

if(price1!=price2){
    console.log("Not loose Equal");
}

if(price1!==price2){
    console.log("Not Strict Equal");
}

if(price1>price2){
    console.log("Greater than");
}

if(price1<price2){
    console.log("Less than");
}

if(price1>=price2){
    console.log("Greater Equal");
}

if(price1<=price2){
    console.log("Less Equal");
}