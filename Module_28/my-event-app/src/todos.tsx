import { use } from "react"
import { TodoCard } from "./todoCard";

export default function Todos({todos}){

    const todosList = use(todos)
    console.log(todosList);
    return (
        <div>
            <h1>Todos:{todosList.length}</h1>
            {
                todosList.map(todo=><TodoCard todo={todo}></TodoCard>)
            }
        </div>
    )
}