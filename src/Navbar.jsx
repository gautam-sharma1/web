import React from "react";
import { Link } from "react-router-dom";
import WordCloud from "./WordCloud";

function Navbar() {


    return (<div className="container-fluid">
        <nav className="navbar navbar-light sticky-top ">
            <img src="../mypic.png" className="img-thumbnail rounded-circle e-0 ps-0 pe-0" alt="Gautam Sharma"
                style={{ maxWidth: "10%" }}></img>
            <div id="wordcloud">
                <WordCloud />
            </div>
            <div className="alert alert-primary" role="alert">
                Welcome to my new website!
            </div>
            <div className="container-fluid ps-0 ms-0">

                <span className="navbar-brand mb-0 ms-0 ps-0 h1" id="my-title"><Link to="/" style={{ textDecoration: 'none' , color: 'inherit'}}>Gautam Sharma</Link></span>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/about-me"><a className="nav-link active" aria-current="page" href="#">About me</a></Link>
                    </li>
                    <li className="nav-item">

                        <Link to="/posts"><a className="nav-link" href="#">Posts</a></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                    <Link to="/calender"><a className="nav-link">Book time with me</a></Link>
                        
                    </li>
                </ul>
            </div>
        </nav>
        <hr></hr>
    </div>

    )
};

export default Navbar;