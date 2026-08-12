let array = [2,4,6,8];
// let double=[];
// for(let i=0;i<array.length;i++){
//     double.push(array[i]*2)
// }
// console.log(double);

//using map
let double=array.map((element)=> element*2);
console.log(double);

//foreach
let rolls = [1,2,3,4,5,6];
rolls.forEach((element,ind,arr)=>{
    console.log(element,ind,arr)
})

//filter 
let nums=[100,200,300,400,500]
let expensiveProducts = nums.filter((element)=>{
return element>=200;
})
console.log(expensiveProducts)

//find
let num=[100,200,300,400,500]
let expensiveProduct = num.find((element)=>{
return element>=200;
})
console.log(expensiveProduct)


let phones = [{
    model:"iphone15",
    price:87000
},
{
    model:"iphone16",
    price:92000
},
{
    model:"iphone17",
    price:97000
},
{
    model:"samsung_Galaxy",
    price:30000
},
{
    model:"motorola",
    price:20000
}
];

let expensivePhones = phones.filter(phone => phone.price>=50000)
console.log(expensivePhones)

let cheapPhones = phones.filter(phone=> phone.price<=32000)
console.log(cheapPhones)