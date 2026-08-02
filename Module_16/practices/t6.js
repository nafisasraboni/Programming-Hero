const extractUserInfo = (user) => {
    console.log(user)
    if(!user.user.name){
        return "Invalid"
    }else{
        
        let {user:{name, age}, hobbies: [firstHobby='nothing yet'] } = user;
        return `${name} (${age}) likes ${firstHobby}`
    }
}
console.log(extractUserInfo({user:{age:30}, hobbies:[]}))
