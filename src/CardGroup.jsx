import React from "react";
import Card from "./Card";
import { Array } from "./postsInfo";

function CardGroup() {

    let postsArray = Array;

    // get last three posts
    let lastThreePosts = postsArray.slice(-3);

    return (<div>
        <h1>Recent Blogs</h1>
        <div class="card-group">

            {
                lastThreePosts.map(function (postData) {
                    return <Card key={parseInt(postData.id)} date={postData.date} title={postData.title} summary={postData.summary} img={postData.img} link={postData.link} />;
                })
            }

        </div>
    </div>
    )
};


export default CardGroup;