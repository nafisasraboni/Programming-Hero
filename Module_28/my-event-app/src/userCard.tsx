export default function UserCard({user}){
    return(
        <div>
            <h3>Name: {user.name}</h3>
            <h3>Id: {user.id}</h3>
        </div>
    )
}