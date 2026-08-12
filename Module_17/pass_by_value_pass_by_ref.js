// pass by value

let name = "Payel";

function myfunc1(myname){
    myname = "Bristy";
    return myname;
}
console.log(myfunc1());
console.log(name);

//pass by reference 

let studentMarks = [210,450,567];
function eachMarks(marks){
    marks.push(780);
    return marks;
}
console.log(eachMarks(studentMarks));
console.log(studentMarks);