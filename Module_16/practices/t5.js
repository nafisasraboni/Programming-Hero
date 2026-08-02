//1

const  mergeInventory = (arr1, arr2) => {
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        let mergeArray = [...arr1,...arr2]
        return mergeArray;
    }else{
        return "Invalid"
    }
}
console.log(mergeInventory([1,2],[3,4]))


//2

const highestScore = (scores) => {
    if(Array.isArray(scores)){
        let highestScore = Math.max(...scores)
        return highestScore;
    }else{
        return "Invalid"
    } 
}
console.log(highestScore("3,7,2"))
