import './commentCard.css'

export default function CommentCard({comment}){
    return (
        <div className="comment">
            <h3>CommentName : {comment.name}</h3>
            <p>CommentEmail : {comment.email}</p>
            <p>CommentBody : {comment.body}</p>
        </div>
    )
}