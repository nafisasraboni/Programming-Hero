import UserCard from "./userCard";

export default User;

interface UserProps{
    name:string,
    isLoggedIn:boolean
}

const users:UserProps[]=[
    {name:'Aaul',isLoggedIn:false},
    {name:'Baul',isLoggedIn:true},
    {name:'Caul',isLoggedIn:true},
    {name:'Daul',isLoggedIn:false},
    {name:'Eaul',isLoggedIn:true},
]

// function User(){
//     return (
//         <div>
//             {
//                 users.map(user => <li>{user.name}</li>)
//             }
//         </div>
//     )
// }

function User(){
    return (
        <div>
            {
                users.map(user => <UserCard name={user.name}></UserCard>)
            }
        </div>
    )
}