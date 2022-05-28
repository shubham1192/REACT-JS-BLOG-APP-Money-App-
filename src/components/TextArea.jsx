import React, { useState } from "react";
function TextArea(props){
    const[blog, setBlog]=useState({
        title:"",
        content:"",
        aname:""
    });
    function handleChange(event){
        const{name,value}=event.target;
        setBlog(prevBlog => {
            return{
                ...prevBlog,
                [name]:value
            };
        });
    }
    function submitBlog(event){
        props.onAdd(blog)
        setBlog({
            title:"",
        content:"",
        aname:""
        })
        event.preventDefault();
    }
    return(
        <div>
            <form>
                <input name="title" onChange={handleChange} value={blog.title} placeholder="Blog title"/>
                <input name="aname" onChange={handleChange} value={blog.aname} placeholder="Author"/>
                <textarea name="content" onChange={handleChange} value={blog.content} placeholder="Write your blog" rows="10" />
                <button onClick={submitBlog}>+</button>
            </form>
        </div>
    );
}
export default TextArea;