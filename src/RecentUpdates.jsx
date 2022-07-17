import React from "react";
import CardGroup from "./CardGroup";
import YoutubeList from "./YoutubeList";
function RecentUpdates() {
  return (
    <div className="container-fluid">
      <h1>Recent Updates</h1>
      <br />
      <p id="typed-font">
        <ul>
          <li>
            <strong>February 2022:</strong> Joined the Sensor Simulation team @
            MathWorks
          </li>
          <br />
          <li>
            <strong>June 2021:</strong> Started working in the Engineering
            Development Group @ MathWorks
          </li>
          <br />
          <ul>
            <li>
              Continued developing sensor simulation framework features in C++
            </li>

            <li>
              Developed end to end computer vision software for parking lane
              line detection
            </li>
          </ul>
          <br />
          <li>
            <strong>May 2021:</strong> Graduated with a Masters is Robotics and
            Autonomous Systems with a specialization in Artificial Intelligence
            from Arizona State Univeristy
          </li>
          <br />
          <li>
            <strong>February 2021:</strong> Attending{" "}
            <a href="https://www.treehacks.com/"> Treehacks @ Stanford</a>
          </li>
          <br />
          <li>
            <strong>January 2021:</strong> Intern @ Mathworks for the Spring'21
            semester
          </li>
          <br />
          <ul>
            <li>Developed sensor simulation framework features in C++</li>
          </ul>
          <br />
          <li>
            <strong>August 2020:</strong> Received the prestigious Engineering
            Graduate Fellowship from ASU for excellence in academics
          </li>
          <br />
          <li>
            <strong>May 2020 - August 2020:</strong> Interned @ Mathworks and
            worked on the{" "}
            <a href="https://www.mathworks.com/products/reinforcement-learning.html">
              Reinforcement Learning Toolbox
            </a>
          </li>
          <br />
          <li>
            <strong>December 2019:</strong> My{" "}
            <a href="https://furi.engineering.asu.edu/participant/sharma-gautam/">
              research proposal
            </a>{" "}
            on control of autonomous fleet of drones for search and rescue
            operations got accepted to get the ASU MORE funding for the spring
            2020 semester
          </li>
        </ul>
      </p>
      <br></br>
      <hr />
      <h5>The following is my favorite quote: </h5>
      <blockquote className="blockquote">
        <p className="mb-0 font-weight-bold">
          The reasonable man adapts himself to the world. The unreasonable one
          persits in trying to adapt the world to himself. Therefore all
          progress depends on the unreasonable man
        </p>
      </blockquote>
      <hr />
      <br></br>
      <CardGroup />
      <br />
      <YoutubeList />
    </div>
  );
}

export default RecentUpdates;
