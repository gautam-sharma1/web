import React from "react";
import PostTemplate from "./PostTemplate";


function Post1(){


    let title = "My Blog";
    let date = "21/96/78";
    let content=<div class="container-fluid">
        Hello World. My name is Gautam Sharma
    </div>


    return(<div class="container-fluid">
        <React.StrictMode>
        {<PostTemplate title={title} content={content} date={date}/>}
        </React.StrictMode>
        </div>
    )
};


export default Post1;