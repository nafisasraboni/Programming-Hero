//index
const players =["sakib", "mina", "dina", "bina", "pina", "dekka", "porsi"]; //index = 0,1,2,3,4,5,6
    console.log(players.length);

    const player1 = players[0];
    console.log(player1)

    const player5=players[4];
    console.log(player5);

    console.log(players[players.length-1]); //-1 na dile undefined hbe

//index value change
console.log(players)
players[2]="sara";
console.log(players)