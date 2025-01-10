//import React from "react";


export const Header = () => {
    let customCSS="Mathes";
    const isLoggedIn=false;
    const greeting=isLoggedIn ? <p>Hello</p>:<p>welcome</p>;
    const items =["Item 1","Item 2","Item 3"];
  return (
    //jsx fragments
    <>
    <div>Header</div>
    <h2 className="heading">prakash React</h2>
    <p className="subheading">Learn something</p>
    {/* Javascript Expression in JSX */}
    <p className={customCSS} style={{ fontSize:"20px",fontStyle:"Italic"}}>30-13={30-13}</p> 
    {/* jsx with Conditional Rendering: */}
    {greeting}
    {/* jsx with list: */}
    <ul>
        {items.map((item,index)=>(<li key={index}>{item}</li>
    ))}
    </ul>
    
    </>
  )

}

