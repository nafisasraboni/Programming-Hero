export default Profile;

interface ProfileProps{
    name:string,
    age:number,
    favouriteHobby:string
}


function Profile({name,age,favouriteHobby}:ProfileProps){
    return(
        <div>
            <p>Name : {name} </p>
            <p>Age : {age} </p>
            <p>Favourite Hobby : {favouriteHobby} </p>
            <p>My birthYear : {2026-age}</p>
            <div>
            <h1>Hello</h1>
            <p>Welcome</p>
            <p>Extra</p>
            </div>
        </div>          
    )
}