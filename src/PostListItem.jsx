import React from "react";
import { Link } from "react-router-dom";
import './PostListItem.css';

function PostListItem(props){

return( 
<div class="mb-1">
<div class="list-group-item list-group-item-action flex-column align-items-start">
<div class="d-flex w-100 justify-content-between">

  <h5 class="mb-1"><Link to={`/posts/${props.id}`}>{props.title}</Link></h5>
  <small>Published on {props.date}</small>
</div>

<p class="mb-1">{props.summary}</p>
</div>
</div>
)
};

export default PostListItem;