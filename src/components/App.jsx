import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import TextArea from "./TextArea";
import ReviewArea from "./ReviewArea";
import Review from "./Review";
function App(){
    const[blogs, setBlogs] = useState([]);
    const[revs, setRevs] = useState([]);
    function addBlog(blog){
         setBlogs(prevBlogs=>{
             return [...prevBlogs, blog]
         })
    }
    function addReview(rev){
        setRevs(prevBlogs=>{
            return [...prevBlogs, rev]
        })
   }
   function deleteBlog(id){
    setBlogs(prevBlogs=>{
       return prevBlogs.filter((blogItem,index)=>{
            return index!==id
        })
    })
   }
    return <div>
        <Header />
        <TextArea 
            onAdd={addBlog}
        />
        {blogs.map((blogItem, index)=>{
            return <Note
            key={index}
            id={index}
            title={blogItem.title}
            aname={blogItem.aname} content={blogItem.content} review={blogItem.review}
            onDelete={deleteBlog}   
            />
        })}
        
        {revs.map((blogItem)=>{
            return <Review review={blogItem.review}/>
        })}
        {/* <Footer /> */}
    </div>
}
export default App;