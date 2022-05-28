import React, { useState } from "react";
function Note(props){
    function handleClick(event)
    {props.onDelete(props.id)}
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p style={{color:"red"}}>{props.aname}</p>
            <p>{props.content}</p>
            {/* <p>{props.review}</p> */}
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}
export default Note;