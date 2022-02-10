import React from "react";
import { TagCloud } from 'react-tagcloud'

function WordCloud(){
const data = [
    { value: 'Python', count: 49 },
    {value: 'C++', count: 50 },
    {value: 'Javascript', count: 15 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 12 },
    { value: 'Express.js', count: 12 },
    { value: 'HTML5', count: 14 },
    { value: 'CSS3', count: 17 },
  ]
  

    return    (  <TagCloud
      minSize={12}
      maxSize={100}
      tags={data}
      shuffle = {true}

    />
  )



}

export default WordCloud;