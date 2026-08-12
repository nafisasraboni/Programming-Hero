/* Task 6: createIdGenerator() — Closures 
Return a function that generates a new sequential ID starting from 1 each time it is called, using an internal counter with no global variable.
 */

const createIdGenerator=()=>{
    let sequential_Id = 1;

    return ()=>{
        return sequential_Id++;
    }
} 
const nextId = createIdGenerator(); 
console.log(nextId()); 
console.log(nextId()); 
console.log(nextId()); 

