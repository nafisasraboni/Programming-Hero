export default Todo;

//type declaration
interface TodoProps{
    task:string,
    time:string
}

function Todo(props:TodoProps){
    return <li>Do your work : {props.task} at {props.time}</li>
}

//destructuring + typescript

// function Todo({task,time}){
//     return <li>Do your work : {task} at {time}</li>
// }

//only destructuring
//const {task , time} = {task:"Continue coding" , time:"2.00 PM"}