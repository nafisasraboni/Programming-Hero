/* 1. Private Bank Balance 💰

Problem: Create a Bank Account Function

Create a function named createBankAccount().

The initial balance should be 1000.
The function should return a deposit() function.
Every time deposit(amount) is called, the amount should be added to the balance.
The updated balance should be returned after each deposit.
The balance must not be stored in any global variable.

Expected:

const account = createBankAccount();

console.log(account(500)); // 1500
console.log(account(200)); // 1700
console.log(account(300)); // 2000 */

const createBankAccount=()=>{
  let amount=1000;
  const diposite=(balance)=>{
    amount+=balance;
    return amount
  }
  return diposite;
}
const account = createBankAccount();

console.log(account(500)); 
console.log(account(200)); 
console.log(account(300));