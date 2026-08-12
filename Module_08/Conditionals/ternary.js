/* Ternary --> 3 parts */

// const age =25;
// const hasVoterId = false;

// // if(age>=18){
// //     console.log("Vote will be granted");
// // }else{
// //     console.log("Age boro hou babu")
// // }

// //shortcut : ternary operator
// age>=18 ? console.log("Vote will be granted") : console.log("Age boro hou babu")

let price = 3000;
const hasLeader = false;

price>2500 || hasLeader===true ? price=0 : price+=500;
console.log(price);