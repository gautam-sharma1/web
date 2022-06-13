import React from "react";


function PostTemplate({ title, content, date }) {

    return (
        <div className="container-fluid">
            <h1>{title}</h1>
            <br>
            </br>
            <div className="blog">
            {content}
            </div>          
            <br>

            </br>
            <br>

            </br>

            <figcaption className="blockquote-footer">
                <cite title="Source Title">{date}</cite>
            </figcaption>

        </div>
    )
};


export default PostTemplate;