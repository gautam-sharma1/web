
import YT from "./Youtube";
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";

const videoIDS = ["WgyyyD6KAi4","Osx4fjPPyHw","ZUTE17gsOvc","dSs3VwbGUkY"]


function YoutubeList(){

return(
    <div id="youtube">
    <hr />
        <h1>Youtube Videos</h1> <span class={"container-fluid"} style={{paddingLeft:"60em"}}>
        
        <a href="https://www.youtube.com/channel/UCKjQDJm8jN6A23CA6dITYyQ/featured"><span class="badge rounded-pill text-bg-danger">YouTube Channel</span></a>
        </span>
        
        
        
        <br />
        <Carousel fade variant="dark">
        {
                videoIDS.map(function (videoID) {
                    return (      
                        <Carousel.Item>
                        <YT videoID={videoID} />
                        <Carousel.Caption>

                        </Carousel.Caption>
                        </Carousel.Item>                 
                    
                    )
                })
        } 
</Carousel>
        </div>

)

}

export default YoutubeList;