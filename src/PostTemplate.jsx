import React from "react";


function PostTemplate({title,content,date}){

    return(
    <div>
    <h1>{title}</h1>
    <br>
    </br>
    {content}
    <br>

    </br>
    <br>
        
        </br>

     <figcaption class="blockquote-footer">
    <cite title="Source Title">{date}</cite>
    </figcaption> 
   
</div>
    )
};


export default PostTemplate;