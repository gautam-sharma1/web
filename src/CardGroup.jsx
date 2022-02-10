import React from "react";
import Card from "./Card";
import GlobalPosts from "./GlobalPosts";
import { Array } from "./postsInfo";

function CardGroup(){

let postsArray = Array;
let lastThreePosts = postsArray.slice(-3); 

return <div class="card-group">
{
    lastThreePosts.map(function(postData){
        return <Card date={postData.date} title={postData.title} summary={postData.summary} img={postData.img} link={postData.link}/>;
    })
}

</div>
};


export default CardGroup;