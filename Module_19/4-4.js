/* Private Score Tracker 

Create a function named createScoreTracker().

Initially, the score should be 0.
The returned function should take points as an argument.
Each time the function is called, add the given points to the score.
Return the updated score.
The score must not be directly accessible from outside the function.

Expected:

const player1 = createScoreTracker();

console.log(player1(10)); // 10
console.log(player1(20)); // 30
console.log(player1(15)); // 45

Important: Check whether multiple trackers maintain their own separate state.

const player1 = createScoreTracker();
const player2 = createScoreTracker();

console.log(player1(10)); // 10
console.log(player2(50)); // 50
console.log(player1(20)); // 30 */

const createScoreTracker=()=>{
  let score = 0;
  const pointCount=(point) =>{
    score+=point;
    return score;
  }
  return pointCount;
}
const player1 = createScoreTracker();

console.log(player1(10)); // 10
console.log(player1(20)); // 30
console.log(player1(15)); // 45