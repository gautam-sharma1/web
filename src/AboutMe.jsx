import React from "react";
import { Link } from "react-router-dom";
import Code from "./Code";

function AboutMe() {

  return (
    <div class="container-fluid">
      <h1>About Me</h1>
      <p >
        I am a passionate  software engineer. I grew up in India playing soccer and even today I don't miss any opportunity for a quick game.
        I like to code and work on personal projects during my free time.
        <br></br>
        My main interests lie in the intersection of deep learning and computer vision. I want to help make systems that make a difference in the world.
        <br></br>
        Previously I worked with MathWorks, Cranfield University and I graduated from Arizona State University in May' 21, where I have been part of exciting research projects and courses.
        <br></br>
        Most of my technical work is on <Link to="https://github.com/gautam-sharma1">GitHub</Link>
        <hr />

      </p>
    </div>
  )


};

export default AboutMe;