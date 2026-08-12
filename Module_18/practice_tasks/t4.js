/* Return [b, a] using array destructuring assignment, no temporary variable.
Input:  
swapValues(5, 10)
Output:
 [10, 5
 */

const swapValues=(a, b)=>{
    return [a,b]=[b,a]
}
console.log(swapValues(5, 10))