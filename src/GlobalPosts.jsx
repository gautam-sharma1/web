import React from "react";
import { Array } from "./postsInfo";

function GlobalPosts(){
 let postsType = {
     date  : null,
     title : null,
     summary : null,
     fileLocation : null
 }

 let jsonFilePath = '/Users/gautamsharma/Desktop/Web Development/web/my-web/src/postsInfo.json';

 let postsArray = JSON.parse(jsonFilePath);
 postsArray = Array;
 console.log(postsArray);
 return postsArray;

};

export default GlobalPosts;