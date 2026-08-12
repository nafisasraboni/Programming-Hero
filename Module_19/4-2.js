/* Login Attempt Counter 🔐

Create a function named createLoginTracker().

Initially, the failed attempt count should be 0.
The returned function should increase the attempt count by 1 every time it is called.
Return the current attempt count after each call.
The attempt count must remain private inside the closure and should not be accessible directly from outside.

Expected:

const tracker = createLoginTracker();

console.log(tracker()); // 1
console.log(tracker()); // 2
console.log(tracker()); // 3
console.log(tracker()); // 4 */

const createLoginTracker=()=>{
  let failedAttempt = 0;
  
  return ()=>{
    failedAttempt++;
    return failedAttempt;
  }
}
const tracker = createLoginTracker();

console.log(tracker()); // 1
console.log(tracker()); // 2
console.log(tracker()); // 3
console.log(tracker()); // 4