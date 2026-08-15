//object
const user1 :{namee:string,id:number,color:string} = {
    namee:"Nafisa",
    id:223311064,
    color:"black"
}

const {namee,...rest}=user1

//array
const arr1:number[]=[1,2,3]
const arr2:number[]=[4,5,6]

const allArr:number[]=[...arr1,...arr2]