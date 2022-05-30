
// Posts page

import React from "react";
import { Array } from "./postsInfo";
import Card from "./Card";
import { Link } from 'react-router-dom'
import PostListItem from "./PostListItem";



function Post() {
    let posts = Array;
    return (<div className="container-fluid">

        <h1>Welcome to my posts page</h1>
        <br></br>
        <ul className="list-group list-group-flush">
            {

                posts.map(function (postData, idx) {
                    return (
                        <PostListItem key={postData.id} id={postData.id} title={postData.title} date={postData.date} summary={postData.summary} />
                    )

                })

            }
        </ul>
    </div>
    )
};

export default Post;