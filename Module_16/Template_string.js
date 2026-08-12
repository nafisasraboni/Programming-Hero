let name = 'Sraboni'

let location = `Badda,Dhaka`
console.log(location)

let price=1000;
let quantity = 10
let messege = "Hello! " + name +". Your bill is "+price*quantity ;

//template strings + multiline
let messeges = `Hello! ${name}. Your bill is ${price*quantity}
nanannanananna
bahbabdabudf
kjfuwhuorhfwhg
`
console.log(messege)
console.log(messeges)

//
let amount = 700;
function deliveryPayment(name,amount){
    let messegess = `Hello! ${name}. 
    Your bill is ${amount}.`
    return messegess;
}
console.log(deliveryPayment("Sidra",800));