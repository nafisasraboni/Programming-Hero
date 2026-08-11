/*
  Problem 1: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/

const findUserById=(users, id1)=>{
    let singleUser = users.find(user=>{
        return user.id === id1;  
    })
    if(singleUser){
        return singleUser;
    }else{
        return "user not found"
    } 
}
console.log(findUserById(users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ],
    id1 = 2))