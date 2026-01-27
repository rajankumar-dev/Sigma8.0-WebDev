import { useState } from "react"

export default function CommentForm({addNewComment}){
    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5
    });


    let handleInputChange = (e) => {
        setFormData((currData) => {
            return { ...currData, [e.target.name]: e.target.value };
        });
    }

    let handleSubmit = (e) => {
        console.log(formData);
        addNewComment(formData)
        e.preventDefault();
        setFormData({
            username: "",
            remark: "",
            rating: 5
        });
    }

    return (
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" id="username" name="username" value={formData.username} onChange={handleInputChange} />
                <br /><br /><br />

                <label htmlFor="remark">Remarks</label>
                <textarea value={formData.remark} placeholder="Give few remarks" id="remark" name="remark" onChange={handleInputChange}></textarea>
                <br /><br /><br />

                <label htmlFor="rating">Rating</label>
                <input placeholder="rating" type="number" min={1} max={5} id="rating" name="rating" value={formData.rating} onChange={handleInputChange}/>
                <br /><br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}