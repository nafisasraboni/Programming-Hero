/* Task 8: applyBonusPoints(users, bonus) — Pass by Reference vs Value 
Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.
Input: users = [{ name: "Rafi", points: 20 }], bonus = 5 
Output: [{ name: "Rafi", points: 25 }]
 (original array's object must still have points: 20)
 */

function applyBonusPoints(users, bonus){
    let increasedPoints = users.map(user=>{
        let user1={...user};
        user1.points+=bonus;
        return user1;
    })
    return increasedPoints;
}
const users =[{ name: "Rafi", points: 20 }]
console.log(applyBonusPoints(users, bonus = 5 ))
console.log(users)