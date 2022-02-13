import React from "react";
import CardGroup from "./CardGroup";
function RecentUpdates() {
    return (
        <div class="container-fluid">
            <h1>Recent Updates</h1>
            <p>
                <ul>
                    <li><strong>February 2022:</strong> Joined the Sensor Simulation team @ MathWorks</li>
                    <li><strong>June 2021:</strong> Started working in the Engineering Development Group @ MathWorks</li>
                    <ul>
                        <li>Continued developing sensor simulation framework features in C++</li>

                        <li>Developed end to end computer vision software for parking lane line detection</li>
                    </ul>
                    <li><strong>May 2021:</strong> Graduated with a Masters is <mark>Robotics and Autonomous Systems with a specialization in Artificial Intelligence</mark> from Arizona State Univeristy</li>
                    <li><strong>February 2021:</strong> Attending Treehacks @ Stanford</li>
                    <li><strong>January 2021:</strong> Intern @ Mathworks for the Spring'21 semester</li>
                    <ul>
                        <li>Developed sensor simulation framework features in C++</li>
                    </ul>
                    <li><strong>August 2020:</strong> Received the prestigious Engineering Graduate Fellowship from ASU for excellence in academics</li>
                    <li><strong>May 2020 - August 2020:</strong> Currently I am interning @ Mathworks in the domain of reinforcement learning</li>
                    <li><strong>December 2019:</strong> My research proposal on control of autonomous fleet of drones for search and rescue operations got accepted to get the ASU MORE funding for the spring 2020 semester</li>

                </ul>

            </p>
            <br>

            </br>
            <hr />
            <h5>The following is my favorite quote: </h5>
            <blockquote class="blockquote">
                <p class="mb-0">The reasonable man adapts himself to the world. The unreasonable one persits in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man</p>
            </blockquote>
            <hr />
            <br></br>
            <CardGroup />
        </div>
    )

};


export default RecentUpdates;