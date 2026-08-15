//union

function calculateTax (amount: number|string , rate:number):number{
    if(typeof amount==="string"){
        amount = parseFloat(amount)
    }
    return amount*rate;
}

//null
const myFuture : number|null = null;

//undefined
let myMoney:number|undefined;


//---------not imp for now----------

//any
const fruit:any ="mango"

//unknown

//never
