export default Task;

interface TaskPropsType {
  task: string;
  isDone: boolean;
}

//Conditional rendering( using if-else )

// function Task({ task, isDone }: TaskPropsType) {
//   if (isDone === true) {
//     return <li>Completed:{task}</li>;
//   }
//   return <li>Pending:{task}</li>;
// }

// function Task({ task, isDone }: TaskPropsType) {
//   if (isDone === true) {
//     return <li>Completed:{task}</li>;
//   } else {
//     return <li>Pending:{task}</li>;
//   }
// }

//Conditional rendering( using ternary )

// function Task({ task, isDone }: TaskPropsType) {
//     return isDone===true ? <li>Completed : {task} </li> : <li>Pending : {task} </li>
// }

//Conditional rendering( using && , || )

// function Task({ task, isDone }: TaskPropsType) {
//   //    return isDone===true && <li>Completed : {task} </li>
//   //    return isDone===false && <li>Pending : {task} </li>
//   // return isDone===true || <li>Completed : {task} </li>
//   // return isDone === false || <li>Pending : {task} </li>;
// }

//Conditional rendering using variable
function Task({ task, isDone }: TaskPropsType) {
    let list;
    if(isDone===true){
        list=<li>Done : {task}</li>
    }else{
        list=<li>Not Done : {task}</li>
    }

    return list;
}