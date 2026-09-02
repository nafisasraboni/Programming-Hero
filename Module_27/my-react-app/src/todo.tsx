export default Todo;

function Todo(props){
    console.log(props)
    return <li>Do your work : {props.task}</li>
}