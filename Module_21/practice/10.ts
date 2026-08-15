/* একটি variable undefined হলে default value print করো।
Input:
username = undefined
Output:
Guest
 */

const checkVariable = (variable:string|undefined = "Guest"):string=>{
    if(variable===undefined){
        return `${variable}`
    }else{
        return `${variable}`
    }
}
console.log(checkVariable(undefined))
