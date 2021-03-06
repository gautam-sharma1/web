import React from "react";
import Code from "./Code";
import PostTemplate from "./PostTemplate";


function Post2() {

    let title = "No, doing that online course won\’t make you an expert!";
    let date = "06/12/22";
    let content =
        (<div id="typed-font">

            <p className="lead">
            <span className="capital">S</span>ince the onset of the unfortunate COVID pandemic, my Linkedin has been full of posts related to students, professionals and people from all walks of life completing online courses expeditiously.
            I have seen students completing intricate and convoluted subjects like deep learning in a matter of days.
            While I am a strong proponent of self-education and self-improvement, there are a few points that I would like to share with everyone.
            <hr />
            </p>
            <br />
            <br />
            <img className = "container-fluid" style={{maxWidth: "1080px", alignContent:"center"}} src="../resources/posts2/post2:1.jpg"></img>
            <br/>
            <br/>
            <hr />
            <span className="capital">L</span>et’s take a subject, for example, say Machine Learning. It is an extremely broad subject including subtopics like Supervised learning,
            Unsupervised learning, Semi-supervised learning and so on. When someone posts a certificate of accomplishment, I feel proud of him to have shown
            discipline and dedication to complete the given course. But I would also like to remind him/her that this is not the end of the journey instead it is the beginning. Doing that course won’t make you even close to an expert. It will just nudge you in a direction where you would have an idea of the topic comprising the field. I can bet that most of the students complete a course, get a certificate and then just forget about it. Sometimes it seems that it’s all about getting the sparkling certificate of achievement. Imagine a scenario where all the MOOC’s decide not to hand over any certificates. I won’t be surprised if the number of students enrolled gets plummeted.
            <br />
            <br />
            <img className = "container-fluid" style={{maxWidth: "1080px", alignContent:"center"}} src="../resources/posts2/post2:2.jpg"></img>
            <br/>
            <br/>
            Don’t get me wrong, I am not advising against online education. I support it fully but my point is that doing that it will only give you a direction, not make you an expert. 
            After that, it is on you how you want to take it further. For example, if you just completed an ML course, you would have probably been given a set of code which you had to fill 
            in some parameters to make it work. Of course, it is a generalization and not a good one but you get my point. Most courses make you implement the already <strong>famous</strong> techniques and algorithms 
            and to be honest you don’t learn much from that approach. Most ML courses that I searched for had a headline <strong>Become a Machine Learning Expert in 4 weeks/2weeks/1week/2 hours!</strong>. Now that is something that is not possible even for the world’s most prominent scientists when they were foraying into the field.
            To give you a realistic idea ML heavily uses Linear Algebra. In my Graduate school, we had a whole semester(4 months) dedicated to it and even then we were not able to cover some topics. We also had an introductory ML course that stretched a semester too and even then we were only able to cover the basics. And then I see some students completing Deep Learning in 5 days!
            <br />
            <br />
            I would like to end this article with a famous quote
            <br />
            <br />
            <blockquote className="blockquote">
                <p><em>“I have learned that I still have a lot to learn”</em></p>
            </blockquote>
        </div>)

    return (
        <div className="container-fluid" style={{ paddingLeft: "5%" ,marginBottom:"0%"}}>
            <PostTemplate title={title} content={content} date={date} />
        </div>
    )
};


export default Post2;