// 1st 
function first(a,b,cb){
  let sum = a+b;
  cb(sum)
}
function display(something ){
  console.log(something)
}
first(6,7,display)


// 2nd
function ctMarks(marks,cb){
  setTimeout(()=>{
    console.log("CT marks added")
    cb(marks)
  },2000)
}

function quizMarks(marks,cb){
  setTimeout(()=>{
    console.log("Quiz marks added")
    cb(marks)
  },3000)
}

function assignmentMarks(marks,cb){
  setTimeout(()=>{
    console.log("Assignment marks added")
    cb(marks)
  },4000)
}

function totalMarks(Ct,quiz,assignment)
{
  let sum = Ct + quiz + assignment;
  console.log(sum)
}

ctMarks(10,(Ct)=>{
  quizMarks(9,(quiz)=>{
    assignmentMarks(60,(assignment)=>{
      totalMarks(Ct,quiz,assignment);
    })
  })
})