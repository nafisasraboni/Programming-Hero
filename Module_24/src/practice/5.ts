interface Player {
    name: string;
    scores: number[]
}

interface resultPlayer {
    name: string, 
    average: number, 
    rank: string 
}

function getPlayerStats(player: Player): resultPlayer | undefined {

    if(player.scores.length){
        return{
            name:player.name,
            average:0,
            rank:"No ranks"
        }
    }

    let total = player.scores.reduce((accumulator, currentValue) => {
        accumulator += currentValue
        return accumulator
    }, 0)

    let average = total / player.scores.length

    if (average >= 80) {
        return {
            name:player.name,
            average:average,
            rank:"MVP"
        }
    }else{
        return{
            name:player.name,
            average:average,
            rank:"Rookie"
        }
    }
}
console.log(getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50]
}))
