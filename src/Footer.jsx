import React, { useState } from "react";
import {siteAuthor } from "./utils";

function Footer() {
    const author = siteAuthor;
    const taglineStart = "Built with";
    const tagLineEnd = "using Javascript, HTML, CSS and React";

    let heartAnimation = false;
    let [heartClassName, setHeartClassName] = useState("");

    function mouseEnter() {
        heartAnimation = true;
        setHeartClassName("heartEnlarge");

    }
    function mouseLeave() {
        heartAnimation = false;
        setHeartClassName("heartNormal");

    }

    const footerValue =
        <footer  style={{marginTop:"5%"}}>
            <div className="container-fluid">
                <hr></hr>
                <div style={{ textAlign: "center" }}>

                    {taglineStart} <span onMouseOver={mouseEnter} onMouseLeave={mouseLeave} className={heartClassName}>{' \u2764\uFE0F'}</span>{'\xa0'}  {tagLineEnd}
                    <br />
                    <br />
                    {author} {'\u00A9'} {new Date().getFullYear()}

                </div>
                <ul className="nav justify-content-center" id="my-footer">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="https://github.com/gautam-sharma1">Github</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/gautamsharm/">LinkedIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="mailto:gautamsharma2813@gmail.com">Email</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Subscribe</a>
                    </li>
                </ul>
            </div>
        </footer>

    return footerValue;
}

export default Footer;