
import YT from "./Youtube";
import Carousel from 'react-bootstrap/Carousel'

const videoIDS = ["WgyyyD6KAi4","Osx4fjPPyHw","ZUTE17gsOvc","dSs3VwbGUkY"]


function YoutubeList(){

return(
    <div id="youtube">
    <hr />
        <h1>Youtube Videos</h1>
        <br />
        <Carousel variant="dark">
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