import React, { useState } from "react";
function ReviewArea(props){
    const[review, setreview]=useState({
        review:""
    });
    function handleChange(event){
        const{name,value}=event.target;
        setreview(prevRev => {
            return{
                ...prevRev,
                [name]:value
            };
        });
    }
    function submitReview(event){
        props.onAdd(review)
        event.preventDefault();
    }
    return(
        <div>
            <form>
                <input name="review" onChange={handleChange} value={review.review} placeholder="Blog title"/>
                <button onClick={submitReview}>Create</button>
            </form>
        </div>
    );
}
export default ReviewArea;