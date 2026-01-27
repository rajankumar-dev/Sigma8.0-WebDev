import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comment.css"

export default function Comment(){
    let [comments, setComments] = useState([
        {
            username:"@Rk",
            remark:"great Job",
            rating:4
        },
    ]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    }

    return(
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                    <span>{comment.remark}</span>
                    &nbsp;
                    <span>(rating = {comment.rating})</span>
                    <p>- {comment.username}</p>
                </div>
                ))}
                
            </div>
            <hr /><hr />
            <CommentForm addNewComment={addNewComment} />
        </>
    )
}