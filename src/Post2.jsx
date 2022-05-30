import React from "react";
import Code from "./Code";
import PostTemplate from "./PostTemplate";


function Post2(){

    
    let JSCode = `
        for x in range:
            i = 1;
        
            with:
                s = "hello"
            <div>
            int main()
        
    
    `.trim();

    let title = "My Blog 2";
    let date = "21/96/22";
    let content=<div>
       
    Hello World Gautam. My name is Gautam Sharma
    <br />
    <Code code={JSCode} language="python"/>
    </div>

    return(
        <div className="container-fluid" style={{paddingLeft:"5%"}}>
        <PostTemplate title={title} content={content} date={date}/>
        </div>
    )
};


export default Post2;