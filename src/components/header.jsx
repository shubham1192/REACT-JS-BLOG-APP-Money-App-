import React from "react";
function Header()
{
    return <header>
        <h1 style={{display:"inline-block"}}>The Blog App</h1>
        <h3 style={{display:"inline-block",textAlign:"center",width:"64%",fontFamily:"'Raleway', sans-serif"}}>React JS Assignment(Task 1)</h3>
        <div style={{display:"inline-block",float:"right",fontSize:"2em"}}> 
        <a  href="https://www.linkedin.com/in/shubham-i-a9b61b121/">About</a>
        </div>
    </header>
}
export default Header;