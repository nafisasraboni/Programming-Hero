/* Multiple Students' Attendance 

Create a function named createAttendanceTracker().

Initially, the attendance count should be 0.
The returned function should increase the attendance count by 1 every time it is called.
A separate tracker should be created for each student.
One student's attendance count must not be mixed with another student's count.
The attendance count must remain private.

Expected:

const rahim = createAttendanceTracker();
const karim = createAttendanceTracker();

console.log(rahim()); // 1
console.log(rahim()); // 2
console.log(karim()); // 1
console.log(rahim()); // 3
console.log(karim()); // 2 */

const createAttendanceTracker=()=>{
  let attendence = 0;
  return ()=>{
    attendence++;
    return attendence;
  }
}
const rahim = createAttendanceTracker();
const karim = createAttendanceTracker();

console.log(rahim()); // 1
console.log(rahim()); // 2
console.log(karim()); // 1
console.log(rahim()); // 3
console.log(karim()); // 2