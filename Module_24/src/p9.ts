type Deposit={
    type:"deposit",
    amount:number
}

type Withdraw={
    type:"withdraw",
    amount:number
}

function  processTransaction(balance: number, transaction: Deposit | Withdraw):number{
    let newBalance = 0
    if(transaction.type==="deposit"){
        newBalance=balance+transaction.amount
        return newBalance
    }else{
        newBalance=balance-transaction.amount
        return newBalance>=transaction.amount? balance : newBalance
    }
}
console.log(processTransaction(5000, { type: "withdraw", amount: 4000 }))