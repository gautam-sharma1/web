import React from "react";

function Footer(){
    const author = "Gautam Sharma";
    const taglineStart = "Built with";
    const tagLineEnd = "using Javascript, HTML, CSS and React"
    const footerValue = 
    <div>
    <footer>
        <div class="container">
            <div style={{textAlign:"center"}}>
            
            {taglineStart} {'\u2764\uFE0F'} {'\xa0'}  {tagLineEnd}
            
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
    </div>
    return footerValue;
}

export default Footer;