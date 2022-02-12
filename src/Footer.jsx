import React, { useState } from "react";

function Footer() {
    const author = "Gautam Sharma";
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
        <footer>
            <div class="container-fluid">
                <div style={{ textAlign: "center" }}>

                    {taglineStart} <span onMouseOver={mouseEnter} onMouseLeave={mouseLeave} class={heartClassName}>{' \u2764\uFE0F'}</span>{'\xa0'}  {tagLineEnd}
                    <br />
                    <br />
                    {author} {'\u00A9'} {new Date().getFullYear()}

                </div>
                <ul class="nav justify-content-center" id="my-footer">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">LinkedIn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Email</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Subscribe</a>
                    </li>
                </ul>
            </div>
        </footer>

    return footerValue;
}

export default Footer;