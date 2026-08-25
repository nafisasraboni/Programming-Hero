type Track = {
    title: string;
    minutes: number
}

const calculateTotalListeningTime = (tracks: Track[]): number =>{
    let total=tracks.reduce((accumulator,currentValue)=>{
        accumulator +=currentValue.minutes;
        return accumulator
    },0)
    return total 
}
const tracks = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];


console.log(calculateTotalListeningTime(tracks))