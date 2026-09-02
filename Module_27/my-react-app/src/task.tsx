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

function Task({ task, isDone }: TaskPropsType) {
  if (isDone === true) {
    return <li>Completed:{task}</li>;
  } else {
    return <li>Pending:{task}</li>;
  }
}

//Conditional rendering( using ternary )


