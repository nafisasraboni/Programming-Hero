// function outerfunction(){
//     let sum=9;
//     return function(){
//         return sum++;
//     }
// }
// let count = outerfunction();
// console.log(count());
// console.log(count());
// console.log(count());


function cashManage (){
    let amount= 0;
    return function(payment){
        amount+=payment;
        return amount; 
    }
}
let coffeeShop = cashManage();
let resturantBill = cashManage()
let flowerBill = cashManage()
let teaBill = cashManage()
//console.log(coffeeShop());
console.log(resturantBill(600));
console.log(resturantBill(900));
console.log(flowerBill(356));
console.log(teaBill(234));
console.log(resturantBill(200));

