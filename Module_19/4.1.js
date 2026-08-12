/* 1. Private Bank Balance 💰

createBankAccount() নামে একটি function বানাও।

শুরুতে balance হবে 1000
Function থেকে একটি deposit() function return করবে
প্রতিবার deposit(amount) call করলে balance-এর সাথে amount যোগ হবে
Updated balance return করবে
Balance কোনো global variable-এ রাখা যাবে না

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