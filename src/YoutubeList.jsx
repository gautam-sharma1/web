
import YT from "./Youtube";


const videoIDS = ["WgyyyD6KAi4","Osx4fjPPyHw","ZUTE17gsOvc"]


function YoutubeList(){

return(
    <div  id="youtube">
    <hr />
        <h1>Youtube Videos</h1>
        <br />
        <div className="card-group">
        {
                videoIDS.map(function (videoID) {
                    return (                        
                    <YT videoID={videoID} />
                    )
                })
               } 
        </div>
        
    </div>
)

}

export default YoutubeList;