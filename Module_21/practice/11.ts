/* একটি unknown type variable declare করো এবং পরে type check করে string হলে print করো।
Input:
"Hello"
Output:
Hello
 */

const checkVariable1 = (variable:unknown):string=>{
    if(typeof variable==="string"){
        return `${variable}`
    }else{
        return `not a string`
    }
}
console.log(checkVariable1("Hello"))