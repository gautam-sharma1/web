import React from "react";
import Post from "./Post"

 let PostGroup = () => {
    // post 1
    let datePost1 = new Date("2/1/22");
    let filename = "my-web/posts/post1.html";
    <Post date={datePost1} filename={filename}/>
};


export default PostGroup;