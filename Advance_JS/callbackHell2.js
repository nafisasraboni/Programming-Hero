function assignment1Marks(mark,cb){
  setTimeout(()=>{
    console.log("assignment 1 mark published ")
    cb(mark)
  },1000)
}

function assignment2Marks(mark,cb){
  setTimeout(()=>{
    console.log("assignment 2 mark published ")
    cb(mark)
  },2000)
}

function assignment3Marks(mark,cb){
  setTimeout(()=>{
    console.log("assignment 3 mark published ")
    cb(mark)
  },3000)
}

function assignment4Marks(mark,cb){
  setTimeout(()=>{
    console.log("assignment 4 mark published ")
    cb(mark)
  },4000)
}

function allAssignmentAverageMarks(ass1,ass2,ass3,ass4){
  let average = (ass1+ass2+ass3+ass4)/4;
  console.log(average)
}

assignment1Marks(60,(ass1)=>{
  assignment2Marks(60,(ass2)=>{
    assignment3Marks(60,(ass3)=>{
      assignment4Marks(60,(ass4)=>{
        allAssignmentAverageMarks(ass1,ass2,ass3,ass4)
      })
    })
  })
})