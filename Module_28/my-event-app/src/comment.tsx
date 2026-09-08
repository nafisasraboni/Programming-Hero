import { use } from "react"
import CommentCard from "./commentCard";

export default function Comment({promisee}){
   
    const prom = use(promisee);
    console.log(prom)

    return(
        <div>
            <h2>Comments:{prom.length}</h2>
            {
                prom.map(comment=> <CommentCard comment={comment}></CommentCard>)
            }
        </div>
    )
}