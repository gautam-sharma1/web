import React from "react";
import { Link } from "react-router-dom";
import WordCloud from "./WordCloud";

function Navbar() {


    return (<div class="container-fluid">
        <nav class="navbar navbar-light sticky-top ">
            <img src="../mypic.png" class="img-thumbnail rounded-circle e-0 ps-0 pe-0" alt="Gautam Sharma"
                style={{ maxWidth: "10%" }}></img>
            <div id="wordcloud">
                <WordCloud />
            </div>
            <div class="alert alert-primary" role="alert">
                Welcome to my new website!
            </div>
            <div class="container-fluid ps-0 ms-0">

                <span class="navbar-brand mb-0 ms-0 ps-0 h1" id="my-title"><Link to="/" style={{ textDecoration: 'none' , color: 'inherit'}}>Gautam Sharma</Link></span>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <Link to="/about-me"><a class="nav-link active" aria-current="page" href="#">About me</a></Link>
                    </li>
                    <li class="nav-item">

                        <Link to="/posts"><a class="nav-link" href="#">Posts</a></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                    <Link to="/calender"><a class="nav-link">Book time with me</a></Link>
                        
                    </li>
                </ul>
            </div>
        </nav>
        <hr></hr>
    </div>

    )
};

export default Navbar;