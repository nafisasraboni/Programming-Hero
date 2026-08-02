const user = {
    name : "Sraboni",
    age : 21,
    favFood : ["Pizza", "Burger", "Momos"],
    favMovie :{
        horror : "Horror Story",
        comedy : "Dhamaal",
        crime : "Section 370"
    }
}
console.log(user)
console.log(user.favFood);
console.log(user["favFood"]);
console.log(user.favMovie.comedy);
console.log(user["favMovie"]["comedy"]);

//optional chaining
console.log(user?.favMovie?.comedy?.drama); //gracefully error dilo

//object looping
for (let key in user){
    console.log(key,user[key])
}